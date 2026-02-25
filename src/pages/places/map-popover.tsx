import { useEffect, useState } from 'react'
import { Hex } from './map.model'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Parchment } from '../../components/parchment'
import { useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import { getTerrainForHex } from './terrain-data'

export type MapPopoverOptions = {
  hex: Hex
  x: number
  y: number
  mapMinX: number
  mapMaxX: number
  mapMinY: number
  mapMaxY: number
}

type MapPopoverProps = {
  options?: MapPopoverOptions
  onExploreChanged: (hex: Hex) => void
  onHide: () => void
}

// Lista de terrenos geográficos (sin especiales ni genéricos de aventuras)
const TERRAIN_TYPES = [
  { id: 'plains', name: 'Llanuras' },
  { id: 'forest', name: 'Bosque' },
  { id: 'dark_forest', name: 'Bosque Oscuro' },
  { id: 'hills', name: 'Colinas' },
  { id: 'mountains', name: 'Montañas' },
  { id: 'lake', name: 'Lago' },
  { id: 'marsh', name: 'Pantano' },
  { id: 'quagmire', name: 'Cenagal' },
  { id: 'ruins', name: 'Ruinas' },
]

export const MapPopover = ({
  options,
  onExploreChanged,
  onHide,
}: MapPopoverProps) => {
  const t = useAppSelector(selectTranslateFunction(['map', 'common']))
  const [mappedTerrains, setMappedTerrains] = useState<Record<string, string>>({})

  // Cargar lo que ya hayamos cartografiado previamente en esta sesión
  useEffect(() => {
    const saved = localStorage.getItem('cartographer_data')
    if (saved) {
      try {
        // Le decimos a TypeScript que confíe en nosotros, que esto es un Record de strings
        setMappedTerrains(JSON.parse(saved) as Record<string, string>)
      } catch (e) {
        console.error('Error loading cartographer data')
      }
    }
  }, [])

  if (!options) {
    return null
  }

  const { hex, x, y, mapMaxX, mapMaxY } = options

  // Si se sale de la pantalla, ajustamos la posición
  const popoverWidth = 250
  const popoverHeight = 300
  const finalX = x + popoverWidth > mapMaxX ? x - popoverWidth : x
  const finalY = y + popoverHeight > mapMaxY ? y - popoverHeight : y

  // Función para guardar el terreno mapeado
  const handleTerrainSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTerrain = e.target.value
    if (!newTerrain) return

    const newData = { ...mappedTerrains, [hex.hexKey]: newTerrain }
    setMappedTerrains(newData)
    localStorage.setItem('cartographer_data', JSON.stringify(newData))
  }

  // Función para copiar todo el JSON de los terrenos mapeados
  const copyMappedData = () => {
    const dataString = JSON.stringify(mappedTerrains, null, 2)
    navigator.clipboard.writeText(dataString)
    alert("¡Datos del mapa copiados al portapapeles!\n\nVe a 'terrain-data.ts' y pégalos.")
  }

  // Terreno actual: Primero miramos si lo acabamos de mapear ahora. Si no, miramos la base de datos oficial.
  const currentTerrain = mappedTerrains[hex.hexKey] || getTerrainForHex(hex.hexKey) || ''

  return (
    <div
      className="absolute z-50 w-64 shadow-2xl"
      style={{ left: finalX, top: finalY }}
    >
      <Parchment padding="sm">
        <div className="flex flex-col gap-4 relative">
          {/* Botón de cerrar */}
          <button 
            onClick={onHide}
            className="absolute -top-2 -right-2 text-red-800 font-bold text-xl hover:text-red-500"
          >
            ×
          </button>

          <h3 className="text-center font-bold text-xl border-b-2 border-[#8b5a2b] pb-2">
            Hexágono: {hex.hexKey}
          </h3>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Asignar Terreno:</label>
            <select 
              value={currentTerrain}
              onChange={handleTerrainSelect}
              className="p-2 border-2 border-[#8b5a2b] bg-[#f4e4bc] rounded-md font-bold text-gray-800 cursor-pointer"
            >
              <option value="">-- Selecciona Terreno --</option>
              {TERRAIN_TYPES.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          {/* Botón original de exploración (Opcional, lo dejamos por si quieres seguir usándolo) */}
          <ParchmentButton onPress={() => onExploreChanged(hex)}>
            {hex.explored ? t('map:mark_unexplored') : t('map:mark_explored')}
          </ParchmentButton>

          {/* Botón de Cartógrafo */}
          {Object.keys(mappedTerrains).length > 0 && (
            <div className="mt-4 pt-4 border-t-2 border-[#8b5a2b] flex flex-col items-center">
              <span className="text-xs mb-2 font-bold text-gray-600">
                Hexágonos mapeados: {Object.keys(mappedTerrains).length}
              </span>
              <button 
                onClick={copyMappedData}
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-500"
              >
                📋 Copiar Datos Cartógrafo
              </button>
            </div>
          )}
        </div>
      </Parchment>
    </div>
  )
}

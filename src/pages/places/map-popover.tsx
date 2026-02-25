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

// Pequeño diccionario para traducir los IDs técnicos a nombres bonitos en la interfaz
const terrainNames: Record<string, string> = {
  plains: 'Llanuras',
  forest: 'Bosque',
  dark_forest: 'Bosque Oscuro',
  hills: 'Colinas',
  mountains: 'Montañas',
  lake: 'Lago',
  marsh: 'Marjal',
  quagmire: 'Ciénaga',
  ruins: 'Ruinas',
  special: 'Sitio Especial',
  castle: 'Castillo',
  dungeon: 'Mazmorra',
  village: 'Pueblo'
}

export const MapPopover = ({
  options,
  onExploreChanged,
  onHide,
}: MapPopoverProps) => {
  const t = useAppSelector(selectTranslateFunction(['map', 'common']))

  if (!options) {
    return null
  }

  const { hex, x, y, mapMaxX, mapMaxY } = options

  // Si se sale de la pantalla, ajustamos la posición
  const popoverWidth = 200
  const popoverHeight = 150
  const finalX = x + popoverWidth > mapMaxX ? x - popoverWidth : x
  const finalY = y + popoverHeight > mapMaxY ? y - popoverHeight : y

  // Obtenemos el terreno asignado desde nuestra gran base de datos
  const terrainId = getTerrainForHex(hex.hexKey)
  const terrainDisplayName = terrainNames[terrainId] || 'Llanuras'

  return (
    <div
      className="absolute z-50 w-56 shadow-2xl"
      style={{ left: finalX, top: finalY }}
    >
      <Parchment padding="sm">
        <div className="flex flex-col gap-3 relative">
          {/* Botón de cerrar */}
          <button 
            onClick={onHide}
            className="absolute -top-2 -right-2 text-red-800 font-bold text-xl hover:text-red-500"
          >
            ×
          </button>

          <div className="text-center border-b-2 border-[#8b5a2b] pb-2">
            <h3 className="font-bold text-xl text-gray-900">
              {hex.hexKey}
            </h3>
            <span className="text-sm font-semibold text-[#8b5a2b] uppercase tracking-wider">
              {terrainDisplayName}
            </span>
          </div>

          {/* Botón de exploración */}
          <ParchmentButton onPress={() => onExploreChanged(hex)}>
            {hex.explored ? t('map:mark_unexplored') : t('map:mark_explored')}
          </ParchmentButton>
          
        </div>
      </Parchment>
    </div>
  )
}

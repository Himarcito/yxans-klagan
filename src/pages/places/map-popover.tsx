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

// Diccionario para traducir el terreno a español en el popover
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

  // Centramos el menú sobre el hexágono de forma más elegante
  const popoverWidth = 200
  const popoverHeight = 150
  
  // Posición dinámica para que no se salga de la pantalla
  let finalX = x - (popoverWidth / 2) + 25 
  let finalY = y + 50
  
  if (finalX + popoverWidth > mapMaxX) finalX = mapMaxX - popoverWidth
  if (finalY + popoverHeight > mapMaxY) finalY = mapMaxY - popoverHeight

  // Obtenemos el terreno desde tu base de datos cartografiada
  const terrainId = getTerrainForHex(hex.hexKey)
  const terrainDisplayName = terrainNames[terrainId] || 'Llanuras'

  return (
    <div
      className="absolute z-50 w-56 shadow-2xl"
      style={{ left: finalX, top: finalY }}
    >
      <Parchment padding="sm">
        <div className="flex flex-col gap-2 relative text-center">
          
          {/* Título y Terreno */}
          <div className="border-b-2 border-[#8b5a2b] pb-2 mb-2">
            <h3 className="font-bold text-xl text-gray-900 leading-none">
              {hex.hexKey}
            </h3>
            <span className="text-xs font-bold text-[#8b5a2b] uppercase tracking-wider">
              {terrainDisplayName}
            </span>
          </div>

          {/* Botón de Explorar / Olvidar (Restaurado a los originales) */}
          <ParchmentButton onPress={() => onExploreChanged(hex)}>
            {hex.explored ? '👁️ Olvidar' : '🗺️ Explorar'}
          </ParchmentButton>

          {/* Botón de Cerrar menú */}
          <ParchmentButton buttonType="ghost" onPress={onHide}>
            Cerrar
          </ParchmentButton>
          
        </div>
      </Parchment>
    </div>
  )
}

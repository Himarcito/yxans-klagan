import { Option } from 'ts-results'
import { useMemo } from 'react'
import { Hex, HexKey } from './map.model'
import { getTerrainForHex } from './terrain-data'

// --- 1. DICCIONARIO DE IMÁGENES ---
const specialIcons: Partial<Record<string, string>> = {
  'Ah21': 'Pico de Ámbar.png',
  'O28': 'Las Minas de Tejepiedra.png',
  'Al11': 'Pelagia.png',
  'Ab27': 'Pueblo Hueco.png',
  'Y8': 'El Torreón Argénteo de Las Maravillas.png',
  'E38': 'Vond.png',
  'G32': 'El Valle de los Muertos.png',
  'Aa36': 'El Bosque de las Brujas.png',
  'G20': 'El Ojo de la Rosa.png',
  'S48': 'El Pico del Hambriento.png',
  'E8': 'Jardín de Piedra.png',
  'I32': 'La Casa del Sajador.png',
  'N11': 'Muelehueso.png',
  'Ae44': 'Paso de la Arboleda.png',
  'F15': 'Pozo del Cuervo.png',
  'P47': 'Roca de los Vientos.png'
}

type PolygonProps = {
  hex: Hex
  selectedHex: Option<HexKey>
  onMouseOver: (e: React.MouseEvent<SVGPolygonElement | SVGGElement, MouseEvent>) => void
  onClick: (e: React.MouseEvent<SVGPolygonElement | SVGGElement, MouseEvent>) => void
}

// Función matemática para encontrar el centro exacto del hexágono a partir de sus puntos
const getHexCenter = (points: string) => {
  const pairs = points.trim().split(/\s+/)
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity
  
  pairs.forEach(pair => {
    const [xStr, yStr] = pair.split(',')
    const x = parseFloat(xStr)
    const y = parseFloat(yStr)
    if (!isNaN(x) && !isNaN(y)) {
      if (x < minX) minX = x
      if (x > maxX) maxX = x
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }
  })
  
  return { 
    x: minX + (maxX - minX) / 2, 
    y: minY + (maxY - minY) / 2 
  }
}

export const Polygon = ({
  hex,
  selectedHex,
  onMouseOver,
  onClick,
}: PolygonProps) => {
  const selectedClass = selectedHex
    .map((s) => (s === hex.hexKey ? 'hex-selected' : ''))
    .unwrapOr('')

  // Averiguamos si este hexágono es un sitio especial
  const terrain = getTerrainForHex(hex.hexKey)
  const isSpecial = terrain === 'special'

  // Si es especial, calculamos su centro
  const center = useMemo(() => isSpecial ? getHexCenter(hex.points) : null, [hex.points, isSpecial])

  // Buscamos si este hexágono tiene una imagen asignada en nuestro diccionario
  const iconFileName = specialIcons[hex.hexKey]

  // Tamaño del ícono (ajusta el número si lo ves muy grande o muy pequeño en el mapa)
  const iconSize = 45

 return (
    <g 
      onClick={onClick as any} 
      onMouseOver={onMouseOver as any} 
      style={{ cursor: 'pointer' }}
    >
      <polygon
        className={`cls-2 hex ${
          hex.explored ? 'hex-explored' : ''
        } ${selectedClass} ${isSpecial ? 'hex-special' : ''}`}
        x="0"
        y="0"
        width="100%"
        height="100%"
        points={hex.points}
        // Tintado dorado para resaltar los sitios de campaña:
        style={isSpecial ? { fill: 'rgba(255, 215, 0, 0.25)', stroke: '#b8860b', strokeWidth: 2 } : {}}
      />
      
      {/* Si es especial, calculamos el centro y TIENE imagen, la dibujamos forzando la ruta raíz (/) */}
      {isSpecial && center && iconFileName && (
        <image
          href={`/${iconFileName}`}   /* <--- ESTA ES LA MAGIA QUE FALTABA */
          x={center.x - iconSize / 2}
          y={center.y - iconSize / 2}
          width={iconSize}
          height={iconSize}
          style={{ pointerEvents: 'none' }} 
        />
      )}
    </g>
  )
}

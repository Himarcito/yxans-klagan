import { Option } from 'ts-results'
import { useMemo } from 'react'
import { Hex, HexKey } from './map.model'
import { getTerrainForHex } from './terrain-data'

// --- 1. DICCIONARIO DE IMÁGENES ---
// Aquí le decimos al código qué imagen de la carpeta public/ va en cada hexágono.
// IMPORTANTE: Cambia los nombres de la derecha por los nombres EXACTOS de tus archivos.
const specialIcons: Partial<Record<string, string>> = {
  'Ah21': 'pico-ambar.png',       // Ejemplo: Pico de Ámbar
  'O28': 'tejepiedra.png',        // Ejemplo: Minas de Tejepiedra
  'E38': 'vond.png',              // Ejemplo: Vond
  'Al11': 'pelia.png',            // Ejemplo: Pelagia
  'Ab27': 'pueblo-hueco.png',     // Ejemplo: Pueblo Hueco
  'Y8': 'torreon.png',            // Ejemplo: Torreón Argénteo
  // Añade las demás aquí siguiendo el mismo formato...
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
      
      {/* Si es especial, calculamos el centro y TIENE imagen en el diccionario, la dibujamos */}
      {isSpecial && center && iconFileName && (
        <image
          href={iconFileName}
          x={center.x - iconSize / 2}
          y={center.y - iconSize / 2}
          width={iconSize}
          height={iconSize}
          style={{ pointerEvents: 'none' }} /* Evita que el ícono bloquee el clic del hexágono */
        />
      )}
    </g>
  )
}

import { HexKey, TerrainType } from './map.model'

export const hexTerrainMap: Partial<Record<HexKey, TerrainType>> = {}

const setTerrain = (hexes: HexKey[], terrain: TerrainType) => {
  hexes.forEach(h => { hexTerrainMap[h] = terrain })
}

// CASTILLOS (Extraídos de tu CSV)
setTerrain(['S14', 'Ag48', 'D21', 'P37', 'V27', 'Ak42', 'Ad9', 'Z49', 'U44', 'O8', 'K6', 'P25', 'Ai4', 'X15'], 'castle')

// MAZMORRAS (Extraídas de tu CSV)
setTerrain(['Aj15', 'Ag30', 'F5', 'R7', 'W42', 'Ag6', 'Ah9', 'J37', 'Ag9', 'E4', 'Z43', 'Ac44', 'V3', 'T39', 'K46', 'K18', 'T23', 'J13', 'M14', 'An23', 'Af3', 'An5', 'F45', 'M4', 'D27', 'D11', 'F29', 'N45'], 'dungeon')

// PUEBLOS GENÉRICOS (Extraídos de tu CSV)
setTerrain(['Ad3', 'T3', 'L37', 'U18', 'Q36', 'Ag38', 'T33', 'Ai8', 'Al17', 'M48', 'C24', 'Q18', 'Ac12', 'Z17', 'Am30', 'Ak34', 'Q14', 'Ag14', 'Am26'], 'village')

// ESCENARIOS DE AVENTURA ÚNICOS (Especiales del CSV)
setTerrain(['Z1', 'B39', 'G49', 'B3', 'I6', 'Ab27', 'P47', 'G32', 'N11', 'F15', 'Ah21', 'G20', 'Al11', 'E8', 'O28', 'I32', 'E38', 'S48', 'Aa36', 'Ae44', 'Y8'], 'special')

// Todo lo demás será Llanura por ahora, hasta que usemos la brocha manual
export const getTerrainForHex = (hexKey: HexKey): TerrainType => {
  return hexTerrainMap[hexKey] || 'plains';
}

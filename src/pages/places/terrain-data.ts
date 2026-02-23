import { HexKey, TerrainType } from './map.model'

export const hexTerrainMap: Partial<Record<HexKey, TerrainType>> = {}

const setTerrain = (hexes: HexKey[], terrain: TerrainType) => {
  hexes.forEach(h => { hexTerrainMap[h] = terrain })
}

// 1. MONTAÑAS (Cordillera de Toynd y bordes montañosos)
setTerrain([
  'A2','A4','A6','A8','A10','A12','A14','A16','A18','A20','A22','A24','A26','A28','A30','A32','A34','A36','A38','A40','A42','A44','A46','A48','A50',
  'B1','B3','B5','B7','B9','B11','B13','B15','B17','B19','B21','B23','B25','B27','B29','B31','B33','B35','B37','B39','B41','B43','B45','B47','B49','B51',
  'C2','C4','C6','C8','C10','C12','C14','C16','C18','C20','C22','C24','C26','C28','C30','C32','C34','C36','C38','C40','C42','C44','C46','C48','C50',
  'D1','D3','D5','D7','D9','D11','D13','D39','D41','D43','D45','D47','D49','D51',
  'E2','E4','E6','E8','E10','E40','E42','E44','E46','E48','E50',
  'F1','F3','F5','F7','F9','F41','F43','F45','F47','F49','F51',
  'G2','G4','G6','G8','G42','G44','G46','G48','G50',
  'H1','H3','H5','H7','H43','H45','H47','H49','H51',
  'O24','O26','P23','P25','P27','Q24','Q26','R25' // Montañas centrales
], 'mountain')

// 2. BOSQUE OSCURO (Arin, Lobregal, Feulenmarca, Colmillos)
setTerrain([
  // Lobregal (Norte)
  'I2','I4','I6','J1','J3','J5','J7','K2','K4','K6','K8','L1','L3','L5','L7','L9','M2','M4','M6','M8','M10','N1','N3','N5','N7','N9','O2','O4','O6','O8','P1','P3','P5','P7','Q2','Q4','Q6',
  // Feulenmarca (Noroeste)
  'E12','E14','E16','E18','E20','F11','F13','F15','F17','F19','G10','G12','G14','G16','G18','H11','H13','H15','H17','H19','I12','I14','I16',
  // Bosque de Arin (Centro-Oeste)
  'G20','G22','G24','G26','G28','G30','G32','H21','H23','H25','H27','H29','H31','I20','I22','I24','I26','I28','I30','I32','J21','J23','J25','J27','J29','K22','K24','K26','K28','L25',
  // Bosque de los Colmillos (Sureste)
  'L47','L49','L51','M44','M46','M48','M50','N43','N45','N47','N49','N51','O42','O44','O46','O48','O50','P43','P45','P47','P49','P51','Q44','Q46','Q48','Q50','R45','R47','R49','R51','S46','S48','S50','T47','T49','T51'
], 'dark_forest')

// 3. LAGOS
setTerrain([
  'K14','L13','L15','M12','M14','N13','N15','O14','O16','P15', // Lago Varda
  'M32','N31','O32','P31', // Lago de Moldena
  'W24','X25','Y24' // Lagos del Este
], 'lake')

// 4. MARJALES / CIÉNAGAS (Pantanos)
setTerrain([
  'T17','U16','V15','V17','W16','W18','X15','X17','Y16','Z15','Z17','Aa16', // Margelda Norte
  'U28','V27','V29','W28','W30','X27','X29','Y28','Y30','Z27','Z29','Aa28','Ab29','Ac28' // Margelda Sur
], 'marshlands')

// 5. BOSQUE (Bosques normales como Las Alisedas)
setTerrain([
  'J39','J41','J43','K38','K40','K42','L39','L41','L43','M40','M42','N39','N41','O40'
], 'forest')

// 6. COLINAS
setTerrain([
  'S24','S26','T25','T27','U24','U26','V25','W26','X23','Y22'
], 'hills')

// Todo hexágono que no esté expresamente en esta lista, el sistema lo detectará como 'plains' (Llanura) automáticamente.

export const getTerrainForHex = (hexKey: HexKey): TerrainType => {
  return hexTerrainMap[hexKey] || 'plains';
}

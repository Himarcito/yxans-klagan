import { HexKey, TerrainType } from './map.model'

export const hexTerrainMap: Partial<Record<HexKey, TerrainType>> = {}

const setTerrain = (hexes: HexKey[], terrain: TerrainType) => {
  hexes.forEach(h => { hexTerrainMap[h] = terrain })
}

// 1. EL MAR / GRANDES LAGOS (Toda la costa este y Lago Varda/Moldena)
setTerrain([
  // Mar del Este (Desde la columna Ac hasta el final)
  'Ac14','Ad13','Ad15','Ae14','Ae16','Af13','Af15','Af17','Ag14','Ag16','Ag18','Ag20',
  'Ah13','Ah15','Ah17','Ah19','Ah21','Ah23','Ah25','Ah27','Ah29','Ah31','Ah33','Ah35','Ah37','Ah39','Ah41','Ah43','Ah45','Ah47','Ah49','Ah51',
  'Ai12','Ai14','Ai16','Ai18','Ai20','Ai22','Ai24','Ai26','Ai28','Ai30','Ai32','Ai34','Ai36','Ai38','Ai40','Ai42','Ai44','Ai46','Ai48','Ai50',
  'Aj11','Aj13','Aj15','Aj17','Aj19','Aj21','Aj23','Aj25','Aj27','Aj29','Aj31','Aj33','Aj35','Aj37','Aj39','Aj41','Aj43','Aj45','Aj47','Aj49','Aj51',
  'Ak12','Ak14','Ak16','Ak18','Ak20','Ak22','Ak24','Ak26','Ak28','Ak30','Ak32','Ak34','Ak36','Ak38','Ak40','Ak42','Ak44','Ak46','Ak48','Ak50',
  'Al11','Al13','Al15','Al17','Al19','Al21','Al23','Al25','Al27','Al29','Al31','Al33','Al35','Al37','Al39','Al41','Al43','Al45','Al47','Al49','Al51',
  'Am10','Am12','Am14','Am16','Am18','Am20','Am22','Am24','Am26','Am28','Am30','Am32','Am34','Am36','Am38','Am40','Am42','Am44','Am46','Am48','Am50',
  'An11','An13','An15','An17','An19','An21','An23','An25','An27','An29','An31','An33','An35','An37','An39','An41','An43','An45','An47','An49','An51',
  'Ao10','Ao12','Ao14','Ao16','Ao18','Ao20','Ao22','Ao24','Ao26','Ao28','Ao30','Ao32','Ao34','Ao36','Ao38','Ao40','Ao42','Ao44','Ao46','Ao48','Ao50',
  // Lago Varda y Moldena
  'K14','L13','L15','M12','M14','N13','N15','O14','O16','P15','P17','Q16','M32','N31','O32','P31','Q32'
], 'lake')

// 2. MONTAÑAS (Cordillera de Toynd, bordes, nubes y picos centrales)
setTerrain([
  'A2','A4','A6','A8','A10','A12','A14','A16','A18','A20','A22','A24','A26','A28','A30','A32','A34','A36','A38','A40','A42','A44','A46','A48','A50',
  'B1','B3','B5','B7','B9','B11','B13','B15','B17','B19','B21','B23','B25','B27','B29','B31','B33','B35','B37','B39','B41','B43','B45','B47','B49','B51',
  'C2','C4','C6','C8','C10','C12','C14','C16','C18','C20','C22','C24','C26','C28','C30','C32','C34','C36','C38','C40','C44','C46','C48','C50',
  'D1','D3','D5','D7','D9','D11','D13','D15','D17','D19','D21','D23','D25','D27','D29','D31','D33','D35','D37','D39','D41','D43','D45','D47','D49','D51',
  'E2','E4','E6','E8','E10','E30','E32','E34','E36','E38','E40','E42','E44','E46','E48','E50',
  'F1','F3','F5','F7','F9','F31','F33','F35','F37','F39','F41','F43','F45','F47','F49','F51',
  'G2','G4','G6','G8','G36','G38','G40','G42','G44','G46','G48','G50',
  'H1','H3','H5','H7','H37','H39','H41','H43','H45','H47','H49','H51',
  'I44','I46','I48','I50','J45','J47','J49','J51','K46','K48','K50',
  // Montañas Centrales y Norte
  'N25','O24','O26','P23','P25','P27','Q24','Q26','R25','S24',
  'T1','U2','V1','W2','X1','X3','Y2','Z1','Aa2','Ab1','Ac2','Ad1','Ad3','Ae2','Ae4','Af1','Af3'
], 'mountain')

// 3. BOSQUE OSCURO (Arin, Lobregal, Feulenmarca, Colmillos)
setTerrain([
  // Lobregal (Norte - Expandido hasta Y8)
  'I2','I4','I6','J1','J3','J5','J7','K2','K4','K6','K8','K10','L1','L3','L5','L7','L9','L11','M2','M4','M6','M8','M10','N1','N3','N5','N7','N9','O2','O4','O6','O8','O10','P1','P3','P5','P7','P9','Q2','Q4','Q6','Q8','R1','R3','R5','R7','S2','S4','S6','T3','T5','U4','U6','V3','V5','W4','W6','X5','X7','X9','Y4','Y6','Y8','Y10','Z3','Z5','Z7','Z9','Aa4','Aa6','Aa8','Ab3','Ab5','Ab7','Ac4','Ac6',
  // Feulenmarca (Noroeste)
  'E12','E14','E16','E18','E20','F11','F13','F15','F17','F19','F21','G10','G12','G14','G16','G18','G20','H11','H13','H15','H17','H19','I12','I14','I16','I18',
  // Bosque de Arin (Centro-Oeste)
  'G22','G24','G26','G28','G30','G32','H21','H23','H25','H27','H29','H31','H33','I20','I22','I24','I26','I28','I30','I32','J21','J23','J25','J27','J29','K22','K24','K26','K28','L25','L27',
  // Bosque de los Colmillos (Sureste - Expandido para S42)
  'L47','L49','L51','M44','M46','M48','M50','N43','N45','N47','N49','N51','O42','O44','O46','O48','O50','P41','P43','P45','P47','P49','P51','Q40','Q42','Q44','Q46','Q48','Q50','R41','R43','R45','R47','R49','R51','S42','S44','S46','S48','S50','T43','T45','T47','T49','T51','U44','U46','U48','U50','V45','V47','V49','V51','W46','W48','W50','X47','X49','X51'
], 'dark_forest')

// 4. MARJALES / CIÉNAGAS (Pantanos Margelda)
setTerrain([
  'T17','U16','U18','V15','V17','V19','W16','W18','X15','X17','Y16','Z15','Z17','Aa16','Ab17', // Margelda Norte
  'U28','V27','V29','W28','W30','X27','X29','X31','Y28','Y30','Z27','Z29','Z31','Aa28','Aa30','Ab29','Ab31','Ac28','Ac30','Ad29' // Margelda Sur
], 'marshlands')

// 5. BOSQUE (Bosques normales)
setTerrain([
  'J39','J41','J43','K38','K40','K42','L37','L39','L41','L43','M38','M40','M42','N37','N39','N41','O38','O40'
], 'forest')

// 6. COLINAS
setTerrain([
  'S26','T25','T27','U24','U26','V25','W26','X23','Y22'
], 'hills')

// 7. ESCENARIOS DE AVENTURA (Pueblos, Mazmorras, Castillos)
// Estos son algunos de los principales marcados en el mapa original.
setTerrain([
  'C42', // El Hueco (Håga)
  'X7',  // Refugio Lejano (Farhaven) - CORREGIDO
  'O34', // Pelia
  'P13', // Grindbone
], 'village')

setTerrain([
  'O32', // Roca del Clima (Weatherstone)
  'S22', // Castillo del Velo
  'M18', // Cuervo de Piedra
], 'dungeon')

setTerrain([
  'I24', // Pico de Ámbar
  'W16', // Puerta de Óxido
], 'castle')

// Todo hexágono que no esté expresamente en esta lista, será Llanura ('plains').
export const getTerrainForHex = (hexKey: HexKey): TerrainType => {
  return hexTerrainMap[hexKey] || 'plains';
}

import { HexKey } from './map.model'

export interface SpecialLocation {
  name: string
  book: string
  page: string // En formato string por si queremos poner "Págs 12-15"
  description: string
}

export const specialLocations: Partial<Record<HexKey, SpecialLocation>> = {
  'Ah21': {
    name: 'Pico de Ámbar',
    book: 'La Purga del Cuervo',
    page: '91',
    description: 'Antiguo observatorio élfico en lo alto de la montaña. Ahora es una fortaleza tomada por una facción que custodia uno de los fragmentos de la corona.'
  },
  'O28': {
    name: 'Las Minas de Tejepiedra',
    book: 'La Purga del Cuervo',
    page: '141',
    description: 'Antigua mina enana y próspero asentamiento, ahora sumida en un conflicto tras la llegada de un nigromante y su legión de no-muertos.'
  },
  'Al11': {
    name: 'Pelagia',
    book: 'Manual de la Directora',
    page: '133',
    description: 'Bajo la superficie del agua yacen las ruinas de una mítica ciudad y un monstruo milenario.'
  },
  'B39': {
    name: 'Paso de Puertoumbrío',
    book: 'Manual de la Directora',
    page: '23',
    description: 'Un traicionero paso de montaña infestado de peligros y asaltantes.'
  },
  'Ab27': {
    name: 'Pueblo Hueco (El Hueco / Håga)',
    book: 'Manual de la Directora',
    page: '185',
    description: 'Aldea construida sobre un inmenso foso de sacrificios. Está gobernada por Zygofer.'
  },
  'Y8': {
    name: 'El Torreón Argénteo de Las Maravillas',
    book: 'El Capitel de Quetzel',
    page: '7',
    description: 'Un inmenso capitel plateado que emerge de la tierra y parece no tener entrada visible.'
  },
  // He dejado listos los huecos para el resto de tus escenarios del CSV:
  'E38': { name: 'Vond', book: 'La Purga del Cuervo', page: '180', description: 'La fortaleza inexpugnable del Rey Demonio Zygofer y sus seguidores más temibles.' },
  'Z1': { name: 'La Nieba Calma', book: 'Desconocido', page: '-', description: '...' },
  'G49': { name: 'El Sello de Hierro', book: 'Manual de la Directora', page: '19', description: '...' },
  'B3': { name: 'Belderand', book: 'Manual de la Directora', page: '15', description: '...' },
  'I6': { name: 'Los Caminos Sinuosos', book: '-', page: '-', description: '...' },
  'P47': { name: 'Roca de los Vientos', book: '-', page: '-', description: '...' },
  'G32': { name: 'El Valle de los Muertos', book: '-', page: '-', description: '...' },
  'N11': { name: 'Muelehueso', book: 'Manual de la Directora', page: '17', description: '...' },
  'F15': { name: 'Pozo del Cuervo', book: '-', page: '-', description: '...' },
  'G20': { name: 'Ojo de la Rosa', book: '-', page: '-', description: '...' },
  'E8': { name: 'Jardín de Piedra', book: 'Manual de la Directora', page: '24', description: '...' },
  'I32': { name: 'La Casa del Sajador', book: 'El Capitel de Quetzel', page: '45', description: '...' },
  'S48': { name: 'El Pico del Hambriento', book: 'Escenarios de Aventuras', page: '12', description: '...' },
  'Aa36': { name: 'El Bosque de las Brujas', book: 'El Capitel de Quetzel', page: '23', description: '...' },
  'Ae44': { name: 'Paso de la Arboleda', book: '-', page: '-', description: '...' }
}

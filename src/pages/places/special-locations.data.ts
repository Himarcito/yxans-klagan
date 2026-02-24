import { HexKey } from './map.model'

export interface SpecialLocation {
  name: string
  book: string
  page: number
  description: string
}

// Aquí volcaremos la información extraída de tus PDFs en cuanto tengamos las coordenadas del CSV
export const specialLocations: Partial<Record<HexKey, SpecialLocation>> = {
  // EJEMPLO DE CÓMO QUEDARÁ:
  // 'C42': {
  //   name: 'El Hueco (Håga)',
  //   book: 'La Purga del Cuervo',
  //   page: 54,
  //   description: 'Un antiguo foso de sacrificios convertido en aldea. Está gobernada por el clan de los cantores de la muerte...'
  // }
}

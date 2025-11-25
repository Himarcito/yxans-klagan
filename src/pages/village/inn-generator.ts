import { nanoid } from 'nanoid'
import {
  weightedRandom,
  WeightedChoice,
  choose,
} from '../../functions/dice.functions'
import { Character } from './character'
import { VillageInstitution } from './village-generator'
import { ValidLanguage } from '../../hooks/useValidLanguage'
import { TranslationKey } from '../../store/translations/translation.model'

export type Inn = {
  // CORRECCIÓN IMPLÍCITA: ValidLanguage ahora es 'es'
  name: { [L in ValidLanguage]: string } 
  id: string
  oddity: InnOddity
  speciality: InnSpecialty
  guest: InnGuest
  owner: Character
}

export const createRandomInn = ({ owner }: VillageInstitution): Inn => {
  const name = {
    // CORRECCIÓN 1: Cambiar 'en' por 'es'
    es: createRandomInnName(), 
  }
  const { oddity, guest, speciality } =
    weightedRandom(innQuirksWithWeights).value

  return {
    id: nanoid(),
    name,
    oddity,
    speciality,
    guest,
    owner,
  }
}

const innOddity = [
// ... (innOddity, innSpecialty, innGuest arrays y dicts permanecen igual) ...
// (Ya que solo contienen claves, no textos, no requieren traducción aquí)
// ... (innQuirksWithWeights array permanece igual) ...

// Función corregida: Usar listas en español y devolver clave 'es'
export const createRandomInnName = (): { [L in ValidLanguage]: string } => {
  // CORRECCIÓN 4: Usar listas en español
  const prefix = choose(innNamePrefixesEs)
  const suffix = choose(innNameSuffixesEs)

  // CORRECCIÓN 5: Devolver el nombre con la clave 'es'
  return {
    es: `${prefix} ${suffix}`
  }
}

// Se eliminaron innNamePrefixesSv y innNameSuffixesSv

// ANTES: const innNamePrefixesEn = [...]
const innNamePrefixesEs = [
  'El Tercero',
  'El Pequeño',
  'El Rojo',
  'El Brumoso',
  'El Sangriento',
  'El Viejo',
  'El Dorado',
  'El Frío',
  'El Refrescante',
  'El Bueno',
  'El Segundo',
  'El Último',
  'El Saltador',
  'El Feliz',
  'El Cantor',
  'El Rodante',
  'El Agitado',
  'El Lamentador',
  'El Codicioso',
  'El Redondo',
  'El Flamígero',
  'La Plata',
  'El Negro',
  'El Muerto',
  'El Grande',
  'El Rugiente',
  'El Aclamador',
  'El Tarareador',
  'El Escaso',
  'El Gordo',
  'El Grueso',
  'El Dulce',
  'El Ruidoso',
  'El Gruñón',
  'El Borroso',
  'El Peludo',
  'El Amargo',
]

// ANTES: const innNameSuffixesEn = [...]
const innNameSuffixesEs = [
  'Farol',
  'Cerdo',
  'Rueda',
  'Umbral',
  'Gorrión',
  'Cabra',
  'Flecha',
  'Olla',
  'Cordero',
  'Doncella',
  'Hombre',
  'Dragón',
  'Grifo',
  'Jabalí',
  'Barril',
  'Bardo',
  'Perro',
  'Caballo',
  'Chica',
  'Lobo',
  'Oso',
  'Fantasma',
  'Rata',
  'Tarro',
  'Jarra',
  'Cáliz',
  'Águila',
  'Cuervo',
  'Martillo',
  'Pico',
  'Corneta',
  'Druida',
  'Caballero',
  'Bandido',
  'Jabalí Salvaje',
  'Cazador',
  'Cresta',
  'Cueva',
]

import { ValidLanguage } from '../../hooks/useValidLanguage'
import { rollGender } from '../../functions/names.functions'

// Este tipo debe ser exportado.
export type LanguageNameMap = Record<ValidLanguage, readonly string[]>

export type LanguageStringMap = { [VL in ValidLanguage]: string }
export type LanguageStringArrayMap = { [VL in ValidLanguage]: readonly string[] }

const getNamesFromMap = (
  map: LanguageNameMap,
  lang: ValidLanguage,
): readonly string[] => {
  return map[lang]
}

export const getFirstName = (
  names: LanguageNameMap,
  lang: ValidLanguage,
  index: number,
): string => {
  return getNamesFromMap(names, lang)[index]
}

export const getLastname = (
  names: LanguageNameMap,
  lang: ValidLanguage,
  index: number,
): string => {
  return getNamesFromMap(names, lang)[index]
}

export const getLanguageNames = (
  // Se eliminó la variable 'lang' ya que no se usa para evitar TS6133
): LanguageNameMap => {
  return {
    en: [
      'Ania',
      'Elara',
      'Lyssa',
      'Thalia',
      'Zane',
      'Cain',
      'Orin',
      'Roric',
      'Silas',
      'Torvin',
    ],
  }
}

export const getLanguageNamesLast = (
  // Se eliminó la variable 'lang' ya que no se usa para evitar TS6133
): LanguageNameMap => {
  return {
    en: [
      'Strongbow',
      'Shadowalker',
      'Ironhand',
      'Swiftfoot',
      'Brightblade',
      'Stonefist',
      'Windrunner',
      'Blackwood',
      'Frostbeard',
      'Deepdelver',
    ],
  }
}

// Funciones añadidas para resolver los errores de importación en otros archivos
export const getHumanName = (): string => {
    // Implementación mínima para evitar errores de compilación.
    return 'Placeholder Name'
}

export const randomGender = (): 'male' | 'female' => {
    return rollGender(1) === 'male' ? 'male' : 'female'
}

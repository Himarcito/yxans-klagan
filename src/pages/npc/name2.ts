import { ValidLanguage } from '../../hooks/useValidLanguage'
import { LanguageNameMap } from '../names/name.data'

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
  lang: ValidLanguage,
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
  lang: ValidLanguage,
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

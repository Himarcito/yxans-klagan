import { en } from '../data/translations/en' // <-- ¡Ruta corregida!

const translationFiles = {
  en,
}

export const loadTranslations = async (lang: string) => {
  // @ts-ignore
  return translationFiles[lang]
}

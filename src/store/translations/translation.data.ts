import { en } from './translation.data.en' // <-- ¡Ruta e nombre de archivo corregidos!

const translationFiles = {
  en,
}

export const loadTranslations = async (lang: string) => {
  // @ts-ignore
  return translationFiles[lang]
}

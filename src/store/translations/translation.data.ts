import en from './translation.data.en'

const translationFiles = {
  en,
}

export const loadTranslations = async (lang: string) => {
  // @ts-ignore
  return translationFiles[lang]
}

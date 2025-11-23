import { en } from '../../data/translations/en'
// ¡Importante! Asegúrate de que NO hay línea que diga 'import { sv }'

const translationFiles = {
  en, // Solo cargamos el inglés
}

export const loadTranslations = async (lang: string) => {
  // @ts-ignore
  return translationFiles[lang]
}

// CORRECCIÓN 1: Importar el archivo de traducción como 'es' (desde el nuevo nombre)
import es from './translation.data.es' 

const translationFiles = {
  // CORRECCIÓN 2: Usar 'es' como la única clave de idioma soportada
  es,
}

export const loadTranslations = async (lang: string) => {
  // @ts-ignore
  return translationFiles[lang]
}

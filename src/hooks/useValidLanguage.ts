import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// ¡Definición limpia! Solo el inglés.
export type ValidLanguage = 'en'

export const useValidLanguage = () => {
  const [language, setLanguage] = useState<ValidLanguage>('en')
  const { pathname } = useLocation()

  useEffect(() => {
    const lang = pathname.split('/')[1]
    // Eliminamos la comprobación de 'sv' de la ruta
    if (lang === 'en') {
      setLanguage(lang as ValidLanguage)
    }
  }, [pathname])

  return language
}

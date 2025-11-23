import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { translations } from '../assets/translations'

export type ValidLanguage = 'en'
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Antes era 'en' | 'sv'. ¡Solo dejamos 'en'!

export const useValidLanguage = () => {
  const [language, setLanguage] = useState<ValidLanguage>('en')
  const { pathname } = useLocation()

  useEffect(() => {
    const lang = pathname.split('/')[1]
    if (lang === 'en' || lang === 'sv') {
      setLanguage(lang as ValidLanguage)
    }
  }, [pathname])

  return language
}

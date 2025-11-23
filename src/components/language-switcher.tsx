import { useTranslations } from '../store/translations/translation.slice'
import { useValidLanguage } from '../hooks/useValidLanguage'
import { Link } from 'react-router-dom'
import { ValidLanguage } from '../hooks/useValidLanguage' // Importar la definición limpia

const LanguageSwitcher = () => {
  const language = useValidLanguage()
  const { changeLanguage } = useTranslations()

  // Lista de idiomas válidos (sólo 'en')
  const validLanguages: ValidLanguage[] = ['en']

  return (
    <div className='language-switcher'>
      {validLanguages.map((lang) => (
        <Link to={`/${lang}`} key={lang} onClick={() => changeLanguage(lang)}>
          <button className={language === lang ? 'active' : ''}>
            {lang.toUpperCase()}
          </button>
        </Link>
      ))}
    </div>
  )
}

export default LanguageSwitcher

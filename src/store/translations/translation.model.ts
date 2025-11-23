import { ValidLanguage } from '../../hooks/useValidLanguage'

export type Namespace =
  | 'core'
  | 'calendar'
  | 'common'
  | 'talents'
  | 'settings'
  | 'dice'
  | 'party'
  | 'skills'
  | 'monsters'

export type TFunctionOptions = {
  context?: Record<string, string>
}

// Eliminamos la referencia a sv en el objeto de idiomas
export type Translations = Record<
  Exclude<ValidLanguage, 'sv'>, // <--- CAMBIO CLAVE
  Record<Namespace, Record<string, string>>
>

export type TranslationKey<T extends Namespace> = `${T}:${string}`

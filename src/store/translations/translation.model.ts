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
  | 'names'
  | 'encounter'
  | 'gear'

export type TFunctionOptions = {
  context?: Record<string, string>
}

// CORRECCIÓN: Ahora TFunction acepta un genérico <T>
export type TFunction<T extends Namespace = Namespace> = (
  key: TranslationKey<T>, 
  options?: TFunctionOptions
) => string

export type Translations = Record<
  ValidLanguage,
  Record<Namespace, Record<string, string>>
>

export type TranslationKey<T extends Namespace> = `${T}:${string}`

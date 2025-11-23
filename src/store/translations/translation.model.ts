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
  | 'monsters' // <-- Usamos el plural 'monsters' (como ya está)
  | 'names'
  | 'encounter'
  | 'gear'

export type TFunctionOptions = {
  context?: Record<string, string>
}

// **CORRECCIÓN CLAVE 1: Agregamos TFunction para resolver TS2305**
export type TFunction = (key: TranslationKey<Namespace>, options?: TFunctionOptions) => string

// Tipos de traducción
export type Translations = Record<
  ValidLanguage,
  Record<Namespace, Record<string, string>>
>

export type TranslationKey<T extends Namespace> = `${T}:${string}`

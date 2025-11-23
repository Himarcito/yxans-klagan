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
  | 'names'    // <-- ¡Agregado!
  | 'encounter' // <-- ¡Agregado!
  | 'gear'     // <-- ¡Agregado!

export type TFunctionOptions = {
  context?: Record<string, string>
}

// Corregimos un error de tipo en el módulo de monstruos
export type Translations = Record<
  ValidLanguage,
  Record<Namespace, Record<string, string>>
>

export type TranslationKey<T extends Namespace> = `${T}:${string}`

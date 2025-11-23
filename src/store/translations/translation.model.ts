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
  | 'finds'   // <-- Nuevo
  | 'home'    // <-- Nuevo
  | 'npc'     // <-- Nuevo
  | 'typical' // <-- Nuevo
  | 'map'     // <-- Nuevo
  | 'session' // <-- Nuevo

export type TFunctionOptions = {
  context?: Record<string, string>
}

export type TFunction<T extends Namespace = Namespace> = (
  key: TranslationKey<T>, 
  options?: TFunctionOptions
) => string

export type Translations = Record<
  ValidLanguage,
  Record<Namespace, Record<string, string>>
>

export type TranslationKey<T extends Namespace> = `${T}:${string}`

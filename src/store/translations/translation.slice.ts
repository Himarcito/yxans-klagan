import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { None, Option, Some } from 'ts-results'
import { notNullish } from '../../functions/utils.functions'
import { ValidLanguage } from '../../hooks/useValidLanguage'
import { RootState } from '../../store/store'
import { loadTranslations } from './translation.data'
import {
  Namespace,
  TFunctionOptions,
  TranslationKey,
  Translations,
  TFunction, // <-- Importamos TFunction aquí
} from './translation.model'
import { useAppSelector } from '../../hooks/useAppSelector' // <-- Necesitas esta importación para usar la función de uso de Redux

interface TranslationState {
  translations: Record<
    ValidLanguage,
    | {
        translations: Translations
        status: 'success'
      }
    | { status: 'loading' }
  >
  currentLanguage: ValidLanguage
}

// Definimos el estado inicial solo con 'en'
const initialState: TranslationState = {
  translations: {
    en: { status: 'loading' },
  },
  currentLanguage: 'en',
}

const translationSlice = createSlice({
  name: 'translation',
  initialState,
  reducers: {
    setTranslations(
      state,
      action: PayloadAction<{
        language: ValidLanguage
        translations: Translations
      }>,
    ) {
      state.currentLanguage = action.payload.language

      if (state.translations[action.payload.language].status === 'loading') {
        state.translations[action.payload.language] = {
          translations: action.payload.translations,
          status: 'success',
        }
      }
    },
    changeLanguage(state, action: PayloadAction<ValidLanguage>) { // <-- Añadimos este reducer faltante para el LanguageSwitcher
        state.currentLanguage = action.payload
    }
  },
})

export const { changeLanguage } = translationSlice.actions // <-- Exportamos la acción de cambio de idioma

export const setTranslationsAsync = createAsyncThunk<
  Translations,
  | { language: undefined; source: 'init' }
  | { language: ValidLanguage; source: 'user' },
  { state: RootState }
>(
  'translation/setTranslationsAsync',
  async ({ language, source }, { dispatch, getState }) => {
    const translationState = getState().translation
    const lang = source === 'init' ? translationState.currentLanguage : language

    const translations = await loadTranslations(lang)

    dispatch(
      translationSlice.actions.setTranslations({
        language: lang,
        translations,
      }),
    )

    return translations
  },
)

export const initTranslations = setTranslationsAsync({
  language: undefined,
  source: 'init',
})

export default translationSlice.reducer

const selectTranslationsState = (state: RootState) => state.translation
export const selectTranslations = createSelector(
  [selectTranslationsState],
  (translationsState): Option<Translations> => {
    const cur =
      translationsState.translations[translationsState.currentLanguage]
    if (cur.status === 'success') {
      return Some(cur.translations)
    }

    return None
  },
)
export const selectCurrentLanguage = createSelector(
  [selectTranslationsState],
  (translationsState) => translationsState.currentLanguage,
)

// Exporta la función TFunction para usarla con selectores en los componentes
export const selectTranslateFunction = <T extends Namespace>(nss: T[]) =>
  createSelector(selectTranslations, (translations): TFunction => { // <-- Corregido el tipo de retorno a TFunction
    if (translations.none) {
      // Retorna una función dummy si no hay traducciones cargadas
      return (key: TranslationKey<T>) => key as string
    }

    const safeTranslations = translations.safeUnwrap()
    type localNamespace = (typeof nss)[number] & Namespace

    return (
      key: TranslationKey<localNamespace>,
      options?: TFunctionOptions,
    ) => {
      // traverse the object

      let translation = translate(key, safeTranslations, options)

      if (translation.match(/\$t\((.*)\)/gi) !== null) {
        translation = translation
          .split(' ')
          .map((p) =>
            p.replace(/\$t\((.*)\)/gi, (_match, key) =>
              translate(
                key as TranslationKey<localNamespace>,
                safeTranslations,
                options,
              ),
            ),
          )
          .join(' ')
      }

      // $t(common:talents.PathOfBlood2)

      return translation
    }
  })

const translate = <LocalNamespace extends Namespace>(
  key: TranslationKey<LocalNamespace>,
  safeTranslations: Translations,
  options?: TFunctionOptions,
): string => {
  const [ns, ...rest] = key.split(':')
  const keys = rest.join().split('.')

  const as = ns in safeTranslations

  if (!as) {
    return key
  }

  let obj = safeTranslations[ns as Namespace]
  let translation: string = key

  for (const part of keys) {
    if (!obj) {
      return part
    }

    const possibleKey = part

    if (possibleKey in obj) {
      const possibleTranslation = obj[possibleKey as keyof typeof obj]

      if (notNullish(possibleTranslation)) {
        if (typeof possibleTranslation === 'string') {
          translation = possibleTranslation
          break
        }

        obj = possibleTranslation as Record<string, unknown>
      }
    }
  }

  if (options?.context) {
    for (const [ctxKey, ctxValue] of Object.entries(options.context)) {
      translation = translation.replaceAll(`{{${ctxKey}}}`, ctxValue)
    }
  }

  return translation
}

// **CORRECCIÓN CLAVE 2: Exportar el hook para que los componentes lo usen (ej: LanguageSwitcher)**
export const useTranslations = () => {
  const dispatch = useDispatch() // Asumo que tienes useDispatch importado o definido globalmente
  const currentLanguage = useAppSelector(selectCurrentLanguage)
  const translations = useAppSelector(selectTranslations)
  
  return {
      currentLanguage,
      translations,
      changeLanguage: (language: ValidLanguage) => dispatch(changeLanguage(language))
  }
}

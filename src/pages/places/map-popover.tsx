import { FireIcon, MagnifyingGlassIcon, SparklesIcon } from '@heroicons/react/20/solid'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Parchment } from '../../components/parchment'
import { useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import { Hex } from './map.model'
import { getTerrainForHex } from './terrain-data'

export interface MapPopoverOptions {
  hex: Hex
  x: number
  y: number
  mapMinX: number
  mapMaxX: number
  mapMinY: number
  mapMaxY: number
}

export interface MapPopoverProps {
  options?: MapPopoverOptions
  onExploreChanged: (hex: Hex) => void
  onHide: () => void
}

export const MapPopover = ({
  options,
  onExploreChanged,
  onHide,
}: MapPopoverProps) => {
  const t = useAppSelector(selectTranslateFunction(['map', 'common']))
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(true)
  
  // Estado para el panel de encuentros
  const [encounterPending, setEncounterPending] = useState<boolean>(false)

  const initialPosition = -9999
  const [position, setPosition] = useState({
    x: initialPosition,
    y: initialPosition,
  })

  const getX = useCallback(
    (xOptions?: MapPopoverOptions) => {
      if (!xOptions || !ref.current) {
        return initialPosition
      }

      const { x, mapMaxX, mapMinX } = xOptions

      const rect = ref.current.getBoundingClientRect()
      const popoverX = x - rect.width / 2

      if (popoverX - mapMinX < 0) {
        return 0
      }

      if (popoverX > mapMaxX) {
        return mapMaxX - rect.width
      }

      return popoverX - mapMinX
    },
    [initialPosition],
  )

  const getY = useCallback(
    (yOptions?: MapPopoverOptions) => {
      if (!yOptions || !ref.current) {
        return initialPosition
      }

      const { y, mapMinY } = yOptions

      const rect = ref.current.getBoundingClientRect()
      const popoverY = y - rect.height - mapMinY - 2

      if (popoverY < 0) {
        return mapMinY
      }

      return popoverY
    },
    [initialPosition],
  )

  useEffect(() => {
    if (options) {
      setPosition({ x: getX(options), y: getY(options) })
      setShow(true)
      setEncounterPending(false) // Se cierra el panel si cambias de hexágono
    }
  }, [getX, getY, options, ref])

  // Traductor y formateador del terreno
  const getTerrainTranslation = (terrain: string) => {
    if (terrain === 'village') return 'Aldea'
    if (terrain === 'dungeon') return 'Mazmorra'
    if (terrain === 'castle') return 'Fortaleza'
    
    const terrainMap: Record<string, string> = {
      marshlands: 'swamp',
      quagmire: 'mire',
      high_mountain: 'mountain'
    }
    const mapped = terrainMap[terrain] || terrain
    return t(`common:terrain.${mapped}` as any) || terrain
  }

  const terrainType = options ? getTerrainForHex(options.hex.hexKey) : 'plains'

  return (
    <div
      ref={ref}
      className={`absolute -z-10 flex -translate-y-12 flex-col gap-4 opacity-0 transition-all
        ${show ? 'z-20 translate-y-0 opacity-100' : ''}
      `}
      style={{
        top: position.y,
        left: position.x,
        width: '320px', // Un poco más ancho para que quepan los textos del encuentro
      }}
    >
      {options && (
        <Parchment padding="sm">
          <div className="mb-3 border-b border-black/20 pb-2">
            <div className="text-2xl font-bold">Hex: {options.hex.hexKey}</div>
            <div className="text-sm font-semibold text-amber-900 uppercase tracking-widest mt-1">
              {getTerrainTranslation(terrainType)}
              {' • '}
              {options.hex.explored
                ? t('map:popover_explored')
                : t('map:popover_unexplored')}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <ParchmentButton
              buttonType="ghost"
              onPress={() => {
                onHide()
                setShow(false)
              }}
            >
              {t('map:popover_hide')}
            </ParchmentButton>

            {options.hex.explored ? (
              <>
                <ParchmentButton
                  buttonType="danger"
                  onPress={() => {
                    setShow(false)
                    onHide()
                    onExploreChanged({ ...options.hex, explored: false })
                  }}
                >
                  <FireIcon className="size-5" />
                  {t('map:popover_forget')}
                </ParchmentButton>

                {/* BOTÓN DE TIRAR ENCUENTRO */}
                <div className="w-full mt-2">
                  <ParchmentButton
                    onPress={() => {
                      setEncounterPending(true)
                    }}
                  >
                    <SparklesIcon className="size-5" /> 
                    Tirar Encuentro
                  </ParchmentButton>
                </div>
              </>
            ) : (
              <ParchmentButton
                onPress={() => {
                  setShow(false)
                  onHide()
                  onExploreChanged({ ...options.hex, explored: true })
                }}
              >
                <MagnifyingGlassIcon className="size-5" />
                {t('map:popover_explore')}
              </ParchmentButton>
            )}
          </div>

          {/* PANEL TEMPORAL DE ENCUENTROS */}
          {encounterPending && (
            <div className="mt-4 p-3 bg-black/5 rounded text-sm italic border border-black/10">
              Generando encuentro para <strong>{getTerrainTranslation(terrainType)}</strong>... <br/><br/>
              (En el siguiente paso conectaremos aquí la Megalista de Encuentros).
            </div>
          )}

        </Parchment>
      )}
    </div>
  )
}

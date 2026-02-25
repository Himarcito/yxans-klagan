import {
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/20/solid'
import '@total-typescript/ts-reset'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ParchmentButton } from '../../components/ParchmentButton'
import { Train } from '../../components/Stack'
import { PageHeader } from '../../components/page-header'
import { Parchment } from '../../components/parchment'
import {
  selectFogOfWar,
  selectMap,
  selectSource,
  setSelectedHex,
  setSource,
  toggleFogOfWar,
  unsetSelectedHex,
  updateHex,
} from '../../features/map/map-slice'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import ForbiddenLandsMap from './ForbiddenLandsMap'
import { MapPopover, MapPopoverOptions } from './map-popover'
import { Hex } from './map.model'
import { Polygon } from './polygon'
import { getTerrainForHex } from './terrain-data'
// IMPORTAMOS LOS GENERADORES INCORPORADOS AL MAPA
import { VillagePage } from '../village/village.page'
import { CastlePage } from '../castle/castle.page' // <-- Importado nuestro flamante Castillo

export const MapPage = () => {
  const t = useAppSelector(selectTranslateFunction(['map', 'common']))
  const source = useAppSelector(selectSource)
  const fogOfWar = useAppSelector(selectFogOfWar)
  const { hexes, selectedHex } = useAppSelector(selectMap)
  const dispatch = useAppDispatch()

  const parchmentRef = useRef<HTMLDivElement>(null)

  const [mapPopover, setMapPopover] = useState<MapPopoverOptions | undefined>(
    undefined,
  )

  const getRect = (
    hexTarget: EventTarget & Element,
    parchmentElem: HTMLDivElement,
  ) => ({
    rect: hexTarget.getBoundingClientRect(),
    parchmentRect: parchmentElem.getBoundingClientRect(),
  })
  
  const initialTooltip = useMemo(
    () => ({
      text: '',
      x: 0,
      y: 0,
      hexX: 0,
      hexY: 0,
      width: 0,
      height: 0,
    }),
    [],
  )

  const [tooltip, setTooltip] = useState<{
    x: number
    y: number
    hexX: number
    hexY: number
    text: string
    width: number
    height: number
  }>(initialTooltip)

  const handleTooltip = (e: React.MouseEvent, hex: Hex) => {
    if (parchmentRef.current) {
      const { rect, parchmentRect } = getRect(
        e.currentTarget,
        parchmentRef.current,
      )

      setTooltip({
        x: rect.left - parchmentRect.left,
        y: rect.top - parchmentRect.top,
        hexX: rect.left,
        hexY: rect.top,
        text: hex.hexKey,
        width: rect.width,
        height: rect.height,
      })
    }
  }

  useEffect(() => {
    if (selectedHex.none) {
      setTooltip(initialTooltip)
    }
  }, [selectedHex, initialTooltip])

  const handleMouseOver = (e: React.MouseEvent, hex: Hex) => {
    if (!selectedHex) {
      handleTooltip(e, hex)
    }
  }

  const handleHexClick = (e: React.MouseEvent, hex: Hex) => {
    if (parchmentRef.current) {
      dispatch(setSelectedHex(hex.hexKey))
      handleTooltip(e, hex)

      const { rect, parchmentRect } = getRect(
        e.currentTarget,
        parchmentRef.current,
      )

      setMapPopover({
        hex,
        x: rect.left,
        y: rect.top,
        mapMinX: parchmentRect.x,
        mapMaxX: parchmentRect.width,
        mapMinY: parchmentRect.y,
        mapMaxY: parchmentRect.height,
      })
    }
  }

  // Extraemos la clave del hexágono seleccionado actualmente (si lo hay)
  const currentSelectedHexKey = selectedHex.unwrapOr(undefined)
  
  // Averiguamos qué tipo de terreno es el hexágono seleccionado
  const selectedTerrain = currentSelectedHexKey ? getTerrainForHex(currentSelectedHexKey) : undefined

  return (
    <div className="flex w-full flex-col gap-y-8 relative pb-20">
      <PageHeader>{t('map:title')}</PageHeader>

      <Train>
        <ParchmentButton
          buttonType={
            source === 'ravland' ? 'sourceBitterReach' : 'sourceRavland'
          }
          onPress={() =>
            dispatch(
              setSource(source === 'ravland' ? 'bitterReach' : 'ravland'),
            )
          }
        >
          {source === 'ravland'
            ? t('common:game_source.bitter_reach')
            : t('common:game_source.ravland')}
        </ParchmentButton>
        <ParchmentButton
          buttonType="ghost"
          onPress={() => dispatch(toggleFogOfWar())}
        >
          {fogOfWar ? (
            <EyeIcon className="size-5" />
          ) : (
            <EyeSlashIcon className="size-5" />
          )}
          {t(fogOfWar ? 'map:fog_of_war_on' : 'map:fog_of_war_off')}
        </ParchmentButton>
      </Train>

      <div className="w-full">
        <Parchment padding="xs">
          <div ref={parchmentRef} className="relative w-full h-full">
            <div
              className="pointer-events-none absolute z-10 flex select-none items-center justify-center text-center text-[0.9vw] font-bold leading-none text-white"
              style={{
                textShadow: '0px 0px 1px black',
                top: numToPx(tooltip.y),
                left: numToPx(tooltip.x),
                width: numToPx(tooltip.width),
                height: numToPx(tooltip.height),
              }}
            >
              {tooltip.text}
            </div>
            
            <MapPopover
              options={mapPopover}
              onExploreChanged={(hex) => dispatch(updateHex(hex))}
              onHide={() => dispatch(unsetSelectedHex())}
            ></MapPopover>
            
            <ForbiddenLandsMap fogOfWar={fogOfWar}>
              {hexes.map((hex) => (
                <Polygon
                  key={hex.hexKey}
                  hex={hex}
                  selectedHex={selectedHex}
                  onMouseOver={(e) => handleMouseOver(e, hex)}
                  onClick={(e) => handleHexClick(e, hex)}
                />
              ))}
            </ForbiddenLandsMap>
          </div>
        </Parchment>
      </div>

      {/* --- SECCIÓN DE GENERADORES DE AVENTURA --- */}
      {/* ALDEAS */}
      {currentSelectedHexKey && selectedTerrain === 'village' && (
        <div className="mt-8 animate-in slide-in-from-bottom-8 duration-500">
          <VillagePage hexKey={currentSelectedHexKey} />
        </div>
      )}

      {/* CASTILLOS */}
      {currentSelectedHexKey && selectedTerrain === 'castle' && (
        <div className="mt-8 animate-in slide-in-from-bottom-8 duration-500">
          <CastlePage hexKey={currentSelectedHexKey} />
        </div>
      )}

      {/* MAZMORRAS (En construcción) */}
      {currentSelectedHexKey && selectedTerrain === 'dungeon' && (
        <div className="mt-8 p-8 bg-black/10 rounded-lg text-center font-bold text-gray-700 italic border-2 border-dashed border-gray-400">
          Generador de Mazmorras en construcción para {currentSelectedHexKey}...
        </div>
      )}

    </div>
  )
}

const numToPx = (num: number): string => `${num}px`

export default MapPage

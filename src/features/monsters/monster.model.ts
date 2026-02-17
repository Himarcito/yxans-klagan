import { Definition } from '../../@types/definition.type'
import { camelCaseToSnakeCase } from '../../functions/casing'
import {
  TranslationDict,
  translationDict,
} from '../../functions/translation-dict'
import { MonsterAttackRange } from '../../models/attack-range'
import { Attributes, AttributesViewModel } from '../../models/attributes.model'
import { MonsterSkillsValues } from '../../models/skills.model'
import { TranslationKey } from '../../store/translations/translation.model'
import { CommunityMonsterAttackType } from './community-monster.model'

export interface Monster {
  id: string
  name: TranslationKey<'common'>
  attributes: Attributes
  pageReference?: number
  attacks?: MonsterAttackViewModel[] // <-- ¡AÑADIDO!
}

export interface MonsterViewModel {
  id: string
  name: TranslationKey<'common'>
  attributes: AttributesViewModel
  pageReference?: number
  attacks?: MonsterAttackViewModel[] // <-- ¡AÑADIDO!
}

export type ArmorTypeLabel =
  | 'skin'
  | 'softFur'
  | 'thickFur'
  | 'feathers'
  | 'scales'
  | 'shell'
  | 'bonePlates'
  | 'armoredHide'
export const monsterArmorTypeTranslationDict: Record<
  ArmorTypeLabel,
  TranslationKey<'monsters'>
> = {
  skin: 'monsters:armor.skin',
  softFur: 'monsters:armor.soft_fur',
  thickFur: 'monsters:armor.thick_fur',
  feathers: 'monsters:armor.feathers',
  scales: 'monsters:armor.scales',
  shell: 'monsters:armor.shell',
  bonePlates: 'monsters:armor.bone_plates',
  armoredHide: 'monsters:armor.armored_hide',
}

export type MonsterArmor = {
  key: ArmorTypeLabel
  armor: number
}

export interface ArmorViewModel {
  values: boolean[]
  label: ArmorTypeLabel
}

const monsterSizes = [
  'puny',
  'small',
  'average',
  'large',
  'big',
  'huge',
  'gigantic',
] as const
export type MonsterSize = (typeof monsterSizes)[number]

export const createMonsterSizeTranslationDict = (monsterType: MonsterType) =>
  monsterSizes.reduce(
    (acc, label) => ({
      ...acc,
      [label]: `monsters:size.${camelCaseToSnakeCase(label)}${
        isDefinitiveArticle[monsterType] ? '_def' : ''
      }`,
    }),
    {} as TranslationDict<MonsterSize, 'monsters', 'size.'>,
  )

const isDefinitiveArticle: Record<MonsterType, boolean> = {
  grazing: true,
  herbivore: false,
  gatherer: false,
  scavenger: false,
  predator: true,
  aggressivePredator: true,
}

const monsterTypes = [
  'grazing',
  'herbivore',
  'gatherer',
  'scavenger',
  'predator',
  'aggressivePredator',
]
export type MonsterType = (typeof monsterTypes)[number]

export const monsterTypeTranslationDict = translationDict(
  monsterTypes,
  'monsters',
  'type.',
)

export type LimbChoices =
  | 'none'
  | 'tentacles'
  | 'two_legs'
  | 'two_legs_two_arms'
  | 'four_legs'
  | 'four_legs_two_arms'
  | 'wings'
  | 'many'

export type LimbChoicesWithAmount = {
  key: LimbChoices
  monsterLimbs: () => MonsterLimbs
}

export type Limb = 'tentacles' | 'legs' | 'arms' | 'wings'

export type MonsterLimbs = {
  [L in Limb]: number
}

export type HeadChoices =
  | 'missing'
  | 'beak'
  | 'horn_with_count'
  | 'elk_horns'
  | 'tentacles_with_count'
  | 'insectoid_eyes'
  | 'side_eyes_with_count'
  | 'many_eyes'
  | 'big_mane'
  | 'long_tongue'
  | 'big_ears'
  | 'fin'
  | 'roll_twice'

export type HeadChoiceWithCount = {
  key: HeadChoices
  count?: number
}

export type TailChoices = 'none' | 'tail' | 'spiked_tail'

const movementTypes = [
  'slithering',
  'digging',
  'swimming',
  'running',
  'flying',
  'climbing',
] as const
export type MovementType = (typeof movementTypes)[number]
export const movementTypeTranslationDict = translationDict(
  movementTypes,
  'monsters',
  'movement.',
)

export type MovementDistanceFunction = (agility: number) => number

export type MonsterHome =
  | 'burrow'
  | 'ruin'
  | 'watering_hole'
  | 'tree_or_high_point'
  | 'cave'
  | 'ravine'
  | 'den'

export const monsterHomeLabels: Record<
  MonsterHome,
  TranslationKey<'monsters'>
> = {
  burrow: 'monsters:homes.burrow',
  ruin: 'monsters:homes.ruin',
  watering_hole: 'monsters:homes.watering_hole',
  tree_or_high_point: 'monsters:homes.tree_or_high_point',
  cave: 'monsters:homes.cave',
  ravine: 'monsters:homes.ravine',
  den: 'monsters:homes.den',
}

export type MonsterSkillListItem = {
  name: TranslationKey<'monsters'>
  value: number
}

export type MonsterTrait = {
  name: TranslationKey<'monsters'>
  description: () => MonsterDescriptionItemViewModel
  apply: (rm: RandomMonster) => RandomMonster
}

export type MonsterTraitViewModel = {
  name: TranslationKey<'monsters'>
  description: MonsterDescriptionItemViewModel
}
export type MonsterWeakness = Definition<
  TranslationKey<'monsters'>,
  TranslationKey<'monsters'>
>
export type MonsterMotivation =
  | 'territory'
  | 'pregnant'
  | 'hunger'
  | 'injured'
  | 'parasite'
  | 'alone'
  | 'fun'
  | 'looking_for_host'
  | 'guarding_treasure'

export type MonsterAttackType =
  | 'slash'
  | 'eyeGourge'
  | 'clawFlurry'
  | 'bite'
  | 'lockedJaws'
  | 'throatBite'
  | 'horn'
  | 'headbutt'
  | 'roar'
  | 'tailsSlash'
  | 'tentacleLash'
  | 'tentacleFrenzy'
  | 'tentaclePenetrationArmsLength'
  | 'tentaclePenetrationNear'
  | 'bash'
  | 'sweep'
  | 'breathFire'
  | 'sprayFire'
  | 'spitAcid'
  | 'sprayAcid'
  | 'deadlyGaze'
  | 'coldStrike'
  | 'deathScream'
  | 'kick'
  | 'backwardsKick'
  | 'devour'
  | 'diveAttack'
  | 'whirlwind'
  | 'peck'
  | 'squash'
  | 'beakThrow'
  | 'adventureToss'
  | 'deathRattle'
  | 'infectedScratch'
  | 'diseasedBite'
  | 'infectedTailSwipe'
  | 'infectedTentacleSwipe'
  | 'diseasedTouch'
  | 'distraction'
  | 'punch'
  | 'flyingFists'
  | 'fistsOfFury'
  | 'poisonSpit'
  | 'venemousBite'
  | 'poisonScratch'
  | 'poisonTailAttack'
  | 'poisonTentacleAttack'
  | 'poisonHornAttack'
  | 'nightmareVisions'
  | 'mindBurst'
  | 'taunt'
  | 'plea'
  | 'burrow'
  | 'theGroundShatters'
  | 'rush'
  | 'wrapAttack'
  | 'fallFromTheSky'
  | 'rainOfRocks'
  | 'generic'
export const monsterAttackTypeTranslationDict: Record<
  CommunityMonsterAttackType,
  TranslationKey<'monsters'>
> = {
  slash: 'monsters:attack.slash.type',
  eyeGourge: 'monsters:attack.eye_gourge.type',
  clawFlurry: 'monsters:attack.claw_flurry.type',
  bite: 'monsters:attack.bite.type',
  lockedJaws: 'monsters:attack.locked_jaws.type',
  throatBite: 'monsters:attack.throat_bite.type',
  horn: 'monsters:attack.horn.type',
  headbutt: 'monsters:attack.headbutt.type',
  roar: 'monsters:attack.roar.type',
  tailsSlash: 'monsters:attack.tails_slash.type',
  tentacleLash: 'monsters:attack.tentacle_lash.type',
  tentacleFrenzy: 'monsters:attack.tentacle_frenzy.type',
  tentaclePenetrationArmsLength:
    'monsters:attack.tentacle_penetration_arms_length.type',
  tentaclePenetrationNear: 'monsters:attack.tentacle_penetration_near.type',
  bash: 'monsters:attack.bash.type',
  sweep: 'monsters:attack.sweep.type',
  breathFire: 'monsters:attack.breath_fire.type',
  sprayFire: 'monsters:attack.spray_fire.type',
  spitAcid: 'monsters:attack.spit_acid.type',
  sprayAcid: 'monsters:attack.spray_acid.type',
  deadlyGaze: 'monsters:attack.deadly_gaze.type',
  coldStrike: 'monsters:attack.cold_strike.type',
  deathScream: 'monsters:attack.death_scream.type',
  kick: 'monsters:attack.kick.type',
  backwardsKick: 'monsters:attack.backwards_kick.type',
  devour: 'monsters:attack.devour.type',
  diveAttack: 'monsters:attack.dive_attack.type',
  whirlwind: 'monsters:attack.whirlwind.type',
  peck: 'monsters:attack.peck.type',
  squash: 'monsters:attack.squash.type',
  beakThrow: 'monsters:attack.beak_throw.type',
  adventureToss: 'monsters:attack.adventure_toss.type',
  deathRattle: 'monsters:attack.death_rattle.type',
  infectedScratch: 'monsters:attack.infected_scratch.type',
  diseasedBite: 'monsters:attack.diseased_bite.type',
  infectedTailSwipe: 'monsters:attack.infected_tail_swipe.type',
  infectedTentacleSwipe: 'monsters:attack.infected_tentacle_swipe.type',
  diseasedTouch: 'monsters:attack.diseased_touch.type',
  distraction: 'monsters:attack.distraction.type',
  punch: 'monsters:attack.punch.type',
  flyingFists: 'monsters:attack.flying_fists.type',
  fistsOfFury: 'monsters:attack.fists_of_fury.type',
  poisonSpit: 'monsters:attack.poison_spit.type',
  venemousBite: 'monsters:attack.venemous_bite.type',
  poisonScratch: 'monsters:attack.poison_scratch.type',
  poisonTailAttack: 'monsters:attack.poison_tail_attack.type',
  poisonTentacleAttack: 'monsters:attack.poison_tentacle_attack.type',
  poisonHornAttack: 'monsters:attack.poison_horn_attack.type',
  nightmareVisions: 'monsters:attack.nightmare_visions.type',
  mindBurst: 'monsters:attack.mind_burst.type',
  taunt: 'monsters:attack.taunt.type',
  plea: 'monsters:attack.plea.type',
  burrow: 'monsters:attack.burrow.type',
  theGroundShatters: 'monsters:attack.the_ground_shatters.type',
  rush: 'monsters:attack.rush.type',
  wrapAttack: 'monsters:attack.wrap_attack.type',
  fallFromTheSky: 'monsters:attack.fall_from_the_sky.type',
  rainOfRocks: 'monsters:attack.rain_of_rocks.type',
  generic: 'monsters:attack.generic.type',
  call_the_brood: 'monsters:attack.call_the_brood.type',
  piercing_shriek: 'monsters:attack.piercing_shriek.type',
  pounce: 'monsters:attack.pounce.type',
  stab: 'monsters:attack.stab.type',
  webshot: 'monsters:attack.webshot.type',
  claySmash: 'monsters:attack.clay_smash.type',
  clayPunch: 'monsters:attack.clay_punch.type',
  hastyReaction: 'monsters:attack.hasty_reaction.type',
  earthRumble: 'monsters:attack.earth_rumble.type',
  groundQuake: 'monsters:attack.ground_quake.type',
  golemRampage: 'monsters:attack.golem_rampage.type',
}
export type MonsterDamageType =
  | 'slash'
  | 'blunt'
  | 'stab'
  | 'poison'
  | 'fear'
  | 'non_typical'
  | 'weapon'
  | 'disease'

export type MonsterDamageModifierType =
  | Extract<MonsterDamageType, 'slash' | 'blunt'>
  | 'tail_attack'
  | 'size'
  | 'telepathic'

export const poisonTypes = [
  'lethal',
  'paralyzing',
  'sleeping',
  'hallucinogenic',
] as const
export type PoisonType = (typeof poisonTypes)[number]
export const poisonTypeTranslationDict: Record<
  PoisonType,
  TranslationKey<'monsters'>
> = {
  lethal: 'monsters:poisons.lethal',
  paralyzing: 'monsters:poisons.paralyzing',
  sleeping: 'monsters:poisons.sleeping',
  hallucinogenic: 'monsters:poisons.hallucinogenic',
}

export type PoisonDamage = {
  type: PoisonType
  potency: number
}

export type MonsterDamage = {
  [M in Exclude<MonsterDamageType, 'poison' | 'tail_attack' | 'fear'>]?: number
} & { poison?: PoisonDamage; fear?: boolean }

export type MonsterAttackMinimalContext = Pick<
  IntermediateRandomMonster,
  | 'attributes'
  | 'movement'
  | 'attackRequirements'
  | 'limbs'
  | 'damageModifiers'
  | 'description'
  | 'traits'
  | 'skills'
>
export type MonsterAttack<T = MonsterAttackType> = {
  type: T
  attack?: (rm: MonsterAttackMinimalContext) => number
  damage?: (rm: MonsterAttackMinimalContext) => MonsterDamage
  range: MonsterAttackRange
  description: TranslationKey<'monsters'>
  descriptionExtras?: (rm: MonsterAttackMinimalContext) => { count: number }
  valid: (rm: MonsterAttackMinimalContext) => boolean
  singleUse: boolean
  chance: number
}

export type MonsterAttackViewModel<T = MonsterAttackType> = {
  type: T
  attack?: number
  damage?: MonsterDamage
  range: TranslationKey<'common'>
  description: TranslationKey<'monsters'>
  descriptionExtras?: { count: number }
}

export type MonsterAttacks = { [T in MonsterAttackType]: MonsterAttack }
export type MonsterDamageModifiers = {
  [M in MonsterDamageModifierType]: number
}

export type MonsterAttackRequirements = {
  tail: boolean
  spikedTail: boolean
  tentacles: boolean
  undead: boolean
  acidGlands: boolean
  fireGlands: boolean
  fangs: boolean
  legs: boolean
  claws: boolean
  horn: boolean
  wings: boolean
  hasLimbs: boolean
  hasBeak: boolean
  canSpeak: boolean
  isPoisonous: boolean
  isSick: boolean
}

export type MonsterDescription = {
  heads: HeadChoiceWithCount[]
  tail: {
    key: TailChoices
    damage: number
  }
  limbs: MonsterLimbs
}

export type MonsterDescriptionItemViewModel = {
  key: TranslationKey<'monsters'>
  count?: number
}

export type MonsterDescriptionViewModel = {
  head: MonsterDescriptionItemViewModel[]
  tail?: string
  limbs: MonsterDescriptionItemViewModel[]
}

export interface RandomMonster extends Monster {
  size: MonsterSize
  type: MonsterType
  limbs: MonsterLimbs
  description: MonsterDescription
  armor: ArmorViewModel
  home: MonsterHome
  skills: MonsterSkillsValues
  traits: MonsterTrait[]
  weakness: MonsterWeakness
  motivation: MonsterMotivation
  damageModifiers: MonsterDamageModifiers
  attackRequirements: MonsterAttackRequirements
}

export interface IntermediateRandomMonster extends Monster {
  size: MonsterSize
  type: MonsterType
  limbs: MonsterLimbs
  description: MonsterDescription
  armor: ArmorViewModel
  home: MonsterHome
  skills: MonsterSkillsValues
  traits: MonsterTrait[]
  weakness: MonsterWeakness
  motivation: MonsterMotivation
  damageModifiers: MonsterDamageModifiers
  attackRequirements: MonsterAttackRequirements
  movement: MonsterMovement
}

export type MonsterMovement = {
  type: MovementType
  distance: number
}

export interface RandomMonsterViewModel
  extends Omit<MonsterViewModel, 'name' | 'pageReference'> {
  size: MonsterSize
  type: MonsterType
  limbs: MonsterLimbs
  description: MonsterDescriptionViewModel
  armor: ArmorViewModel
  movement: MonsterMovement
  home: MonsterHome
  skills: MonsterSkillListItem[]
  traits: MonsterTraitViewModel[]
  weakness: MonsterWeakness
  motivation: {
    name: `monsters:motivation.${MonsterMotivation}.name`
    description: `monsters:motivation.${MonsterMotivation}.description`
  }
  damageModifiers: MonsterDamageModifiers
  attacks: MonsterAttackViewModel[]
  attackRequirements: MonsterAttackRequirements
}

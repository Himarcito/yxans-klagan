import { defaultAttributes } from '../../../models/attributes.model'
import { Monster } from '../monster.model'

export const bookMonsters: Monster[] = [
  {
    id: 'giant',
    name: 'common:monster.giant',
    attributes: { ...defaultAttributes, strength: 12, agility: 2 },
    pageReference: 120,
    attacks: [
      { type: 'bash', attack: 10, damage: { blunt: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.bash.description' },
      { type: 'kick', attack: 9, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.kick.description' },
      { type: 'sweep', attack: 9, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.sweep.description' },
      { type: 'adventureToss', attack: 8, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.adventure_toss.description' },
      { type: 'theGroundShatters', attack: 9, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.the_ground_shatters.description' },
      { type: 'squash', attack: 10, damage: { blunt: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.squash.description' }
    ]
  },
  {
    id: 'abyss-worm',
    name: 'common:monster.abyss_worm',
    attributes: { ...defaultAttributes, strength: 14, agility: 2 },
    pageReference: 72,
    attacks: [
      { type: 'burrow', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.burrow.description' },
      { type: 'bite', attack: 11, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'tailsSlash', attack: 9, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.tails_slash.description' },
      { type: 'lockedJaws', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.locked_jaws.description' },
      { type: 'spitAcid', attack: 8, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.spit_acid.description' },
      { type: 'devour', attack: 9, damage: { slash: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.devour.description' }
    ]
  },
  {
    id: 'bloodling',
    name: 'common:monster.bloodling',
    attributes: { ...defaultAttributes, strength: 8, agility: 4 },
    pageReference: 74,
    attacks: [
      { type: 'distraction', attack: 6, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.distraction.description' },
      { type: 'bite', attack: 8, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'clawFlurry', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.claw_flurry.description' },
      { type: 'diseasedBite', attack: 8, damage: { disease: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.diseased_bite.description' },
      { type: 'rush', attack: 9, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.rush.description' },
      { type: 'lockedJaws', attack: 9, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.locked_jaws.description' }
    ]
  },
  {
    id: 'dragon-small',
    name: 'common:monster.dragon_small',
    attributes: { strength: 32, agility: 2, wits: 4, empathy: 2 },
    pageReference: 82,
    attacks: [
      { type: 'clawFlurry', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.claw_flurry.description' },
      { type: 'bite', attack: 14, damage: { slash: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'tailsSlash', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.tails_slash.description' },
      { type: 'roar', attack: 12, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.roar.description' },
      { type: 'diveAttack', attack: 12, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dive_attack.description' },
      { type: 'breathFire', attack: 14, damage: { non_typical: 3 }, range: 'common:range.short', description: 'monsters:attack.breath_fire.description' }
    ]
  },
  {
    id: 'dragon-large',
    name: 'common:monster.dragon_large',
    attributes: { strength: 48, agility: 4, wits: 6, empathy: 3 },
    pageReference: 82,
    attacks: [
      { type: 'clawFlurry', attack: 16, damage: { slash: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.claw_flurry.description' },
      { type: 'bite', attack: 18, damage: { slash: 4 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'tailsSlash', attack: 14, damage: { blunt: 3 }, range: 'common:range.near', description: 'monsters:attack.tails_slash.description' },
      { type: 'roar', attack: 14, damage: { fear: true }, range: 'common:range.short', description: 'monsters:attack.roar.description' },
      { type: 'whirlwind', attack: 14, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.whirlwind.description' },
      { type: 'breathFire', attack: 18, damage: { non_typical: 4 }, range: 'common:range.short', description: 'monsters:attack.breath_fire.description' }
    ]
  },
  {
    id: 'drakewyrm',
    name: 'common:monster.drakewyrm',
    attributes: { strength: 25, agility: 3, wits: 5, empathy: 2 },
    pageReference: 84,
    attacks: [
      { type: 'bite', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'tailsSlash', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.tails_slash.description' },
      { type: 'lockedJaws', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.locked_jaws.description' },
      { type: 'poisonSpit', attack: 10, damage: { poison: { type: 'lethal', potency: 6 } }, range: 'common:range.short', description: 'monsters:attack.poison_spit.description' },
      { type: 'venemousBite', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.venemous_bite.description' },
      { type: 'wrapAttack', attack: 10, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.wrap_attack.description' }
    ]
  },
  {
    id: 'death-knight',
    name: 'common:monster.death_knight',
    attributes: { strength: 12, agility: 3, wits: 3, empathy: 2 },
    pageReference: 86,
    attacks: [
      { type: 'slash', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.slash.description' },
      { type: 'bash', attack: 10, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bash.description' },
      { type: 'sweep', attack: 9, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.sweep.description' },
      { type: 'deadlyGaze', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.deadly_gaze.description' },
      { type: 'coldStrike', attack: 10, damage: { non_typical: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.cold_strike.description' },
      { type: 'deathScream', attack: 10, damage: { fear: true }, range: 'common:range.short', description: 'monsters:attack.death_scream.description' }
    ]
  },
  {
    id: 'ent',
    name: 'common:monster.ent',
    attributes: { strength: 16, agility: 3, wits: 5, empathy: 3 },
    pageReference: 88,
    attacks: [
      { type: 'bash', attack: 10, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bash.description' },
      { type: 'sweep', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.sweep.description' },
      { type: 'theGroundShatters', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.the_ground_shatters.description' },
      { type: 'wrapAttack', attack: 9, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.wrap_attack.description' },
      { type: 'rainOfRocks', attack: 8, damage: { blunt: 2 }, range: 'common:range.short', description: 'monsters:attack.rain_of_rocks.description' },
      { type: 'squash', attack: 10, damage: { blunt: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.squash.description' }
    ]
  },
  {
    id: 'wyvern',
    name: 'common:monster.wyvern',
    attributes: { ...defaultAttributes, strength: 14, agility: 5 },
    pageReference: 90,
    attacks: [
      { type: 'clawFlurry', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.claw_flurry.description' },
      { type: 'bite', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'diveAttack', attack: 12, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dive_attack.description' },
      { type: 'poisonTailAttack', attack: 10, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.poison_tail_attack.description' },
      { type: 'roar', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.roar.description' },
      { type: 'rush', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.rush.description' }
    ]
  },
  {
    id: 'ghost',
    name: 'common:monster.ghost',
    attributes: { strength: 8, agility: 3, wits: 3, empathy: 2 },
    pageReference: 92,
    attacks: [
      { type: 'coldStrike', attack: 8, damage: { non_typical: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.cold_strike.description' },
      { type: 'deadlyGaze', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.deadly_gaze.description' },
      { type: 'nightmareVisions', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.nightmare_visions.description' },
      { type: 'mindBurst', attack: 8, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.mind_burst.description' },
      { type: 'deathScream', attack: 8, damage: { fear: true }, range: 'common:range.short', description: 'monsters:attack.death_scream.description' },
      { type: 'distraction', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.distraction.description' }
    ]
  },
  {
    id: 'gryphon',
    name: 'common:monster.gryphon',
    attributes: { ...defaultAttributes, strength: 12, agility: 5 },
    pageReference: 94,
    attacks: [
      { type: 'clawFlurry', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.claw_flurry.description' },
      { type: 'peck', attack: 10, damage: { stab: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.peck.description' },
      { type: 'diveAttack', attack: 12, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dive_attack.description' },
      { type: 'roar', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.roar.description' },
      { type: 'pounce', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.pounce.description' },
      { type: 'beakThrow', attack: 9, damage: { stab: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.beak_throw.description' }
    ]
  },
  {
    id: 'gray-bear',
    name: 'common:monster.gray_bear',
    attributes: { ...defaultAttributes, strength: 14, agility: 2 },
    pageReference: 96,
    attacks: [
      { type: 'clawFlurry', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.claw_flurry.description' },
      { type: 'bite', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'bash', attack: 10, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bash.description' },
      { type: 'rush', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.rush.description' },
      { type: 'roar', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.roar.description' },
      { type: 'lockedJaws', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.locked_jaws.description' }
    ]
  },
  {
    id: 'harpies',
    name: 'common:monster.harpies',
    attributes: { strength: 8, agility: 3, wits: 2, empathy: 1 },
    pageReference: 98,
    attacks: [
      { type: 'slash', attack: 8, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.slash.description' },
      { type: 'bite', attack: 8, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'diveAttack', attack: 9, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.dive_attack.description' },
      { type: 'piercing_shriek', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.piercing_shriek.description' },
      { type: 'clawFlurry', attack: 8, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.claw_flurry.description' },
      { type: 'fallFromTheSky', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.fall_from_the_sky.description' }
    ]
  },
  {
    id: 'hydra',
    name: 'common:monster.hydra',
    attributes: { ...defaultAttributes, strength: 4, agility: 4 },
    pageReference: 100,
    attacks: [
      { type: 'bite', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'lockedJaws', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.locked_jaws.description' },
      { type: 'tailsSlash', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.tails_slash.description' },
      { type: 'wrapAttack', attack: 9, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.wrap_attack.description' },
      { type: 'poisonSpit', attack: 9, damage: { poison: { type: 'paralyzing', potency: 6 } }, range: 'common:range.short', description: 'monsters:attack.poison_spit.description' },
      { type: 'venemousBite', attack: 10, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.venemous_bite.description' }
    ]
  },
  {
    id: 'insectoid',
    name: 'common:monster.insectoid',
    attributes: { ...defaultAttributes, strength: 5, agility: 3 },
    pageReference: 102,
    attacks: [
      { type: 'slash', attack: 9, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.slash.description' },
      { type: 'bite', attack: 9, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'poisonScratch', attack: 9, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.poison_scratch.description' },
      { type: 'webshot', attack: 9, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.webshot.description' },
      { type: 'poisonSpit', attack: 9, damage: { poison: { type: 'lethal', potency: 5 } }, range: 'common:range.near', description: 'monsters:attack.poison_spit.description' },
      { type: 'rush', attack: 9, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.rush.description' }
    ]
  },
  {
    id: 'giant-squid',
    name: 'common:monster.giant_squid',
    attributes: { ...defaultAttributes, strength: 14, agility: 4 },
    pageReference: 106,
    attacks: [
      { type: 'tentacleLash', attack: 12, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.tentacle_lash.description' },
      { type: 'tentacleFrenzy', attack: 10, damage: { blunt: 3 }, range: 'common:range.near', description: 'monsters:attack.tentacle_frenzy.description' },
      { type: 'wrapAttack', attack: 12, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.wrap_attack.description' },
      { type: 'bite', attack: 10, damage: { slash: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'devour', attack: 10, damage: { slash: 4 }, range: 'common:range.arms_length', description: 'monsters:attack.devour.description' },
      { type: 'tentaclePenetrationNear', attack: 10, damage: { stab: 2 }, range: 'common:range.near', description: 'monsters:attack.tentacle_penetration_near.description' }
    ]
  },
  {
    id: 'manticore',
    name: 'common:monster.manticore',
    attributes: { ...defaultAttributes, strength: 15, agility: 4 },
    pageReference: 108,
    attacks: [
      { type: 'clawFlurry', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.claw_flurry.description' },
      { type: 'bite', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'poisonTailAttack', attack: 12, damage: { stab: 1 }, range: 'common:range.near', description: 'monsters:attack.poison_tail_attack.description' },
      { type: 'roar', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.roar.description' },
      { type: 'diveAttack', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dive_attack.description' },
      { type: 'pounce', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.pounce.description' }
    ]
  },
  {
    id: 'minotaur',
    name: 'common:monster.minotaur',
    attributes: { strength: 10, agility: 4, wits: 2, empathy: 2 },
    pageReference: 110,
    attacks: [
      { type: 'horn', attack: 10, damage: { stab: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.horn.description' },
      { type: 'bite', attack: 10, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'kick', attack: 9, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.kick.description' },
      { type: 'rush', attack: 9, damage: { stab: 2 }, range: 'common:range.near', description: 'monsters:attack.rush.description' },
      { type: 'bash', attack: 9, damage: { blunt: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.bash.description' },
      { type: 'sweep', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.sweep.description' }
    ]
  },
  {
    id: 'nightwarg',
    name: 'common:monster.night_warg',
    attributes: { ...defaultAttributes, strength: 8, agility: 4 },
    pageReference: 112,
    attacks: [
      { type: 'clawFlurry', attack: 10, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.claw_flurry.description' },
      { type: 'bite', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'throatBite', attack: 10, damage: { slash: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.throat_bite.description' },
      { type: 'pounce', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.pounce.description' },
      { type: 'roar', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.roar.description' },
      { type: 'lockedJaws', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.locked_jaws.description' }
    ]
  },
  {
    id: 'restless-dead',
    name: 'common:monster.restless_dead',
    attributes: { ...defaultAttributes, strength: 3, agility: 2 },
    pageReference: 114,
    attacks: [
      { type: 'slash', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.slash.description' },
      { type: 'bash', attack: 7, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.bash.description' },
      { type: 'bite', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'rush', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.rush.description' },
      { type: 'clawFlurry', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.claw_flurry.description' },
      { type: 'deadlyGaze', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.deadly_gaze.description' }
    ]
  },
  {
    id: 'skeleton',
    name: 'common:monster.skeleton',
    attributes: { ...defaultAttributes, strength: 3, agility: 2 },
    pageReference: 114,
    attacks: [
      { type: 'slash', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.slash.description' },
      { type: 'bash', attack: 7, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.bash.description' },
      { type: 'stab', attack: 7, damage: { stab: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.stab.description' },
      { type: 'rush', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.rush.description' },
      { type: 'sweep', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.sweep.description' },
      { type: 'distraction', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.distraction.description' }
    ]
  },
  {
    id: 'ghoul',
    name: 'common:monster.ghoul',
    attributes: { ...defaultAttributes, strength: 4, agility: 2 },
    pageReference: 114,
    attacks: [
      { type: 'clawFlurry', attack: 8, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.claw_flurry.description' },
      { type: 'infectedScratch', attack: 8, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.infected_scratch.description' },
      { type: 'diseasedBite', attack: 8, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.diseased_bite.description' },
      { type: 'pounce', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.pounce.description' },
      { type: 'lockedJaws', attack: 8, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.locked_jaws.description' },
      { type: 'distraction', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.distraction.description' }
    ]
  },
  {
    id: 'sea-serpent',
    name: 'common:monster.sea_serpent',
    attributes: { ...defaultAttributes, strength: 18, agility: 3 },
    pageReference: 116,
    attacks: [
      { type: 'bite', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'tailsSlash', attack: 12, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.tails_slash.description' },
      { type: 'wrapAttack', attack: 12, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.wrap_attack.description' },
      { type: 'rush', attack: 12, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.rush.description' },
      { type: 'lockedJaws', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.locked_jaws.description' },
      { type: 'devour', attack: 10, damage: { slash: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.devour.description' }
    ]
  },
  {
    id: 'strangling-vine',
    name: 'common:monster.strangling_vine',
    attributes: { ...defaultAttributes, strength: 8, agility: 3 },
    pageReference: 118,
    attacks: [
      { type: 'tentacleLash', attack: 10, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.tentacle_lash.description' },
      { type: 'wrapAttack', attack: 12, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.wrap_attack.description' },
      { type: 'tentacleFrenzy', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.tentacle_frenzy.description' },
      { type: 'diseasedTouch', attack: 10, damage: { non_typical: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.diseased_touch.description' },
      { type: 'distraction', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.distraction.description' },
      { type: 'tentaclePenetrationArmsLength', attack: 10, damage: { stab: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.tentacle_penetration_arms_length.description' }
    ]
  },
  {
    id: 'troll',
    name: 'common:monster.troll',
    attributes: { ...defaultAttributes, strength: 8, agility: 3 },
    pageReference: 120,
    attacks: [
      { type: 'bash', attack: 10, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bash.description' },
      { type: 'sweep', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.sweep.description' },
      { type: 'bite', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'rush', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.rush.description' },
      { type: 'theGroundShatters', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.the_ground_shatters.description' },
      { type: 'squash', attack: 10, damage: { blunt: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.squash.description' }
    ]
  }
]

import { defaultAttributes } from '../../../models/attributes.model'
import { Monster } from '../monster.model'

export const bitterReachMonsters: Monster[] = [
  {
    id: 'pike_beast',
    name: 'common:monster.pike_beast',
    attributes: { ...defaultAttributes, strength: 16, agility: 8, wits: 1, empathy: 1 },
    pageReference: 94,
    attacks: [
      { type: 'pike_beast_1', attack: 8, damage: { blunt: 2 }, range: 'common:range.short', description: 'monsters:attack.pike_beast_1.description' },
      { type: 'pike_beast_2', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.pike_beast_2.description' },
      { type: 'pike_beast_3', attack: 7, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.pike_beast_3.description' },
      { type: 'pike_beast_4', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.pike_beast_4.description' },
      { type: 'pike_beast_5', attack: 6, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.pike_beast_5.description' },
      { type: 'pike_beast_6', attack: 10, damage: { stab: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.pike_beast_6.description' }
    ]
  },
  {
    id: 'stone_raven',
    name: 'common:monster.stone_raven',
    attributes: { ...defaultAttributes, strength: 6, agility: 8, wits: 1, empathy: 1 },
    pageReference: 96,
    attacks: [
      { type: 'stone_raven_1', attack: 6, damage: { stab: 2 }, range: 'common:range.short', description: 'monsters:attack.stone_raven_1.description' },
      { type: 'stone_raven_2', attack: 6, damage: { stab: 2 }, range: 'common:range.short', description: 'monsters:attack.stone_raven_2.description' },
      { type: 'stone_raven_3', attack: 6, damage: { slash: 2 }, range: 'common:range.short', description: 'monsters:attack.stone_raven_3.description' },
      { type: 'stone_raven_4', attack: 6, damage: { slash: 2 }, range: 'common:range.short', description: 'monsters:attack.stone_raven_4.description' },
      { type: 'stone_raven_5', attack: 8, damage: { fear: true }, range: 'common:range.short', description: 'monsters:attack.stone_raven_5.description' },
      { type: 'stone_raven_6', attack: 8, damage: { fear: true }, range: 'common:range.short', description: 'monsters:attack.stone_raven_6.description' }
    ]
  },
  {
    id: 'frost_dragon',
    name: 'common:monster.frost_dragon',
    attributes: { ...defaultAttributes, strength: 36, agility: 5, wits: 5, empathy: 2 },
    pageReference: 99,
    attacks: [
      { type: 'frost_dragon_1', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.frost_dragon_1.description' },
      { type: 'frost_dragon_2', attack: 8, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.frost_dragon_2.description' },
      { type: 'frost_dragon_3', attack: 6, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.frost_dragon_3.description' },
      { type: 'frost_dragon_4', attack: 12, damage: { stab: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.frost_dragon_4.description' },
      { type: 'frost_dragon_5', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.frost_dragon_5.description' },
      { type: 'frost_dragon_6', attack: 12, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.frost_dragon_6.description' }
    ]
  },
  {
    id: 'ice_giant',
    name: 'common:monster.ice_giant',
    attributes: { ...defaultAttributes, strength: 26, agility: 2, wits: 3, empathy: 2 },
    pageReference: 100,
    attacks: [
      { type: 'ice_giant_1', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.ice_giant_1.description' },
      { type: 'ice_giant_2', attack: 14, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.ice_giant_2.description' },
      { type: 'ice_giant_3', attack: 8, damage: { slash: 3 }, range: 'common:range.near', description: 'monsters:attack.ice_giant_3.description' },
      { type: 'ice_giant_4', attack: 0, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.ice_giant_4.description' },
      { type: 'ice_giant_5', attack: 8, damage: { fear: true }, range: 'common:range.short', description: 'monsters:attack.ice_giant_5.description' },
      { type: 'ice_giant_6', attack: 8, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.ice_giant_6.description' }
    ]
  },
  {
    id: 'stone_guardian',
    name: 'common:monster.stone_guardian',
    attributes: { ...defaultAttributes, strength: 10, agility: 2, wits: 1, empathy: 1 },
    pageReference: 102,
    attacks: [
      { type: 'stone_guardian_1', attack: 8, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.stone_guardian_1.description' },
      { type: 'stone_guardian_2', attack: 6, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.stone_guardian_2.description' },
      { type: 'stone_guardian_3', attack: 8, damage: { non_typical: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.stone_guardian_3.description' },
      { type: 'stone_guardian_4', attack: 0, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.stone_guardian_4.description' },
      { type: 'stone_guardian_5', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.stone_guardian_5.description' },
      { type: 'stone_guardian_6', attack: 8, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.stone_guardian_6.description' }
    ]
  },
  {
    id: 'giant_wolf',
    name: 'common:monster.giant_wolf',
    attributes: { ...defaultAttributes, strength: 10, agility: 6, wits: 1, empathy: 1 },
    pageReference: 104,
    attacks: [
      { type: 'giant_wolf_1', attack: 6, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.giant_wolf_1.description' },
      { type: 'giant_wolf_2', attack: 8, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.giant_wolf_2.description' },
      { type: 'giant_wolf_3', attack: 6, damage: { disease: 6 }, range: 'common:range.arms_length', description: 'monsters:attack.giant_wolf_3.description' },
      { type: 'giant_wolf_4', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_wolf_4.description' },
      { type: 'giant_wolf_5', attack: 5, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.giant_wolf_5.description' },
      { type: 'giant_wolf_6', attack: 6, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_wolf_6.description' }
    ]
  },
  {
    id: 'nanuik',
    name: 'common:monster.nanuik',
    attributes: { ...defaultAttributes, strength: 12, agility: 4, wits: 1, empathy: 1 },
    pageReference: 106,
    attacks: [
      { type: 'nanuik_1', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.nanuik_1.description' },
      { type: 'nanuik_2', attack: 8, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.nanuik_2.description' },
      { type: 'nanuik_3', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.nanuik_3.description' },
      { type: 'nanuik_4', attack: 6, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.nanuik_4.description' },
      { type: 'nanuik_5', attack: 10, damage: { blunt: 1 }, range: 'common:range.short', description: 'monsters:attack.nanuik_5.description' },
      { type: 'nanuik_6', attack: 8, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.nanuik_6.description' }
    ]
  },
  {
    id: 'wendigo',
    name: 'common:monster.wendigo',
    attributes: { ...defaultAttributes, strength: 20, agility: 3, wits: 1, empathy: 1 },
    pageReference: 108,
    attacks: [
      { type: 'wendigo_1', attack: 0, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.wendigo_1.description' },
      { type: 'wendigo_2', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.wendigo_2.description' },
      { type: 'wendigo_3', attack: 8, damage: { poison: { type: 'lethal', potency: 6 } }, range: 'common:range.arms_length', description: 'monsters:attack.wendigo_3.description' },
      { type: 'wendigo_4', attack: 8, damage: { stab: 2 }, range: 'common:range.near', description: 'monsters:attack.wendigo_4.description' },
      { type: 'wendigo_5', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.wendigo_5.description' },
      { type: 'wendigo_6', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.wendigo_6.description' }
    ]
  }
]

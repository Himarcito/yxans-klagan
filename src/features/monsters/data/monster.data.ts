import { defaultAttributes } from '../../../models/attributes.model'
import { Monster } from '../monster.model'

export const bookMonsters: Monster[] = [
  {
    id: 'giant',
    name: 'common:monster.giant',
    attributes: { ...defaultAttributes, strength: 24, agility: 2, wits: 2, empathy: 2 },
    pageReference: 98,
    attacks: [
      { type: 'giant_1', attack: 12, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.giant_1.description' },
      { type: 'giant_2', attack: 6, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.giant_2.description' },
      { type: 'giant_3', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_3.description' },
      { type: 'giant_4', attack: 9, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.giant_4.description' },
      { type: 'giant_5', attack: 11, damage: { blunt: 1 }, range: 'common:range.short', description: 'monsters:attack.giant_5.description' },
      { type: 'giant_6', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_6.description' }
    ]
  },
  {
    id: 'abyss-worm',
    name: 'common:monster.abyss_worm',
    attributes: { ...defaultAttributes, strength: 18, agility: 2 },
    pageReference: 104,
    attacks: [
      { type: 'abyss_worm_1', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.abyss_worm_1.description' },
      { type: 'abyss_worm_2', attack: 5, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.abyss_worm_2.description' },
      { type: 'abyss_worm_3', attack: 12, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.abyss_worm_3.description' },
      { type: 'abyss_worm_4', attack: 10, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.abyss_worm_4.description' },
      { type: 'abyss_worm_5', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.abyss_worm_5.description' },
      { type: 'abyss_worm_6', attack: 0, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.abyss_worm_6.description' }
    ]
  },
  {
    id: 'bloodling',
    name: 'common:monster.bloodling',
    attributes: { ...defaultAttributes, strength: 8, agility: 4 },
    pageReference: 120,
    attacks: [
      { type: 'bloodling_1', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bloodling_1.description' },
      { type: 'bloodling_2', attack: 8, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bloodling_2.description' },
      { type: 'bloodling_3', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bloodling_3.description' },
      { type: 'bloodling_4', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.bloodling_4.description' },
      { type: 'bloodling_5', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.bloodling_5.description' },
      { type: 'bloodling_6', attack: 12, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.bloodling_6.description' }
    ]
  },
  {
    id: 'dragon-small',
    name: 'common:monster.dragon_small',
    attributes: { strength: 32, agility: 4, wits: 4, empathy: 2 },
    pageReference: 90,
    attacks: [
      { type: 'dragon_1', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dragon_1.description' },
      { type: 'dragon_2', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.dragon_2.description' },
      { type: 'dragon_3', attack: 6, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.dragon_3.description' },
      { type: 'dragon_4', attack: 12, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.dragon_4.description' },
      { type: 'dragon_5', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.dragon_5.description' },
      { type: 'dragon_6', attack: 12, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.dragon_6.description' }
    ]
  },
  {
    id: 'dragon-large',
    name: 'common:monster.dragon_large',
    attributes: { strength: 48, agility: 4, wits: 6, empathy: 3 },
    pageReference: 90,
    attacks: [
      { type: 'dragon_1', attack: 16, damage: { slash: 3 }, range: 'common:range.near', description: 'monsters:attack.dragon_1.description' },
      { type: 'dragon_2', attack: 14, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.dragon_2.description' },
      { type: 'dragon_3', attack: 14, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.dragon_3.description' },
      { type: 'dragon_4', attack: 18, damage: { non_typical: 4 }, range: 'common:range.short', description: 'monsters:attack.dragon_4.description' },
      { type: 'dragon_5', attack: 14, damage: { blunt: 3 }, range: 'common:range.near', description: 'monsters:attack.dragon_5.description' },
      { type: 'dragon_6', attack: 18, damage: { non_typical: 4 }, range: 'common:range.short', description: 'monsters:attack.dragon_6.description' }
    ]
  },
  {
    id: 'drakewyrm',
    name: 'common:monster.drakewyrm',
    attributes: { strength: 25, agility: 3, wits: 5, empathy: 2 },
    pageReference: 88,
    attacks: [
      { type: 'drakewyrm_1', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.drakewyrm_1.description' },
      { type: 'drakewyrm_2', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.drakewyrm_2.description' },
      { type: 'drakewyrm_3', attack: 8, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.drakewyrm_3.description' },
      { type: 'drakewyrm_4', attack: 6, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.drakewyrm_4.description' },
      { type: 'drakewyrm_5', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.drakewyrm_5.description' },
      { type: 'drakewyrm_6', attack: 10, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.drakewyrm_6.description' }
    ]
  },
  {
    id: 'death-knight',
    name: 'common:monster.death_knight',
    attributes: { strength: 12, agility: 3, wits: 3, empathy: 2 },
    pageReference: 78,
    attacks: [
      { type: 'death_knight_1', attack: 12, damage: { weapon: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.death_knight_1.description' },
      { type: 'death_knight_2', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.death_knight_2.description' },
      { type: 'death_knight_3', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.death_knight_3.description' },
      { type: 'death_knight_4', attack: 8, damage: { weapon: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.death_knight_4.description' },
      { type: 'death_knight_5', attack: 0, damage: { poison: { type: 'paralyzing', potency: 8 } }, range: 'common:range.near', description: 'monsters:attack.death_knight_5.description' },
      { type: 'death_knight_6', attack: 12, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.death_knight_6.description' }
    ]
  },
  {
    id: 'ent',
    name: 'common:monster.ent',
    attributes: { strength: 16, agility: 3, wits: 5, empathy: 3 },
    pageReference: 92,
    attacks: [
      { type: 'ent_1', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.ent_1.description' },
      { type: 'ent_2', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.ent_2.description' },
      { type: 'ent_3', attack: 9, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.ent_3.description' },
      { type: 'ent_4', attack: 10, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.ent_4.description' },
      { type: 'ent_5', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.ent_5.description' },
      { type: 'ent_6', attack: 12, damage: { blunt: 2 }, range: 'common:range.short', description: 'monsters:attack.ent_6.description' }
    ]
  },
  {
    id: 'wyvern',
    name: 'common:monster.wyvern',
    attributes: { ...defaultAttributes, strength: 14, agility: 5 },
    pageReference: 102,
    attacks: [
      { type: 'wyvern_1', attack: 7, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.wyvern_1.description' },
      { type: 'wyvern_2', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.wyvern_2.description' },
      { type: 'wyvern_3', attack: 9, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.wyvern_3.description' },
      { type: 'wyvern_4', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.wyvern_4.description' },
      { type: 'wyvern_5', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.wyvern_5.description' },
      { type: 'wyvern_6', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.wyvern_6.description' }
    ]
  },
  {
    id: 'ghost',
    name: 'common:monster.ghost',
    attributes: { strength: 8, agility: 3, wits: 3, empathy: 2 },
    pageReference: 96,
    attacks: [
      { type: 'ghost_1', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.ghost_1.description' },
      { type: 'ghost_2', attack: 9, damage: { fear: true }, range: 'common:range.arms_length', description: 'monsters:attack.ghost_2.description' },
      { type: 'ghost_3', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.ghost_3.description' },
      { type: 'ghost_4', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.ghost_4.description' },
      { type: 'ghost_5', attack: 10, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.ghost_5.description' },
      { type: 'ghost_6', attack: 12, damage: { non_typical: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.ghost_6.description' }
    ]
  },
  {
    id: 'gryphon',
    name: 'common:monster.gryphon',
    attributes: { ...defaultAttributes, strength: 12, agility: 5 },
    pageReference: 100,
    attacks: [
      { type: 'gryphon_1', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.gryphon_1.description' },
      { type: 'gryphon_2', attack: 6, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.gryphon_2.description' },
      { type: 'gryphon_3', attack: 6, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.gryphon_3.description' },
      { type: 'gryphon_4', attack: 9, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.gryphon_4.description' },
      { type: 'gryphon_5', attack: 6, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.gryphon_5.description' },
      { type: 'gryphon_6', attack: 8, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.gryphon_6.description' }
    ]
  },
  {
    id: 'gray-bear',
    name: 'common:monster.gray_bear',
    attributes: { ...defaultAttributes, strength: 14, agility: 2 },
    pageReference: 118,
    attacks: [
      { type: 'gray_bear_1', attack: 9, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.gray_bear_1.description' },
      { type: 'gray_bear_2', attack: 10, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.gray_bear_2.description' },
      { type: 'gray_bear_3', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.gray_bear_3.description' },
      { type: 'gray_bear_4', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.gray_bear_4.description' },
      { type: 'gray_bear_5', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.gray_bear_5.description' },
      { type: 'gray_bear_6', attack: 9, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.gray_bear_6.description' }
    ]
  },
  {
    id: 'harpies',
    name: 'common:monster.harpies',
    attributes: { strength: 8, agility: 3, wits: 2, empathy: 1 },
    pageReference: 76,
    attacks: [
      { type: 'harpies_1', attack: 6, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.harpies_1.description' },
      { type: 'harpies_2', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.harpies_2.description' },
      { type: 'harpies_3', attack: 6, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.harpies_3.description' },
      { type: 'harpies_4', attack: 8, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.harpies_4.description' },
      { type: 'harpies_5', attack: 6, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.harpies_5.description' },
      { type: 'harpies_6', attack: 6, damage: { non_typical: 1 }, range: 'common:range

import { defaultAttributes } from '../../../models/attributes.model'
import { Monster } from '../monster.model'

export const communityMonsters: Monster[] = [
  {
    id: 'amphibian',
    name: 'common:monster.amphibian',
    attributes: { ...defaultAttributes, strength: 5, agility: 2, wits: 3, empathy: 3 },
    pageReference: 7,
    attacks: [
      { type: 'amphibian_1', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.amphibian_1.description' },
      { type: 'amphibian_2', attack: 6, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.amphibian_2.description' },
      { type: 'amphibian_3', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.amphibian_3.description' },
      { type: 'amphibian_4', attack: 6, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.amphibian_4.description' },
      { type: 'amphibian_5', attack: 6, damage: { non_typical: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.amphibian_5.description' },
      { type: 'amphibian_6', attack: 7, damage: { poison: { type: 'lethal', potency: 3 } }, range: 'common:range.near', description: 'monsters:attack.amphibian_6.description' }
    ]
  },
  {
    id: 'amoeba',
    name: 'common:monster.amoeba',
    attributes: { ...defaultAttributes, strength: 18, agility: 3, wits: 1, empathy: 1 },
    pageReference: 11,
    attacks: [
      { type: 'amoeba_1', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.amoeba_1.description' },
      { type: 'amoeba_2', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.amoeba_2.description' },
      { type: 'amoeba_3', attack: 7, damage: { poison: { type: 'lethal', potency: 7 } }, range: 'common:range.near', description: 'monsters:attack.amoeba_3.description' },
      { type: 'amoeba_4', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.amoeba_4.description' },
      { type: 'amoeba_5', attack: 9, damage: { stab: 1 }, range: 'common:range.near', description: 'monsters:attack.amoeba_5.description' },
      { type: 'amoeba_6', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.amoeba_6.description' }
    ]
  },
  {
    id: 'basilisk',
    name: 'common:monster.basilisk',
    attributes: { ...defaultAttributes, strength: 24, agility: 6, wits: 2, empathy: 1 },
    pageReference: 15,
    attacks: [
      { type: 'basilisk_1', attack: 7, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.basilisk_1.description' },
      { type: 'basilisk_2', attack: 8, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.basilisk_2.description' },
      { type: 'basilisk_3', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.basilisk_3.description' },
      { type: 'basilisk_4', attack: 7, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.basilisk_4.description' },
      { type: 'basilisk_5', attack: 0, damage: { poison: { type: 'lethal', potency: 7 } }, range: 'common:range.near', description: 'monsters:attack.basilisk_5.description' },
      { type: 'basilisk_6', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.basilisk_6.description' }
    ]
  },
  {
    id: 'bog_man',
    name: 'common:monster.bog_man',
    attributes: { ...defaultAttributes, strength: 12, agility: 3, wits: 1, empathy: 1 },
    pageReference: 19,
    attacks: [
      { type: 'bog_man_1', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.bog_man_1.description' },
      { type: 'bog_man_2', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.bog_man_2.description' },
      { type: 'bog_man_3', attack: 7, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.bog_man_3.description' },
      { type: 'bog_man_4', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.bog_man_4.description' },
      { type: 'bog_man_5', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.bog_man_5.description' },
      { type: 'bog_man_6', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.bog_man_6.description' }
    ]
  },
  {
    id: 'dread_raptor',
    name: 'common:monster.dread_raptor',
    attributes: { ...defaultAttributes, strength: 14, agility: 5, wits: 1, empathy: 0 },
    pageReference: 23,
    attacks: [
      { type: 'dread_raptor_1', attack: 9, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dread_raptor_1.description' },
      { type: 'dread_raptor_2', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.dread_raptor_2.description' },
      { type: 'dread_raptor_3', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.dread_raptor_3.description' },
      { type: 'dread_raptor_4', attack: 7, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dread_raptor_4.description' },
      { type: 'dread_raptor_5', attack: 9, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dread_raptor_5.description' },
      { type: 'dread_raptor_6', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dread_raptor_6.description' }
    ]
  },
  {
    id: 'gatekeeper',
    name: 'common:monster.gatekeeper',
    attributes: { ...defaultAttributes, strength: 24, agility: 4, wits: 4, empathy: 0 },
    pageReference: 27,
    attacks: [
      { type: 'gatekeeper_1', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.gatekeeper_1.description' },
      { type: 'gatekeeper_2', attack: 9, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.gatekeeper_2.description' },
      { type: 'gatekeeper_3', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.gatekeeper_3.description' },
      { type: 'gatekeeper_4', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.gatekeeper_4.description' },
      { type: 'gatekeeper_5', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.gatekeeper_5.description' },
      { type: 'gatekeeper_6', attack: 10, damage: { non_typical: 2 }, range: 'common:range.near', description: 'monsters:attack.gatekeeper_6.description' }
    ]
  },
  {
    id: 'giant_specter',
    name: 'common:monster.giant_specter',
    attributes: { ...defaultAttributes, strength: 32, agility: 2, wits: 2, empathy: 2 },
    pageReference: 31,
    attacks: [
      { type: 'giant_specter_1', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.giant_specter_1.description' },
      { type: 'giant_specter_2', attack: 9, damage: { fear: true }, range: 'common:range.arms_length', description: 'monsters:attack.giant_specter_2.description' },
      { type: 'giant_specter_3', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.giant_specter_3.description' },
      { type: 'giant_specter_4', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.giant_specter_4.description' },
      { type: 'giant_specter_5', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_specter_5.description' },
      { type: 'giant_specter_6', attack: 12, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_specter_6.description' }
    ]
  },
  {
    id: 'giant_spider_hatchling',
    name: 'common:monster.giant_spider_hatchling',
    attributes: { ...defaultAttributes, strength: 15, agility: 3, wits: 2, empathy: 0 },
    pageReference: 35,
    attacks: [
      { type: 'giant_spider_hatchling_1', attack: 7, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_hatchling_1.description' },
      { type: 'giant_spider_hatchling_2', attack: 6, damage: { stab: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_hatchling_2.description' },
      { type: 'giant_spider_hatchling_3', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_hatchling_3.description' },
      { type: 'giant_spider_hatchling_4', attack: 6, damage: { poison: { type: 'sleeping', potency: 6 } }, range: 'common:range.near', description: 'monsters:attack.giant_spider_hatchling_4.description' },
      { type: 'giant_spider_hatchling_5', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_hatchling_5.description' },
      { type: 'giant_spider_hatchling_6', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.giant_spider_hatchling_6.description' }
    ]
  },
  {
    id: 'giant_spider_male',
    name: 'common:monster.giant_spider_male',
    attributes: { ...defaultAttributes, strength: 16, agility: 6, wits: 3, empathy: 0 },
    pageReference: 35,
    attacks: [
      { type: 'giant_spider_male_1', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.giant_spider_male_1.description' },
      { type: 'giant_spider_male_2', attack: 7, damage: { stab: 2 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_male_2.description' },
      { type: 'giant_spider_male_3', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_male_3.description' },
      { type: 'giant_spider_male_4', attack: 7, damage: { poison: { type: 'paralyzing', potency: 8 } }, range: 'common:range.arms_length', description: 'monsters:attack.giant_spider_male_4.description' },
      { type: 'giant_spider_male_5', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_male_5.description' },
      { type: 'giant_spider_male_6', attack: 8, damage: { blunt: 2 }, range: 'common:range.short', description: 'monsters:attack.giant_spider_male_6.description' }
    ]
  },
  {
    id: 'giant_spider_female',
    name: 'common:monster.giant_spider_female',
    attributes: { ...defaultAttributes, strength: 28, agility: 2, wits: 4, empathy: 0 },
    pageReference: 35,
    attacks: [
      { type: 'giant_spider_female_1', attack: 9, damage: { slash: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.giant_spider_female_1.description' },
      { type: 'giant_spider_female_2', attack: 8, damage: { stab: 2 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_female_2.description' },
      { type: 'giant_spider_female_3', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_female_3.description' },
      { type: 'giant_spider_female_4', attack: 9, damage: { poison: { type: 'lethal', potency: 10 } }, range: 'common:range.arms_length', description: 'monsters:attack.giant_spider_female_4.description' },
      { type: 'giant_spider_female_5', attack: 0, damage: { non_typical: 2 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_female_5.description' },
      { type: 'giant_spider_female_6', attack: 9, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.giant_spider_female_6.description' }
    ]
  },
  {
    id: 'greater_golem',
    name: 'common:monster.greater_golem',
    attributes: { ...defaultAttributes, strength: 20, agility: 2, wits: 2, empathy: 0 },
    pageReference: 43,
    attacks: [
      { type: 'greater_golem_1', attack: 9, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.greater_golem_1.description' },
      { type: 'greater_golem_2', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.greater_golem_2.description' },
      { type: 'greater_golem_3', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.greater_golem_3.description' },
      { type: 'greater_golem_4', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.greater_golem_4.description' },
      { type: 'greater_golem_5', attack: 9, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.greater_golem_5.description' },
      { type: 'greater_golem_6', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.greater_golem_6.description' }
    ]
  },
  {
    id: 'imp',
    name: 'common:monster.imp',
    attributes: { ...defaultAttributes, strength: 6, agility: 4, wits: 6, empathy: 0 },
    pageReference: 47,
    attacks: [
      { type: 'imp_1', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.imp_1.description' },
      { type: 'imp_2', attack: 8, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.imp_2.description' },
      { type: 'imp_3', attack: 8, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.imp_3.description' },
      { type: 'imp_4', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.imp_4.description' },
      { type: 'imp_5', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.imp_5.description' },
      { type: 'imp_6', attack: 0, damage: { non_typical: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.imp_6.description' }
    ]
  },
  {
    id: 'iron_dragon',
    name: 'common:monster.iron_dragon',
    attributes: { ...defaultAttributes, strength: 60, agility: 3, wits: 2, empathy: 1 },
    pageReference: 51,
    attacks: [
      { type: 'iron_dragon_1', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.iron_dragon_1.description' },
      { type: 'iron_dragon_2', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.iron_dragon_2.description' },
      { type: 'iron_dragon_3', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.iron_dragon_3.description' },
      { type: 'iron_dragon_4', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.iron_dragon_4.description' },
      { type: 'iron_dragon_5', attack: 9, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.iron_dragon_5.description' },
      { type: 'iron_dragon_6', attack: 12, damage: { non_typical: 2 }, range: 'common:range.near', description: 'monsters:attack.iron_dragon_6.description' }
    ]
  },
  {
    id: 'mara',
    name: 'common:monster.mara',
    attributes: { ...defaultAttributes, strength: 12, agility: 3, wits: 2, empathy: 0 },
    pageReference: 55,
    attacks: [
      { type: 'mara_1', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.mara_1.description' },
      { type: 'mara_2', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.mara_2.description' },
      { type: 'mara_3', attack: 0, damage: { poison: { type: 'sleeping', potency: 7 } }, range: 'common:range.arms_length', description: 'monsters:attack.mara_3.description' },
      { type: 'mara_4', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.mara_4.description' },
      { type: 'mara_5', attack: 10, damage: { fear: true }, range: 'common:range.arms_length', description: 'monsters:attack.mara_5.description' },
      { type: 'mara_6', attack: 10, damage: { stab: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.mara_6.description' }
    ]
  },
  {
    id: 'mire_drake',
    name: 'common:monster.mire_drake',
    attributes: { ...defaultAttributes, strength: 32, agility: 3, wits: 5, empathy: 2 },
    pageReference: 59,
    attacks: [
      { type: 'mire_drake_1', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.mire_drake_1.description' },
      { type: 'mire_drake_2', attack: 7, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.mire_drake_2.description' },
      { type: 'mire_drake_3', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.mire_drake_3.description' },
      { type: 'mire_drake_4', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.mire_drake_4.description' },
      { type: 'mire_drake_5', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.mire_drake_5.description' },
      { type: 'mire_drake_6', attack: 0, damage: { poison: { type: 'lethal', potency: 10 } }, range: 'common:range.near', description: 'monsters:attack.mire_drake_6.description' }
    ]
  },
  {
    id: 'mummy',
    name: 'common:monster.mummy',
    attributes: { ...defaultAttributes, strength: 24, agility: 3, wits: 2, empathy: 0 },
    pageReference: 63,
    attacks: [
      { type: 'mummy_1', attack: 12, damage: { weapon: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.mummy_1.description' },
      { type: 'mummy_2', attack: 9, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.mummy_2.description' },
      { type: 'mummy_3', attack: 0, damage: { poison: { type: 'paralyzing', potency: 10 } }, range: 'common:range.near', description: 'monsters:attack.mummy_3.description' },
      { type: 'mummy_4', attack: 0, damage: { poison: { type: 'sleeping', potency: 8 } }, range: 'common:range.near', description: 'monsters:attack.mummy_4.description' },
      { type: 'mummy_5', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.mummy_5.description' },
      { type: 'mummy_6', attack: 10, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.mummy_6.description' }
    ]
  },
  {
    id: 'nature_spirit',
    name: 'common:monster.nature_spirit',
    attributes: { ...defaultAttributes, strength: 18, agility: 3, wits: 2, empathy: 1 },
    pageReference: 67,
    attacks: [
      { type: 'nature_spirit_1', attack: 7, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.nature_spirit_1.description' },
      { type: 'nature_spirit_2', attack: 9, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.nature_spirit_2.description' },
      { type: 'nature_spirit_3', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.nature_spirit_3.description' },
      { type: 'nature_spirit_4', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.nature_spirit_4.description' },
      { type: 'nature_spirit_5', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.nature_spirit_5.description' },
      { type: 'nature_spirit_6', attack: 0, damage: { non_typical: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.nature_spirit_6.description' }
    ]
  },
  {
    id: 'possessor',
    name: 'common:monster.possessor',
    attributes: { ...defaultAttributes, strength: 10, agility: 4, wits: 3, empathy: 0 },
    pageReference: 71,
    attacks: [
      { type: 'possessor_1', attack: 10, damage: { poison: { type: 'hallucinogenic', potency: 7 } }, range: 'common:range.near', description: 'monsters:attack.possessor_1.description' },
      { type: 'possessor_2', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.possessor_2.description' },
      { type: 'possessor_3', attack: 0, damage: { disease: 9 }, range: 'common:range.short', description: 'monsters:attack.possessor_3.description' },
      { type: 'possessor_4', attack: 10, damage: { fear: true }, range: 'common:range.short', description: 'monsters:attack.possessor_4.description' },
      { type: 'possessor_5', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.possessor_5.description' },
      { type: 'possessor_6', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.possessor_6.description' }
    ]
  },
  {
    id: 'rat_king',
    name: 'common:monster.rat_king',
    attributes: { ...defaultAttributes, strength: 24, agility: 3, wits: 8, empathy: 2 },
    pageReference: 75,
    attacks: [
      { type: 'rat_king_1', attack: 6, damage: { disease: 6 }, range: 'common:range.arms_length', description: 'monsters:attack.rat_king_1.description' },
      { type: 'rat_king_2', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.rat_king_2.description' },
      { type: 'rat_king_3', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.rat_king_3.description' },
      { type: 'rat_king_4', attack: 0, damage: { poison: { type: 'lethal', potency: 6 } }, range: 'common:range.near', description: 'monsters:attack.rat_king_4.description' },
      { type: 'rat_king_5', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.rat_king_5.description' },
      { type: 'rat_king_6', attack: 0, damage: { disease: 7 }, range: 'common:range.near', description: 'monsters:attack.rat_king_6.description' }
    ]
  },
  {
    id: 'rock_troll',
    name: 'common:monster.rock_troll',
    attributes: { ...defaultAttributes, strength: 28, agility: 2, wits: 2, empathy: 0 },
    pageReference: 79,
    attacks: [
      { type: 'rock_troll_1', attack: 10, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.rock_troll_1.description' },
      { type: 'rock_troll_2', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.rock_troll_2.description' },
      { type: 'rock_troll_3', attack: 12, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.rock_troll_3.description' },
      { type: 'rock_troll_4', attack: 9, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.rock_troll_4.description' },
      { type: 'rock_troll_5', attack: 8, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.rock_troll_5.description' },
      { type: 'rock_troll_6', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.rock_troll_6.description' }
    ]
  },
  {
    id: 'shapeshifter',
    name: 'common:monster.shapeshifter',
    attributes: { ...defaultAttributes, strength: 12, agility: 3, wits: 2, empathy: 0 },
    pageReference: 83,
    attacks: [
      { type: 'shapeshifter_1', attack: 7, damage: { poison: { type: 'paralyzing', potency: 6 } }, range: 'common:range.arms_length', description: 'monsters:attack.shapeshifter_1.description' },
      { type: 'shapeshifter_2', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.shapeshifter_2.description' },
      { type: 'shapeshifter_3', attack: 9, damage: { fear: true }, range: 'common:range.short', description: 'monsters:attack.shapeshifter_3.description' },
      { type: 'shapeshifter_4', attack: 0, damage: { disease: 8 }, range: 'common:range.near', description: 'monsters:attack.shapeshifter_4.description' },
      { type: 'shapeshifter_5', attack: 8, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.shapeshifter_5.description' },
      { type: 'shapeshifter_6', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.shapeshifter_6.description' }
    ]
  },
  {
    id: 'skolopendra',
    name: 'common:monster.skolopendra',
    attributes: { ...defaultAttributes, strength: 24, agility: 2, wits: 1, empathy: 0 },
    pageReference: 87,
    attacks: [
      { type: 'skolopendra_1', attack: 8, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.skolopendra_1.description' },
      { type: 'skolopendra_2', attack: 9, damage: { poison: { type: 'paralyzing', potency: 7 } }, range: 'common:range.near', description: 'monsters:attack.skolopendra_2.description' },
      { type: 'skolopendra_3', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.skolopendra_3.description' },
      { type: 'skolopendra_4', attack: 8, damage: { poison: { type: 'lethal', potency: 9 } }, range: 'common:range.near', description: 'monsters:attack.skolopendra_4.description' },
      { type: 'skolopendra_5', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.skolopendra_5.description' },
      { type: 'skolopendra_6', attack: 8, damage: { stab: 1 }, range: 'common:range.near', description: 'monsters:attack.skolopendra_6.description' }
    ]
  },
  {
    id: 'swarming_death',
    name: 'common:monster.swarming_death',
    attributes: { ...defaultAttributes, strength: 32, agility: 4, wits: 1, empathy: 0 },
    pageReference: 91,
    attacks: [
      { type: 'swarming_death_1', attack: 7, damage: { fear: true }, range: 'common:range.short', description: 'monsters:attack.swarming_death_1.description' },
      { type: 'swarming_death_2', attack: 0, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.swarming_death_2.description' },
      { type: 'swarming_death_3', attack: 0, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.swarming_death_3.description' },
      { type: 'swarming_death_4', attack: 7, damage: { slash: 1 }, range: 'common:range.short', description: 'monsters:attack.swarming_death_4.description' },
      { type: 'swarming_death_5', attack: 0, damage: { poison: { type: 'paralyzing', potency: 7 } }, range: 'common:range.short', description: 'monsters:attack.swarming_death_5.description' },
      { type: 'swarming_death_6', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.swarming_death_6.description' }
    ]
  }
]

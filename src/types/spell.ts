export interface Spell {
  name: string;
  description: React.ReactNode;
  range: Range;
  components: Component[];
  material?: string;
  ritual: boolean;
  duration: Duration;
  concentration: boolean;
  castingTime: CastingTime;
  level: Level;
  school: School;
  class: Class[];
}

export type Range = 'Self' | 'Touch' | 'Special' | 'Sight' | 'Unlimited' | string;

export type Component = 'Verbal' | 'Somatic' | 'Material';

export type Duration = 'Instantaneous' | '1 round' | 'Until dispelled' | 'Special' | string;

export type CastingTime = '1 bonus action' | '1 action' | '1 reaction' | string;

export type Level = 'Cantrip' | '1st' | '2nd' | '3rd' | '4th' | '5th' | '6th' | '7th' | '8th' | '9th';

export type School = 'Abjuration' | 'Conjuration' | 'Divination' | 'Enchantment' | 'Evocation' | 'Illusion' | 'Necromancy' | 'Transmutation';

export type Class =
  | 'Artificer'
  | 'Barbarian'
  | 'Bard'
  | 'Cleric'
  | 'Druid'
  | 'Fighter'
  | 'Monk'
  | 'Paladin'
  | 'Ranger'
  | 'Rogue'
  | 'Sorcerer'
  | 'Warlock'
  | 'Wizard';

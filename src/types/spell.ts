export interface Spell {
  name: string;
  description: string;
  atHigherLevels?: string;
  range: Range;
  components: Component[];
  materials?: string;
  isRitual: boolean;
  duration: Duration;
  isConcentration: boolean;
  castingTime: CastingTime;
  level: Level;
  school: School;
  usableInClasses: Class[];
}

export type Range = 'Self' | 'Touch' | 'Special' | 'Sight' | 'Unlimited' | string;

export type Component = 'V' | 'S' | 'M';

export type Duration = 'Instantaneous' | '1 round' | 'Until dispelled' | 'Special' | string;

export type CastingTime = '1 bonus action' | '1 action' | '1 reaction' | string;

export type Level = 'Cantrip' | '1st-level' | '2nd-level' | '3rd-level' | '4th-level' | '5th-level' | '6th-level' | '7th-level' | '8th-level' | '9th-level';

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

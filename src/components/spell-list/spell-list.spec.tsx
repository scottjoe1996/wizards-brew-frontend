import { render } from '@testing-library/react';
import { Spell } from '../../types/spell';
import SpellList from './spell-list';

const TEST_SPELLS: Spell[] = [
  {
    name: 'Tongues',
    description:
      'This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says.',
    range: 'Touch',
    components: ['V', 'M'],
    materials: 'A small clay model of a ziggurat.',
    isRitual: false,
    duration: '1 hour',
    isConcentration: false,
    castingTime: '1 action',
    level: '3rd-level',
    school: 'Divination',
    usableInClasses: ['Bard', 'Cleric', 'Sorcerer', 'Warlock', 'Wizard']
  },
  {
    name: 'Transmute Rock',
    description:
      "You choose an area of stone or mud that you can see that fits within a 40-foot cube and that is within range, and choose one of the following effects.\n\nTransmute Rock to Mud. Nonmagical rock of any sort in the area becomes an equal volume of thick and flowing mud that remains for the spell's duration.\n\nIf you cast the spell on an area of ground, it becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make this save the first time it enters the area on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud.\n\nIf you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one.\n\nTransmute Mud to Rock. Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spell's duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a failed save, a creature becomes restrained by the rock. The restrained creature can use an action to try to break free by succeeding on a Strength check (DC 20) or by dealing 25 damage to the rock around it. On a successful save, a creature is shunted safely to the surface to an unoccupied space.",
    range: '120 feet',
    components: ['V', 'S', 'M'],
    materials: 'Clay and water.',
    isRitual: false,
    duration: 'Instantaneous',
    isConcentration: false,
    castingTime: '1 action',
    level: '5th-level',
    school: 'Transmutation',
    usableInClasses: ['Druid', 'Wizard']
  },
  {
    name: 'Transport via Plants',
    description:
      'This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement.',
    range: '10 feet',
    components: ['V', 'S'],
    isRitual: false,
    duration: '1 round',
    isConcentration: false,
    castingTime: '1 action',
    level: '6th-level',
    school: 'Conjuration',
    usableInClasses: ['Druid']
  }
];

it('should display expected spells', () => {
  const { getByText } = render(<SpellList spells={TEST_SPELLS} />);

  getByText(TEST_SPELLS[0].name);
  getByText(TEST_SPELLS[1].name);
  getByText(TEST_SPELLS[2].name);
});

it('should display empty container if given an empty array', () => {
  const { container } = render(<SpellList spells={[]} />);

  expect(container.lastChild).toBeEmptyDOMElement();
});

import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react';
import { Spell } from '../../types/spell';
import SpellCard from './spell-card';

const TEST_SPELL: Spell = {
  name: 'Absorb Elements',
  description:
    'The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.',
  atHigherLevels: 'When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.',
  range: 'Self',
  components: ['S'],
  isRitual: false,
  duration: '1 round',
  isConcentration: false,
  castingTime: '1 action',
  level: '1st-level',
  school: 'Abjuration',
  usableInClasses: ['Druid', 'Ranger', 'Wizard']
};

it('Should only display non expanded content when rendered', () => {
  const { getByText, queryByText } = render(<SpellCard spell={TEST_SPELL} />);

  getByText(TEST_SPELL.name);
  getByText(TEST_SPELL.range);
  getByText(TEST_SPELL.duration);
  getByText(TEST_SPELL.castingTime);
  getByText(`${TEST_SPELL.level} ${TEST_SPELL.school}`);

  expect(queryByText(TEST_SPELL.description)).toBeNull();
});

it('Should display expanded content when expand button is clicked', () => {
  const { getByText, container } = render(<SpellCard spell={TEST_SPELL} />);
  const expandMoreButton = container.querySelector('button');

  fireEvent.click(expandMoreButton!);

  getByText(TEST_SPELL.description);
});

it('Should hide expanded content when expand button is clicked a second time', async () => {
  const { queryByText, container } = render(<SpellCard spell={TEST_SPELL} />);
  const expandMoreButton = container.querySelector('button');

  fireEvent.click(expandMoreButton!);
  fireEvent.click(expandMoreButton!);

  await waitForElementToBeRemoved(() => queryByText(TEST_SPELL.description));
});

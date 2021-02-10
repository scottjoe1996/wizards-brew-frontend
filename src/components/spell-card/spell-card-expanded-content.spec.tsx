import React from 'react';
import { render } from '@testing-library/react';
import SpellCardExpandedContent from './spell-card-expanded-content';
import { Class } from '../../types/spell';

const TEST_SPELL_DESCRIPTION = 'test spell description';
const TEST_SPELL_USABLE_IN_CLASSES: Class[] = ['Wizard', 'Rogue'];
const TEST_SPELL_MATERIALS = 'test materials';

it('should render with expected parameters and not render materials heading', () => {
  const { getByText, queryByText } = render(<SpellCardExpandedContent description={TEST_SPELL_DESCRIPTION} usableInClasses={TEST_SPELL_USABLE_IN_CLASSES} />);
  const materialsText = queryByText('Materials:');

  expect(materialsText).not.toBeInTheDocument();
  getByText(TEST_SPELL_DESCRIPTION);
  getByText(`${TEST_SPELL_USABLE_IN_CLASSES[0]}, ${TEST_SPELL_USABLE_IN_CLASSES[1]}`);
});

it('should not render classes heading', () => {
  const { queryByText } = render(<SpellCardExpandedContent description={TEST_SPELL_DESCRIPTION} usableInClasses={[]} />);
  const classesText = queryByText('Classes:');

  expect(classesText).not.toBeInTheDocument();
});

it('should render material parameter', () => {
  const { getByText } = render(
    <SpellCardExpandedContent description={TEST_SPELL_DESCRIPTION} usableInClasses={TEST_SPELL_USABLE_IN_CLASSES} materials={TEST_SPELL_MATERIALS} />
  );

  getByText(TEST_SPELL_MATERIALS);
});

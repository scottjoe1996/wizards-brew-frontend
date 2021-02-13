import React from 'react';
import { render } from '@testing-library/react';
import SpellCardExpandedContent from './spell-card-expanded-content';
import { Class } from '../../types/spell';

const TEST_SPELL_DESCRIPTION = 'test spell description';
const TEST_SPELL_AT_HIGHER_LEVELS = 'test spell at higher levels';
const TEST_SPELL_USABLE_IN_CLASSES: Class[] = ['Wizard', 'Rogue'];
const TEST_SPELL_MATERIALS = 'test materials';
const MATERIALS_HEADING_TEXT = 'Materials:';
const AT_HIGHER_LEVELS_HEADING_TEXT = 'At higher levels:';

it('should render with expected parameters and not render materials and at higher levels headings', () => {
  const { getByText, queryByText } = render(<SpellCardExpandedContent description={TEST_SPELL_DESCRIPTION} usableInClasses={TEST_SPELL_USABLE_IN_CLASSES} />);
  const materialsHeading = queryByText(MATERIALS_HEADING_TEXT);
  const atHigherLevelsHeading = queryByText(AT_HIGHER_LEVELS_HEADING_TEXT);

  expect(materialsHeading).not.toBeInTheDocument();
  expect(atHigherLevelsHeading).not.toBeInTheDocument();
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

  getByText(MATERIALS_HEADING_TEXT);
  getByText(TEST_SPELL_MATERIALS);
});

it('should render at higher levels headings parameter', () => {
  const { getByText } = render(
    <SpellCardExpandedContent
      description={TEST_SPELL_DESCRIPTION}
      atHigherLevels={TEST_SPELL_AT_HIGHER_LEVELS}
      usableInClasses={TEST_SPELL_USABLE_IN_CLASSES}
    />
  );

  getByText(AT_HIGHER_LEVELS_HEADING_TEXT);
  getByText(TEST_SPELL_AT_HIGHER_LEVELS);
});

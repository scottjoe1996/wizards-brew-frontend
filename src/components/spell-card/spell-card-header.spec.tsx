import React from 'react';
import { render } from '@testing-library/react';
import SpellCardHeader from './spell-card-header';
import { Component } from '../../types/spell';

const TEST_SPELL_NAME = 'test spell name';
const TEST_SPELL_LEVEL = 'cantrip';
const TEST_SPELL_COMPONENTS: Component[] = ['V', 'S', 'M'];
const TEST_SPELL_SCHOOL = 'Illusion';
const TEST_IS_RITUAL = true;
const TEST_IS_CONCENTRATION = true;

it('should render with expected parameters', () => {
  const { getByText } = render(
    <SpellCardHeader
      name={TEST_SPELL_NAME}
      level={TEST_SPELL_LEVEL}
      components={TEST_SPELL_COMPONENTS}
      school={TEST_SPELL_SCHOOL}
      isRitual={TEST_IS_RITUAL}
      isConcentration={TEST_IS_CONCENTRATION}
    />
  );
  getByText(TEST_SPELL_NAME);
  getByText(`${TEST_SPELL_LEVEL} ${TEST_SPELL_SCHOOL}`);
  getByText('V, S, M');
  getByText('Ritual');
  getByText('Concentration');
});

it('should render spell components with expected format', () => {
  const { getByText } = render(
    <SpellCardHeader
      name={TEST_SPELL_NAME}
      level={TEST_SPELL_LEVEL}
      components={['V']}
      school={TEST_SPELL_SCHOOL}
      isRitual={TEST_IS_RITUAL}
      isConcentration={TEST_IS_CONCENTRATION}
    />
  );
  getByText('V');
});

it('should render without ritual', () => {
  const { queryByText } = render(
    <SpellCardHeader
      name={TEST_SPELL_NAME}
      level={TEST_SPELL_LEVEL}
      components={TEST_SPELL_COMPONENTS}
      school={TEST_SPELL_SCHOOL}
      isRitual={false}
      isConcentration={TEST_IS_CONCENTRATION}
    />
  );

  const ritualTextElement = queryByText('Ritual');

  expect(ritualTextElement).toBeNull();
});

it('should render without concentration', () => {
  const { queryByText } = render(
    <SpellCardHeader
      name={TEST_SPELL_NAME}
      level={TEST_SPELL_LEVEL}
      components={TEST_SPELL_COMPONENTS}
      school={TEST_SPELL_SCHOOL}
      isRitual={TEST_IS_RITUAL}
      isConcentration={false}
    />
  );

  const concentrationTextElement = queryByText('Concentration');

  expect(concentrationTextElement).toBeNull();
});

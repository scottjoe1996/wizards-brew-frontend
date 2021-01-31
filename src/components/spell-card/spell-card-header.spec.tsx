import React from 'react';
import { render } from '@testing-library/react';
import SpellCardHeader from './spell-card-header';
import { Component } from '../../types/spell';

const TEST_SPELL_NAME = 'test spell name';
const TEST_SPELL_LEVEL = 'cantrip';
const TEST_SPELL_COMPONENTS: Component[] = ['V', 'S', 'M'];
const TEST_SPELL_SCHOOL = 'Illusion';

it('should render with expected name, level, components and school', () => {
  const { getByText } = render(
    <SpellCardHeader name={TEST_SPELL_NAME} level={TEST_SPELL_LEVEL} components={TEST_SPELL_COMPONENTS} school={TEST_SPELL_SCHOOL} />
  );
  getByText(TEST_SPELL_NAME);
  getByText(`${TEST_SPELL_LEVEL} ${TEST_SPELL_SCHOOL}`);
  getByText('V, S, M');
});

it('should render components with expected format', () => {
  const { getByText } = render(<SpellCardHeader name={TEST_SPELL_NAME} level={TEST_SPELL_LEVEL} components={['V']} school={TEST_SPELL_SCHOOL} />);
  getByText('V');
});

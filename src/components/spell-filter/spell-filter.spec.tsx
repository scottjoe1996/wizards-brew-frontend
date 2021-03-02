import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SpellFilter from './spell-filter';

const TEST_SPELL_NAME_FILTER = '';
const MOCK_FILTER_SPELLS = jest.fn();

it('should render with expected label', () => {
  const { getByLabelText } = render(<SpellFilter spellnameFilter={TEST_SPELL_NAME_FILTER} filterSpells={MOCK_FILTER_SPELLS} />);

  getByLabelText('Spellname');
});

it('should call filterSpells on input event', () => {
  const { container } = render(<SpellFilter spellnameFilter={TEST_SPELL_NAME_FILTER} filterSpells={MOCK_FILTER_SPELLS} />);
  const testInputValue = 'test';

  const input = container.querySelector('input');

  fireEvent.change(input!, { target: { value: testInputValue } });

  expect(MOCK_FILTER_SPELLS).toHaveBeenCalledWith('test');
});

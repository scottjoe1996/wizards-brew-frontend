import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SpellFilter from './spell-filter';

const TEST_SPELL_NAME_FILTER = '';
const MOCK_SET_SPELLNAME_FILTER = jest.fn();

it('should render with expected label', () => {
  const { getByLabelText } = render(<SpellFilter spellnameFilter={TEST_SPELL_NAME_FILTER} setSpellnameFilter={MOCK_SET_SPELLNAME_FILTER} />);

  getByLabelText('Spellname');
});

it('should call setSpellnameFilter on input event', () => {
  const { container } = render(<SpellFilter spellnameFilter={TEST_SPELL_NAME_FILTER} setSpellnameFilter={MOCK_SET_SPELLNAME_FILTER} />);
  const testInputValue = 'test';

  const input = container.querySelector('input');

  fireEvent.change(input!, { target: { value: testInputValue } });

  expect(MOCK_SET_SPELLNAME_FILTER).toHaveBeenCalledWith('test');
});

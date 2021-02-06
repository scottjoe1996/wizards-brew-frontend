import React from 'react';
import { render } from '@testing-library/react';
import SpellCardSubHeader from './spell-card-sub-header';

const TEST_SPELL_CASTING_TIME = '1 action';
const TEST_SPELL_RANGE = 'Self';
const TEST_SPELL_DURATION = '1 hour';

it('should render with expected casting time, range, and duration', () => {
  const { getByText } = render(<SpellCardSubHeader castingTime={TEST_SPELL_CASTING_TIME} range={TEST_SPELL_RANGE} duration={TEST_SPELL_DURATION} />);
  getByText(TEST_SPELL_CASTING_TIME);
  getByText(TEST_SPELL_RANGE);
  getByText(TEST_SPELL_DURATION);
});

import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';

it('should render with expected title', () => {
  const { getByText } = render(<Header />);
  getByText('Wizards Brew');
});

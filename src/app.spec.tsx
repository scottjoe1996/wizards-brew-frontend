import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

it('should render', () => {
  const { getByText } = render(<App />);
  getByText('Wizards Brew');
});

import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

it('should render', () => {
  const { getByText } = render(<App />);
  getByText('Test Page');
});

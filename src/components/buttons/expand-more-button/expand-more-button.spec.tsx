import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ExpandMoreButton from './expand-more-button';

it('should render with rotate class if isDown is true', () => {
  const { container } = render(<ExpandMoreButton isDown />);
  const expandMoreButton = container.querySelector('button');

  expect(expandMoreButton?.className).toContain('makeStyles-rotate-2');
});

it('should not render with rotate class if isDown is false', () => {
  const { container } = render(<ExpandMoreButton />);
  const expandMoreButton = container.querySelector('button');

  expect(expandMoreButton?.className).not.toContain('makeStyles-rotate-2');
});

it('should not call clickMethod on click', () => {
  const mockClickMethod = jest.fn();
  const { container } = render(<ExpandMoreButton handleClick={mockClickMethod} />);
  const expandMoreButton = container.querySelector('button');

  fireEvent.click(expandMoreButton!);

  expect(mockClickMethod).toHaveBeenCalledTimes(1);
});

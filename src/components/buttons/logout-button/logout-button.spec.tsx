import { fireEvent, render } from '@testing-library/react';

import LogoutButton from './logout-button';

const BUTTON_TEXT = 'LOGOUT';

const mockClickMethod = jest.fn();

it('should render logout button', () => {
  const { getByText } = render(<LogoutButton />);

  getByText(BUTTON_TEXT);
});

it('should fire event when button clicked', () => {
  const { getByText } = render(<LogoutButton onClick={mockClickMethod} />);

  const button = getByText(BUTTON_TEXT);
  fireEvent.click(button!);

  expect(mockClickMethod).toHaveBeenCalledTimes(1);
});

it('should have the invisible class when isInvisible', () => {
  const { container } = render(<LogoutButton onClick={mockClickMethod} isInvisible />);

  expect(container.firstElementChild?.classList.toString()).toContain('invisibleStyle');
});

import { fireEvent, render } from '@testing-library/react';

import GutterButton from './gutter-button';

const BUTTON_TEXT = 'TestButton';

const mockClickMethod = jest.fn();

it('should render active button with given text', () => {
  const { getByText } = render(<GutterButton>{BUTTON_TEXT}</GutterButton>);

  const button = getByText(BUTTON_TEXT);
  expect(button?.getAttribute('disabled')).toBeNull();
});

it('should render disabled button with given text', () => {
  const { container } = render(<GutterButton isDisabled>{BUTTON_TEXT}</GutterButton>);

  const button = container.querySelector('button');
  expect(button?.getAttribute('disabled')).not.toBeNull();
});

it('should not fire event when button is disabled', () => {
  const { getByText } = render(
    <GutterButton isDisabled onClick={mockClickMethod}>
      {BUTTON_TEXT}
    </GutterButton>
  );

  const button = getByText(BUTTON_TEXT);
  fireEvent.click(button!);

  expect(mockClickMethod).toHaveBeenCalledTimes(0);
});

it('should fire event when button is active', () => {
  const { getByText } = render(
    <GutterButton isDisabled onClick={mockClickMethod}>
      {BUTTON_TEXT}
    </GutterButton>
  );

  const button = getByText(BUTTON_TEXT);
  fireEvent.click(button!);

  expect(mockClickMethod).toHaveBeenCalledTimes(0);
});

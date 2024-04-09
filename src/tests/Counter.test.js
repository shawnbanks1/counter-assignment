import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter message', () => {
  const { getByText } = render(<Counter />);
  const counterMessage = getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const { getByTestId } = render(<Counter />);
  const countValue = getByTestId('count').textContent;
  expect(countValue).toBe('0');
});

test('clicking + increments the count', () => {
  const { getByText, getByTestId } = render(<Counter />);
  const incrementButton = getByText('+');
  const countValue = getByTestId('count');

  fireEvent.click(incrementButton);
  expect(countValue.textContent).toBe('1');

  fireEvent.click(incrementButton);
  expect(countValue.textContent).toBe('2');
});

test('clicking - decrements the count', () => {
  const { getByText, getByTestId } = render(<Counter />);
  const decrementButton = getByText('-');
  const countValue = getByTestId('count');

  fireEvent.click(decrementButton);
  expect(countValue.textContent).toBe('-1');

  fireEvent.click(decrementButton);
  expect(countValue.textContent).toBe('-2');
});

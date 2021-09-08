import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});

describe('render', () => {
  it('renders App component', () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent('Hello React');
  });
});

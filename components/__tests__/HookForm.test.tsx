import React from 'react';
import { render } from '@testing-library/react';
import HookForm from '../HookForm';

describe('HookForm', () => {
  test('renders App component', () => {
    render(<HookForm />);
  });
});

describe('render', () => {
  it('renders App component', () => {
    const { container } = render(<HookForm />);
    expect(container).toHaveTextContent('Nickname');
  });
});

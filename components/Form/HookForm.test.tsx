import React from 'react';
import { render } from '@testing-library/react';
import HookForm from './HookForm';

describe('HookForm', () => {
  test('renders App component', () => {
    render(<HookForm />);
  });
});

// describe('render', () => {
//   it('renders App component', () => {
//     const { container } = render(<HookForm name="호박너구리" />);
//     expect(container).toHaveTextContent('호박너구리');
//   });
// });

test('matches snapshot', () => {
  const { container } = render(<HookForm name="호박너구리" />);
  expect(container).toMatchSnapshot();
});

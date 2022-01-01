import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../Home';

test('App render test', () => {
  render(<App />);
  const app = screen.getByTestId("app");
  expect(app).toBeInTheDocument();
});
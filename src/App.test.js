import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero name', () => {
  render(<App />);
  const name = screen.getAllByText(/Hong Teng Lee/i)[0];
  expect(name).toBeInTheDocument();
});

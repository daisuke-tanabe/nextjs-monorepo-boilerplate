import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Example from './example';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Example />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});

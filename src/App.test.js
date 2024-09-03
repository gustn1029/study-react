import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render the component', () => {
    render(<App />);
    const text = screen.getByText(/강의/i);
    expect(text).toBeInTheDocument();
  });
});
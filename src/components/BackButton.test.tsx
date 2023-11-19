import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // Import the library
import BackButton from './BackButton';

describe('BackButton', () => {
  test('renders with default props', () => {
    render(
      <MemoryRouter>
        <BackButton />  
      </MemoryRouter>
    );
    
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  test('renders with custom destination prop', () => {
    render(
      <MemoryRouter>
        <BackButton destination="/custom" />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('link')).toHaveAttribute('href', '/custom');
  });
});

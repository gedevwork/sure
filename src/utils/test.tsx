import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export const renderWithProviders = (
  ui: ReactElement,
  opts: Partial<Parameters<typeof render>[1]> = {}
) => render(<BrowserRouter>{ui}</BrowserRouter>, opts);

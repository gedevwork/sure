import { fireEvent } from '@testing-library/react';

import InstructionsBar from './InstructionsBar';
import { renderWithProviders } from '../../utils/test';

describe('InstructionsBar', () => {
  const defaultProps = {
    onClick: jest.fn(),
  };

  it('should render a "View challenges" button', () => {
    const { getByText } = renderWithProviders(<InstructionsBar {...defaultProps} />);
    expect(getByText('View challenges')).toBeInTheDocument();
  });

  // TODO: Challenge 3
  it('should call the onClick prop when the button is clicked', () => {
    const { getByText } = renderWithProviders(<InstructionsBar {...defaultProps} />);
    fireEvent.click(getByText('View challenges'));

    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});

import Modal from './Modal';
import { render } from '@testing-library/react';

describe('Modal', () => {
  const defaultProps = {
    isOpen: true,
    handleClose: jest.fn(),
    children: <div>MODAL CONTENT</div>,
    title: 'Title',
  };
  it('should render modal title', () => {
    const { getByTestId } = render(<Modal {...defaultProps} />);

    expect(getByTestId('modal_title').textContent).toBe('Title');
  });

  it('should render modal content', () => {
    const { getByTestId } = render(<Modal {...defaultProps} />);

    expect(getByTestId('modal_content').textContent).toBe('MODAL CONTENT');
  });
});

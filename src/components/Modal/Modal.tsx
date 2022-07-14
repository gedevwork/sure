import { Dialog, DialogContent, DialogTitle } from '@mui/material';

type TModal = {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactElement;
  'data-testid'?: string;
};

function Modal({
  isOpen,
  handleClose,
  title,
  children,
  'data-testid': dataTestId = 'modal',
}: TModal) {
  return (
    <Dialog open={isOpen} onClose={handleClose} data-testid={dataTestId}>
      <DialogTitle
        sx={{
          textAlign: 'center',
          borderBottom: '1px solid grey',
          marginBottom: '24px',
        }}
        data-testid={`${dataTestId}_title`}
      >
        {title}
      </DialogTitle>
      <DialogContent
        sx={{ minWidth: { xs: 'none', sm: 480 } }}
        data-testid={`${dataTestId}_content`}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;

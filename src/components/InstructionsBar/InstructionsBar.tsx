import { Button, Box } from '@mui/material';

type TInstructionsBar = {
  onClick: () => void;
};

function InstructionsBar({ onClick }: TInstructionsBar) {
  return (
    <Box
      sx={{
        paddingTop: '16px',
        textAlign: 'center',
      }}
    >
      <Button
        onClick={onClick}
        variant="contained"
        color="primary"
        size="large"
      >
        View challenges
      </Button>
    </Box>
  );
}

export default InstructionsBar;

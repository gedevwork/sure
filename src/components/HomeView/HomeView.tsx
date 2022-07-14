import { Typography, Box } from '@mui/material';

function HomeView() {
  return (
    <>
      <Typography variant="h2" textAlign="center" marginBottom="24px">
        Sure Technical Challenge!
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <img
          src="https://media.giphy.com/media/5L57f5fI3f2716NaJ3/giphy.gif"
          alt="welcome-gif"
          style={{ maxWidth: '100%' }}
        />
      </Box>
    </>
  );
}

export default HomeView;

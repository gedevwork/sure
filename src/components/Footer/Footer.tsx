import {
  Typography,
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import footerConfig from '../../constants/footerConfig';

const listItemButtonStyle = {
  padding: 0,
  textAlign: { xs: 'center', sm: 'unset' },
} as const;

function Footer() {
  return (
    <Box
      component="footer"
      textAlign={{ xs: 'center', sm: 'unset' }}
      sx={{
        background: 'rgba(170,186,205,.2)',
        padding: '16px',
      }}
    >
      <Grid container justifyContent="space-around">
        <Grid item xs={12} sm={2}>
          <Box sx={{ display: 'block' }}>
            <img src="/surefooterlogo.svg" alt="sure logo" />
          </Box>
        </Grid>
        {footerConfig.map(({ title, items }) => (
          <Grid item xs={12} sm={2} key={title}>
            <Typography variant="h6" marginTop={{ xs: '32px', sm: '0' }}>
              {title}
            </Typography>
            <List>
              {items.map(({ href, label }) => (
                <ListItemButton
                  key={href}
                  sx={listItemButtonStyle}
                  component="a"
                  target="_blank"
                  href={href}
                >
                  <ListItemText>{label}</ListItemText>
                </ListItemButton>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body2" marginTop="16px">
        ©2021 Sure, Inc. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;

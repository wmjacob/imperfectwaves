import { Box } from '@mui/material';



export const Banner = () => (
  <>
    <Box
      sx={{
        display: { xs: 'block', sm: 'none' },
      }}
    >
      <img style={{ height: 'auto', width: '100vw' }} src='/small-banner.png'></img>
    </Box>
    <Box
      sx={{
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <img style={{ height: 'auto', width: '100vw' }} src='/large-banner.jpg'></img>
    </Box>
  </>
);
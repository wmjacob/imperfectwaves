import { Box, Fab } from '@mui/material';



export const AlbumSale = () => (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#000"}}
        pb={10}
        px={6}
    >
      <img style={{ maxHeight: '800px', width: 'auto', maxWidth: '100vw' }} src='/lp-art.webp'></img>
      <Fab variant="extended" color="primary" component="a" href="https://imperfectwaves.bandcamp.com/album/imperfect-waves-tour-2024-remix-ep" target="_blank">Buy Tour Remix LP Here</Fab>
    </Box>
);
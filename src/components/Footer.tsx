import { Box, Link, Typography } from '@mui/material';

export const Footer = () => (
  <Box sx={{ p: 3, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
    <Typography variant="caption">Contact us:</Typography>
    <Box>
        <Link href="https://linktr.ee/imperfectwaves">Additional Info</Link>
      | <Link href="https://hecataea.org/contact.html">Booking Agent</Link>
      | <Link href="https://utmmusic.net/">Press Contact</Link>
      | <Link href="https://plasmataband.bandcamp.com/">Plasmata</Link>
      | <Link href="https://2forksmusic.com/">2Forks</Link>
      | <Link href="https://melter.bandcamp.com/album/blacklist">Melter</Link>
    </Box>
  </Box>
);
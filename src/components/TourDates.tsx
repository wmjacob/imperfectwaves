import { List, ListItem, Typography, Box, Button, Paper } from '@mui/material';

const tourDates = [
  { date: new Date(2024, 8, 20).toDateString(), venue: 'Nights in Necropolis @ Propaganda', location: 'Lake Worth Beach, FL', ticketLink: 'https://www.facebook.com/events/1379553266005061' },
  { date: new Date(2024, 8, 21).toDateString(), venue: 'New World Tampa', location: 'Tampa, FL', ticketLink: 'https://www.facebook.com/events/844471377139864/' },
  { date: new Date(2024, 8, 24).toDateString(), venue: 'Poetry Lounge', location: 'Pittsburg, PA', ticketLink: 'https://www.facebook.com/events/718000933752979/' },
  { date: new Date(2024, 8, 26).toDateString(), venue: 'Sanctorium @ The Fire', location: 'Philadelphia, PA', ticketLink: 'https://www.facebook.com/events/2059928964423121/' },
  { date: new Date(2024, 8, 27).toDateString(), venue: 'Fete Music Hall', location: 'Providence, RI', ticketLink: 'https://www.facebook.com/events/772072594730283' },
  { date: new Date(2024, 8, 28).toDateString(), venue: 'JB Lovedrafts Micropub', location: 'Harrisburg, PA', ticketLink: 'https://www.facebook.com/events/1471339517106205/' },
  { date: new Date(2024, 8, 29).toDateString(), venue: 'Fallout RVA', location: 'Richmond, VA', ticketLink: 'https://www.facebook.com/events/495780896203271/' },
  // Add more dates here
];

export const TourDates = () => (
  <Box sx={{
    my: 4,
    display: 'flex',
    justifyContent: 'center',
  }} id="tour-dates">
    <Box sx={{
      width: '100%',
      maxWidth: '900px',
    }}>
      <Typography sx={{ pl: 2 }} variant="h4" gutterBottom>
        Tour Dates
      </Typography>
      <List sx={{
        backgroundColor: '#3F4045',
        p: 0,
      }}>
        {tourDates.map((date, index) => (
          <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #121212' }}>
            <Box sx={{
              display: 'flex',
            }}>
              <Paper
                sx={{
                  px: 2,
                  py: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#5D737E',
                  color: 'white',
                }}
              >
                <Typography variant="body2" >{date.date.substring(4,8)}</Typography>
                <Typography variant="body2" >{date.date.substring(8,10)}</Typography>
                <Typography variant="body2" >{date.date.substring(11,15 )}</Typography>
              </Paper>
              <Box sx={{
                ml: 2,
              }}>
                <Typography variant="h6">{date.venue}</Typography>
                <Typography variant="body2">{date.location}</Typography>
              </Box>
            </Box>
            <Button sx={{
                backgroundColor: '#5D737E',
            }} variant="contained" target="blank" href={date.ticketLink}>Tickets</Button>
          </ListItem>
        ))}
      </List>
    </Box>
    </Box>
);
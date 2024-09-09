import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff', // Ensures text color is white across all buttons
        },
        contained: {
          backgroundColor: '#333', // Dark gray for contained buttons
          '&:hover': {
            backgroundColor: '#1a1a1a', // Even darker on hover
          },
        },
        outlined: {
          borderColor: '#616161', // Gray border for outlined buttons
          color: '#fff', // Text color
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)', // Slight white highlight on hover
          },
        },
      }
    },
  },
});

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleScrollToDates = () => {
    const element = document.getElementById('tour-dates');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const pages: string[] = [
    'foo'
  ];

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <AppBar position="static" sx={{ backgroundColor: 'rgb(18,18,18)'}}>
      <Box
        id="foo"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '64px',
          width: '100%',
          filter: 'blur(2px)',
          backgroundImage: 'url(logo.png)',
          backgroundSize: 'contain',
        }}
      />
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Imperfect Waves
        </Typography>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
              <MenuItem  onClick={() => {
                handleCloseNavMenu();
                handleScrollToDates();
              }}>
                <Typography textAlign="center">See tour dates</Typography>
              </MenuItem>
              <MenuItem
                component="a"
                href="https://imperfectwaves.bandcamp.com/album/imperfect-waves-tour-2024-remix-ep"
              >
                <Typography textAlign="center">Buy tour remix LP</Typography>
              </MenuItem>
              <MenuItem
                component="a"
                href="/imperfect-waves-tour.pdf"
              >
                <Typography textAlign="center">Tour Info</Typography>
              </MenuItem>
              <MenuItem
                component="a"
                href="https://linktr.ee/imperfectwaves"
              >
                <Typography textAlign="center">Link Tree</Typography>
              </MenuItem>

          </Menu>

        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button sx={{ mr: 2 }} variant="outlined" component="a" href="https://linktr.ee/imperfectwaves" target="_blank">Link Tree</Button>
          <Button sx={{ mr: 2 }} variant="outlined" component="a" href="/imperfect-waves-tour.pdf" target="_blank">Tour Info</Button>
          <Button sx={{ mr: 2 }} variant="outlined" component="a" href="https://imperfectwaves.bandcamp.com/album/imperfect-waves-tour-2024-remix-ep" target="_blank">Buy tour remix LP</Button>
          <Button variant="outlined" onClick={handleScrollToDates}>See tour dates</Button>
        </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
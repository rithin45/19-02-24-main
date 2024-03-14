import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, InputBase, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { LocalGroceryStore } from '@mui/icons-material';
import "./Style.css";

const Navsidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };


  return (
    <div>
      <AppBar position="static"  sx={{ backgroundColor:"#ED5945", boxShadow: 'none' }} >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'Cursive',
              color: '#FFFFFF',
              fontSize: '26px',
            }}
          >
            <b>PLOTKART</b>
          </Typography>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            style={{ paddingLeft: '30px' }}
          />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItem as={Link} to="/pview">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Plot" />
          </ListItem>
          <Divider />
          <ListItem as={Link} to="/bview">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Buildings" />
          </ListItem>
          <Divider />
          <ListItem as={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem as={Link} to="/abt">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <Divider />
          <ListItem  as={Link} to="/cont">
            <ListItemIcon>
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navsidebar;

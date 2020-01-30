import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/index.js';
import SideBarNav from './SideBarNav.js';

function MenuAppBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [state, setState] = React.useState({
      drawerOpen: false
    });
  
    const handleMenu = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const toggleDrawer = (drawerUpdate) => (event) => {

      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState({ ...state, drawerOpen: drawerUpdate })
    };

    const handleLogout = (event) => {
      event.preventDefault();
      props.logout();
      handleClose();
    }
  
    return (
      <div >
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer open={state.drawerOpen} onClose={toggleDrawer(false)}>
              <SideBarNav toggleDrawer={toggleDrawer()}/>
            </Drawer>
            <div style={{ width: '100%' }}>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6" >
                Blogaloo
              </Typography>
            </Box>
            </div>
            {(props.isLoggedIn() && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
              )) || 
              <Button 
              variant="contained" 
              component={Link} 
              to={'/Login'} 
              color="secondary">
                Login
              </Button>}
          </Toolbar>
        </AppBar>
      </div>
    );
  }

const mapStateToProps = (state)=>{
    return state;
  };
  
export default connect (mapStateToProps, actionCreators)(MenuAppBar);

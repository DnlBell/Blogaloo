import React , { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/index.js';
import { Auth } from 'aws-amplify';

const Styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 18,
  },
  title: {
    flexGrow: 1,
  },
};

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl : null,
            setAnchorEl : null,
            open  : Boolean(this.anchorEl)
        }
    }

    handleMenu = event => {
        this.state.setAnchorEl(event.currentTarget);
    };

    handleClose = () => {
        this.setState({
            setAnchorEl : null,
        });
    };

    getAuthMenu() {

        if(this.props.user.isLoggedIn) {
            return (
                <div>
                    <IconButton
                        aria-label="account of current user"                            
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={this.state.handleMenu}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={this.state.open}
                        onClose={this.state.handleClose}
                    >
                    <MenuItem onClick={this.state.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.state.handleClose}>My account</MenuItem>
                    </Menu>
                </div>
            )
    } else {
                return (
                    <div>
                        <Button
                            color="secondary"
                            variant="contained"
                            >
                            Sign in
                        </Button>
                    </div>
            )
        }
    }

    render(){
        return (
            <div className={Styles.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" className={Styles.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={Styles.title}>
                        Blogaloo
                    </Typography>
                        {this.getAuthMenu()}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return state;
  };
  
export default connect (mapStateToProps, actionCreators)(Header);

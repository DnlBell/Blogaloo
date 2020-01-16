import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/index.js';

function SideBarNav(props) {
    let history = useHistory();

    const handleReadClick = () => (event) => {
        event.preventDefault();
        history.push("/Read");
        props.toggleDrawer(false);
    }

    const handlePostClick = () => (event) => {
        event.preventDefault();
        history.push("/Post");
        props.toggleDrawer(false);
    }

    const handleHomeClick = () => (event) => {
        event.preventDefault();
        history.push("/");
        props.toggleDrawer(false);
    }

    return(
        <Box width={200}>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
            >
                <Button fullWidth={true} onClick={handleHomeClick()}>
                    <h3><HomeIcon/> Home</h3>
                </Button>
                <Button fullWidth={true} onClick={handleReadClick()}>
                    <h3><MenuBookIcon/> Read</h3>
                </Button>
                {(props.isLoggedIn() && (
                <Button fullWidth={true} onClick={handlePostClick()}>
                    <h3><PostAddIcon/> Post</h3>
                </Button>
                ))}
            </Grid>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return state;
};

export default connect (mapStateToProps, actionCreators)(SideBarNav);
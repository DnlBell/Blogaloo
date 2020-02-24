import React from 'react';
import data from '../../data.js'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import DefaultImage from '../../postDefault.svg';
import { Link } from "react-router-dom";

const useStyles = makeStyles( theme => ({
    card: {
        width: 300,
    },
    media: {
        height: 140,
    },
    gridList: {
        width: "95%",
        maxWidth: 800

    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    defaultImg: {
        width:200,
        height:0
    }
  }));

function PostList(props) {

    const classes = useStyles();

    const posts = data;

    if(posts!== null){
        return(
            <div className={classes.root}>
                <GridList cellHeight={220} className={classes.gridList} cols={3}>
                  {
                      posts.map((item) => 
                      <GridListTile key={item.id} cols={3}>
                              <CardActionArea
                                  component={Link}
                                  to={`read/${item.id}`}
                              >
                              <CardMedia
                              className={classes.media}
                              image={DefaultImage}
                              />
                              <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                  {item.title}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  By: {item.owner}
                              </Typography>
                              </CardContent>
                              </CardActionArea>
                      </GridListTile>
                      )
                  }
              </GridList>
            </div>
          )
    }
    else{
        return(
            <div>loading</div>
        )
    }
    
}

export default PostList
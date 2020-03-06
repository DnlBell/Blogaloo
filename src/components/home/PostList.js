import React from 'react';
import { Link } from "react-router-dom";
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

function PostList(props) {

    const posts = props.posts;

    if(posts!== null){

        return(
            <div style={styles.listBox}>   
            {posts.map((item) => 
                <ButtonBase
                    component={Link}
                    to={`read/${item.id}`}
                >
                    <Paper style={styles.postCard}>
                        <Box style={styles.postCard}>
                        <Box bgcolor="secondary.light" style={styles.titleBox}>
                            <b>{item.title}</b>
                        </Box>
                        <div style={styles.detailsBox}>
                            <div style={styles.date}>
                            {
                                getDateString(parseInt(item.date))
                            }
                            </div>
                            <Avatar style={styles.avatar}>{item.owner.substring(0,3)}</Avatar>
                        </div>
                        </Box>
                    </Paper>
                </ButtonBase>
            )
            }
            </div>
        )
    }
    else {
        return(
            <div>loading</div>
        )
    }
}

function getDateString(dateInMs) {
    const date = new Date(dateInMs);
    return date.toString();
}

const styles = {
    listBox: {
        display: "flex",
        width:"95%",
        maxWidth: 800,
        flexDirection:"column"
    },
    detailsBox: {
        display: "flex",
        flexDirection: "row",
        width:"98%",
        justifyContent: "flex-end",
        alignContent:"stretch",
        marginRight:4
    },
    titleBox: {
       wordWrap: 'break-word',
       padding:8,
       fontSize: 30,
       borderRadius: 5
    },
    postCard: {
        width:"100%",
        marginBottom:8
    },
    date: {
        marginRight:8,
        padding:4
    },
    avatar: {
        marginTop:4
    }
}

export default PostList
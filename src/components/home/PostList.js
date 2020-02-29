import React from 'react';
import { Link } from "react-router-dom";
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

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
                        <div style={styles.postCard}>
                        <div style={styles.titleBox}><b>{item.title}</b></div>
                        <div style={styles.detailsBox}>
                            <div style={styles.date}>{item.date}</div>
                            <Avatar>{item.owner.substring(0,3)}</Avatar>
                        </div>
                        </div>
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
       width:"100%",
       wordWrap: 'break-word',
       padding:8,
       fontSize: 35 
    },
    postCard: {
        width:"100%",
        marginBottom:8
    },
    date: {
        marginRight:8
    }
}

export default PostList
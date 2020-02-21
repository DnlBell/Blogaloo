import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../graphql/mutations';


class Post extends Component {

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event){

        event.preventDefault();
        const postDetails = {
            title: "Test Post",
            content: "This is only a test.",
            postBlogId: "e3920c55-add5-446e-9c52-13bd68ec09c8"
        }

        const newTodo = await API.graphql(graphqlOperation(mutations.createPost, {input: postDetails}));
        console.log(newTodo);
    }

    async createBlog(event){

        event.preventDefault();
        const blogDetails = {
            name: "Test Blog",
        }

        const newTodo = await API.graphql(graphqlOperation(mutations.createBlog, {input: blogDetails}));
        console.log(newTodo);
    }

    render(){

        
        return(
            <div style={styles.PostBox}>
                <h1>POST PAGE</h1>
                <Button 
                    color="primary"
                    variant="contained"
                    onClick={this.handleSubmit}
                >
                TEST POST
                </Button>
                
            </div>
        )
    }

}

const styles = {
    PostBox: {
        marginTop:60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
}

export default Post;
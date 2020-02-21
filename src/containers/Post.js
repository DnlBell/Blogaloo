import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../graphql/mutations';
import { Redirect } from 'react-router-dom';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


class Post extends Component {

    constructor(props){
        super(props)

        this.state = {
            title: '',
            content: '',
            postSubmitted: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMdeChange = this.handleMdeChange.bind(this);
    }

    async handleSubmit(event){

        event.preventDefault();
        this.setState({postSubmitted : true});
        const postDetails = {
            title: this.state.title,
            content: this.state.content,
        }
        const newPost = await API.graphql(graphqlOperation(mutations.createPost, {input: postDetails}));
    }

    handleChange = input => e => {
        this.setState({[input] : e.target.value});
    }

    handleMdeChange = value => {
        this.setState({ content: value });
      };

    render(){

        const { postSubmitted } = this.state

        if(postSubmitted){
            return(
                <Redirect to='/'/>
            )
        } else{
            return(
                <div style={styles.PostBox}>
                    <h1>New Post</h1>
                    <div style={styles.InputBox}>
                    <TextField
                        label="Title"
                        fullWidth
                        onChange={this.handleChange('title')}
                    />
                    <br/>
                    <br/>
                    <SimpleMDE onChange={this.handleMdeChange}/>
                    <br/>
                    <div style={styles.ButtonBar}>
                    <Button 
                        color="primary"
                        variant="contained"
                        onClick={this.handleSubmit}
                    >
                        Post
                    </Button>
                    </div>
                    </div>
                </div>
            )
        }
    }

}

const styles = {
    PostBox: {
        marginTop:60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    InputBox: {
        display: 'flex',
        flexDirection: 'column',
        width:"95%",
        maxWidth:800
    },
    ButtonBar: {
        display: 'flex',
        alignSelf: 'flex-end',
    }
    
}

export default Post;
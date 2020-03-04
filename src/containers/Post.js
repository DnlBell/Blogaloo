import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../graphql/mutations';
import { Redirect } from 'react-router-dom';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ErrorMessage from '../components/layout/ErrorMessage';
import Paper from '@material-ui/core/Paper';


class Post extends Component {

    constructor(props){
        super(props)

        this.state = {
            title: '',
            content: '',
            error: '',
            postSubmitted: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMdeChange = this.handleMdeChange.bind(this);
        this.validate = this.validate.bind(this)
    }

    async handleSubmit(event){

        event.preventDefault();

        if(this.validate()){
            this.setState({postSubmitted : true});
            const time = new Date().getTime();
            const date = new Date(time);
            const postDetails = {
                title: this.state.title,
                content: this.state.content,
                date: time
            }
            const newPost = await API.graphql(graphqlOperation(mutations.createPost, {input: postDetails}));
        }
    }

    handleChange = input => e => {
        this.setState({[input] : e.target.value});
    }

    handleMdeChange = value => {
        this.setState({ content: value });
    };

    validate(){
        const {title, content} = this.state

        if (title.length < 5 || title.length > 60){
            this.setState({error: 'Titles must be between 5 and 60 characters.'});
            return false;
        } else if (content.length < 750 || content.length > 10000){
            this.setState({error: 'Content must be between 750 and 10000 characters.'});
            return false;
        }

        return true;
    }

    render(){

        const { postSubmitted, error } = this.state

        if(postSubmitted){
            return(
                <Redirect to='/'/>
            )
        } else{
            return(
                <div style={styles.PostBox}>
                    <h1>New Post</h1>
                    <Paper style={styles.InputBox}>
                        <TextField
                            label="Title"
                            fullWidth
                            onChange={this.handleChange('title')}
                        />
                        <br/>
                        <br/>
                        <SimpleMDE onChange={this.handleMdeChange}/>
                    <br/>
                    <ErrorMessage message={error} />
                    <div style={styles.ButtonBar}>
                        <Button 
                            color="primary"
                            variant="contained"
                            onClick={this.handleSubmit}
                        >
                            Post
                        </Button>
                    </div>
                    </Paper>
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
        maxWidth:800,
        padding: 12
    },
    ButtonBar: {
        display: 'flex',
        alignSelf: 'flex-end',
    }
    
}

export default Post;
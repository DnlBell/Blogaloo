import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from "react-router";
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';


class Read extends Component {

    constructor(props){
        super(props)
        this.state={
            title: null,
            owner: null,
            content: null
        }
        this.getPost = this.getPost.bind(this);
    }

    async getPost() {
        console.log('getting post');
        const post = await API.graphql(graphqlOperation(queries.getPost, {id: this.props.match.params.id}));
        console.log(JSON.stringify(post.data.getPost));
        this.setState({
            title: post.data.getPost.title,
            owner: post.data.getPost.owner,
            content: post.data.getPost.content
        })
    }

    componentDidMount(){
        this.getPost();
    }

    render(){

        const { post } = this.state;

        if(this.state.title === null){
            return (<div style={styles.readBox}>Loading</div>)
        } 
        return(
            <div style={styles.readBox}>
                <h1 style={styles.title}>{this.state.title}</h1>
                <h3>By: {this.state.owner}</h3>
                <div style={styles.content}>
                <ReactMarkdown source={this.state.content} />
                </div>
            </div>
        )
        }
}

const styles = {
    readBox: {
        marginTop:60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    content:{
        width: "95%",
        maxWidth:800
    },
    title:{
        width: "95%",
        textAlign: 'center'
    }
}

export default Read;
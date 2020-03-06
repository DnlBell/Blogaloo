import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import Paper from '@material-ui/core/Paper';

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

        if(this.state.title === null){
            return (<div style={styles.readBox}>Loading</div>)
        } 
        return(
            <div style={styles.readBox}>
                <Paper style={styles.content}>
                <h1 style={styles.title}>{this.state.title}</h1>
                <ReactMarkdown source={this.state.content} renderers={{image: Image, code:Code}} />
                <h3>By: {this.state.owner}</h3>
                </Paper>
            </div>
        )
    }
}

const styles = {
    readBox: {
        marginTop:80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        wordWrap: 'break-word',
    },
    content:{
        width: "90%",
        maxWidth:800,
        padding:12,
        margin:4
    },
    title:{
        width: "95%",
        textAlign: 'center',
        fontSize: 50,
        background: "primary"
    }
}

function Image(props) {
    return <img {...props} style={{maxWidth: '100%'}} />
}

function Code(props) {
    return ( 
    <div style={{width: '100%', overflow:'scroll', maxHeight:600}}>
    <pre>
        <code >
            {props.value}
        </code>
    </pre>
    </div>
    )
}


export default Read;
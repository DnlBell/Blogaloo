import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from "react-router";
import data from '../data';
import markdown from '../markdown.js';

function Read() {

    let { id } = useParams();
    const post = data[id-1];
    

    return(
        <div style={styles.readBox}>
            <h1 style={styles.title}>{post.title}</h1>
            <h3>By: {post.author}</h3>
            <div style={styles.content}>
            <ReactMarkdown source={markdown} />

            </div>
        </div>
    )
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
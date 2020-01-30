import React, { Component } from 'react'
import { useParams } from "react-router";
import data from '../data';

function Read() {

    let { id } = useParams();
    const post = data[id-1];
    

    return(
        <div style={styles.ReadBox}>
            <h1>{post.title}</h1>
            <h3>By: {post.author}</h3>
            <p>{post.content}</p>
        </div>
    )
}

const styles = {
    ReadBox: {
        marginTop:60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
}

export default Read;
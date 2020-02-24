import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';
import PostList from '../components/home/PostList';
import Amplify, { Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: null
        }

        this.listQuery = this.listQuery.bind(this);
    }

    async listQuery() {
        console.log('listing posts');
        const allPosts = await API.graphql(graphqlOperation(queries.listPosts2));
        this.setState({posts: allPosts.data.listPosts.items})
        console.log(JSON.stringify(allPosts.data.listPosts.items));
    };

    componentDidMount(){
        this.listQuery();
    }


    render(){

        const {posts} = this.state;

        if(this.props.user.isLoggedIn){
            return(
                <div style={styles.HomeBox}>
                    <div style={styles.title}>
                    <h1>Welcome {this.props.user.payload.username} !</h1>
                    <h2>Read posts or submit one of your own!</h2>
                    </div>
                    <PostList posts={posts}/>
                </div>
            );
        } else {
            return(
                <div style={styles.HomeBox}>
                    <div style={styles.title}>
                    <h1>Welcome!</h1>
                    <h2>Sign in, or register a new account!</h2>
                    </div>
                    <PostList/>
                </div>
            );
        }
    }
}

const styles = {
    HomeBox: {
        marginTop:60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    title:{
        width: "95%",
        textAlign: 'center'
    }
}

const mapStateToProps = (state)=>{
    return state;
};

export default connect (mapStateToProps, actionCreators)(Home);
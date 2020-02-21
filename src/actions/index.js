import { Auth } from "aws-amplify";

export function updateUser(user){
    return{
        type:"UPDATE_USER",
        user:{
            isLoggedIn: true,
            payload: user
        }
    }
}

export function isLoggedIn() {
    return(dispatch, getState) => {
        const state = getState();
        const isLoggedIn = state.user.isLoggedIn;
        return isLoggedIn;
    }
}

export function updateBlog(blog) {
    return{
        type:"UPDATE_BLOG",
        user:{
            isLoggedIn: true,
            payload: blog
        }
    }
}

export function logout(){

    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));

    return{
        type:"LOGOUT_USER",
        user:{
            isLoggedIn: false,
            payload:{}
        }
    }
}
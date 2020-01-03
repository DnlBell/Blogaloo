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
export function updateUser(user){
    return{
        type:"UPDATE_USER",
        user:{
            isLoggedIn: false,
            payload: user
        }
    }
}
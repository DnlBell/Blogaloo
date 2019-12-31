export function updateUser(user){
    return{
        type:"UPDATE_USER",
        user:{
            isLoggedIn: true,
            payload: user
        }
    }
}
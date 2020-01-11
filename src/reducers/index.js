let defaultState={
    user:{
        isLoggedIn: false,
        payload: {}
    }
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="UPDATE_USER"){
        return{
            ...state,
            user:action.user
        } 
    } else if (action.type==="LOGOUT_USER"){
        return{
            ...state,
            user:action.user
        }
    }
    else{
        return {
            ...state
        }
    }
}

export default mainReducer
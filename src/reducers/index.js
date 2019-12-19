let defaultState={
    user:{
        isLoggedIn: true,
        payload: {}
    }
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="UPDATE_USER"){
        return{
            ...state,
            user:action.user
        } 
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer
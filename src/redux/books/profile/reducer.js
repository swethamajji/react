


const initialState={
    username:"swetha",
    profileImg:"",
}


export const profileReducer=(state=initialState,action)=>{
switch (action.type) {
    case "USERNAME_CHANGE":
        return{...state,username:action.payload};
        case "PROFILE_CHANGE":
            return{...state,profileImg:action.payload};

    default:
        return state;
}    
}
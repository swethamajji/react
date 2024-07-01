



export const userNameAction=(username)=>{
    return{
        type:"USERNAME_CHANGE",
        payload:username,
    }
}
export const profileChange=()=>{
    return{
        type:"PROFILE_CHANGE",
    }
}
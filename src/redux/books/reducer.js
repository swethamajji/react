

const initialState={
    totalBooks:100,
    bookDetails:[
        {
            name:"Atomic habits",
            id:1,
            quantity:10,
        },
        {
            name:"Wings of fire",
            id:1,
            quantity:10,
        }
    ]
}


 export const bookReducer=(state=initialState,action)=>{

switch (action.type) {
    case "BORROW_BOOK":
        
         return{...state,totalBooks:state.totalBooks-action.payload};
  case "RETURN_BOOK":
         return {...state,totalBooks:state.totalBooks+action.payload};
    default:
        return state;
}
}
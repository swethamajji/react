import { combineReducers } from "redux";
import { profileReducer } from "./books/profile/reducer";
import { bookReducer } from "./books/reducer";
import { productReducer } from "./products/reducer";





export const combinedReducer=combineReducers(
    {
        profile:profileReducer,
        books:bookReducer,
        products:productReducer,
    }
)
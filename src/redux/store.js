import {applyMiddleware, legacy_createStore } from "redux";
import { bookReducer } from "./books/reducer";
import { combinedReducer } from "./combinedReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";


// export const reduxStore=legacy_createStore(bookReducer);
export const reduxStore=legacy_createStore(combinedReducer,composeWithDevTools(applyMiddleware(thunk)));
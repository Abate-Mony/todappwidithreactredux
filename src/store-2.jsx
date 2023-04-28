import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducer } from "./reducers/TodoReducers";
import thunk from "redux-thunk";


// this function helps to combine reducers into one reduce so the store can use it 
const allReducers = combineReducers({
    // combine reducers here 
    todo: todoReducer


})

const initialState = {}
const middleware = [thunk];
export const store = createStore(
    allReducers, initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
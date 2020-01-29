import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { productReducer } from "./reducers/products";
import { userReducer } from "./reducers/users";

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export { store }
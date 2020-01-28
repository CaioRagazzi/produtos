import { createStore, combineReducers } from "redux";
import { productReducer } from "./reducers/products";

const rootReducer = combineReducers({
    product: productReducer
})

const store = createStore(rootReducer)

export { store }
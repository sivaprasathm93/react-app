// you can only have one store in redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./cart";
import categoriesReducer from "./categories";
import thunk from "redux-thunk";
const reducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
});
let store = createStore(reducer, applyMiddleware(thunk));

export default store;

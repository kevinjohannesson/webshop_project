import { combineReducers } from "redux";
import productReducer from "./product/reducer";
import cartReducer from './cart/reducer';

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer
  // etc.
});

export default reducer;
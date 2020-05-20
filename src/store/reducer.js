import { combineReducers } from "redux";
import productReducer from "./product/reducer";
import appReducer from './app/reducer';

const reducer = combineReducers({
  products: productReducer,
  app: appReducer
  // etc.
});

export default reducer;
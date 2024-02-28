import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";
import { thunk } from "redux-thunk";

//reduserları birleştir
const rootReducer = combineReducers({
  products: productReducer,
  basket: basketReducer,
});
export default createStore(rootReducer, applyMiddleware(thunk));

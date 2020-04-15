import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import reducer from "./reducer";
import starWarsReducer from "./starWarsReducer";

const rootReducer = combineReducers({
  reducer,
  starWarsReducer,
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

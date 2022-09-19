import counterReducer from "./features/Counter/reducer";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

let rootReducers = combineReducers({
  counter: counterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOL_EXTENTION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;

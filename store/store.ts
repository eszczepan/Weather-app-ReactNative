import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { weatherReducer } from "./reducers";
import { IAppState } from "./models";

const rootReducer = combineReducers<IAppState>({
  weather: weatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

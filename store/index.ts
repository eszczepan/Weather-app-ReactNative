import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { weatherReducer } from "./reducers";
import { IWeatherState } from "./models";

export interface IAppState {
  weather: IWeatherState;
}

const rootReducer = combineReducers<IAppState>({
  weather: weatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

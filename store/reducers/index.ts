import { Reducer } from "redux";
import { WeatherActions } from "../actions";
import { WeatherActionTypes } from "../types";
import { IWeatherState } from "../models";

const initialState: IWeatherState = {
  data: null,
  error: "",
};

export const weatherReducer: Reducer<IWeatherState, WeatherActions> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case WeatherActionTypes.GET_WEATHER:
      return {
        data: action.payload,
        error: "",
      };
    case WeatherActionTypes.GET_WEATHER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

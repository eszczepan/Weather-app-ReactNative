import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { API_KEY } from "../../config.json";
import { WeatherActionTypes } from "../types";
import { IWeather, IWeatherState } from "../models";

export interface IWeatherGetWeatherAction {
  type: WeatherActionTypes.GET_WEATHER;
  weather: IWeather[];
}

export type WeatherActions = IWeatherGetWeatherAction;

const setError = (err: any) => {
  return {
    type: WeatherActionTypes.GET_WEATHER_ERROR,
    payload: err,
  };
};

export const fetchWeather: ActionCreator<
  ThunkAction<Promise<any>, IWeatherState, null, IWeatherGetWeatherAction>
> = (city: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        `http://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}`
      );
      dispatch({
        type: WeatherActionTypes.GET_WEATHER,
        payload: response.data,
      });
    } catch (err) {
      dispatch(setError(err.message));
    }
  };
};

import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { API_KEY } from "../../config.json";
import { WeatherActionTypes } from "../types";
import { IWeather, IWeatherState } from "../models";

export interface WeatherActions {
  type: WeatherActionTypes.GET_WEATHER;
  weather: IWeather[];
}

export const fetchWeather: ActionCreator<
  ThunkAction<Promise<any>, IWeatherState, null, WeatherActions>
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
      dispatch({
        type: WeatherActionTypes.GET_WEATHER_ERROR,
        payload: err,
      });
    }
  };
};

export const setDetialsDay = (day: number) => {
  return { type: WeatherActionTypes.SET_DETAILS_DAY, payload: day };
};

export const setModalVisible = (visible: boolean) => {
  return { type: WeatherActionTypes.SET_MODAL_VISIBLE, payload: visible };
};

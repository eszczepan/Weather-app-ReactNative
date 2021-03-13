import { WeatherActionTypes } from "../types";
import { IWeatherState } from "../models";

const initialState: IWeatherState = {
  data: null,
  error: "",
  modalVisible: false,
  detailsDayIndex: 0,
};

export const weatherReducer = (
  state = initialState,
  action: any
): IWeatherState => {
  const { payload, type } = action;
  switch (type) {
    case WeatherActionTypes.GET_WEATHER:
      return {
        ...state,
        data: payload,
        error: "",
      };
    case WeatherActionTypes.GET_WEATHER_ERROR:
      return {
        ...state,
        error: payload,
      };
    case WeatherActionTypes.SET_DETAILS_DAY:
      return {
        ...state,
        detailsDayIndex: payload,
      };
    case WeatherActionTypes.SET_MODAL_VISIBLE:
      return {
        ...state,
        modalVisible: payload,
      };
    default:
      return state;
  }
};

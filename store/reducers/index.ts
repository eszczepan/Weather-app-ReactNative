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
  switch (action.type) {
    case WeatherActionTypes.GET_WEATHER:
      return {
        ...state,
        data: action.payload,
        error: "",
      };
    case WeatherActionTypes.GET_WEATHER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case WeatherActionTypes.SET_DETAILS_DAY:
      return {
        ...state,
        detailsDayIndex: action.payload,
      };
    case WeatherActionTypes.SET_MODAL_VISIBLE:
      return {
        ...state,
        modalVisible: action.payload,
      };
    default:
      return state;
  }
};

export interface IWeatherState {
  data: IWeatherData | null;
  error: string;
  modalVisible: boolean;
  detailsDayIndex: number;
}

export interface IAppState {
  weather: IWeatherState;
}

export interface IWeather {
  app_max_temp: number;
  app_min_temp: number;
  clouds: number;
  clouds_hi: number;
  clouds_low: number;
  clouds_mid: number;
  datetime: string;
  dewpt: number;
  high_temp: number;
  low_temp: number;
  max_dhi: null;
  max_temp: number;
  min_temp: number;
  moon_phase: number;
  moon_phase_lunation: number;
  moonrise_ts: number;
  moonset_ts: number;
  ozone: number;
  pop: number;
  precip: number;
  pres: number;
  rh: number;
  slp: number;
  snow: number;
  snow_depth: number;
  sunrise_ts: number;
  sunset_ts: number;
  temp: number;
  ts: number;
  uv: number;
  valid_date: string;
  vis: number;
  weather: {
    code: number;
    description: string;
    icon: string;
  };
  wind_cdir: string;
  wind_cdir_full: string;
  wind_dir: number;
  wind_gust_spd: number;
  wind_spd: number;
}

export interface IWeatherData {
  city_name: string;
  lon: string;
  timezone: string;
  lat: string;
  country_code: string;
  state_code: string;
  data: IWeather[];
}

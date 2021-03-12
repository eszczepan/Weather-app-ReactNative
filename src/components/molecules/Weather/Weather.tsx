import React, { FC } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
} from "react-native";

import { IWeather } from "../../../../store/models";
import MainBox from "../../atoms/MainBox/MainBox";
import SmallBox from "../../atoms/SmallBox/Smallbox";

interface IProps {
  // weather: IWeather[] | null;
  weather: any;
  error: string;
  loading: boolean;
}

const Weather: FC<IProps> = ({ weather, error, loading }) => {
  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      <MainBox city={weather.city_name} weather={weather.data[0]} />

      {/* <FlatList> */}
      <SmallBox />
      <SmallBox />
      <SmallBox />
      <SmallBox />
      <SmallBox />
      {/* </FlatList> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Weather;

import React, { FC } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
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
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return loading || weather === null ? (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  ) : (
    <View style={styles.container}>
      <MainBox city={weather.city_name} weather={weather.data[0]} />

      <ScrollView>
        {weather.data.map((day: any, index: number) =>
          index === 0 ? null : <SmallBox key={index} weather={day} />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  error: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Weather;

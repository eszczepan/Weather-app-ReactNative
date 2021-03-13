import React, { FC } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
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

  if (weather.data === undefined) {
    return (
      <View style={styles.container}>
        <Text style={styles.info}>
          You have entered an invalid city. Please try again.
        </Text>
      </View>
    );
  }

  if (!loading && !weather) {
    return null;
  }

  return loading || weather.data === null ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#427BFF" />
    </View>
  ) : (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainBoxContainer}>
          <MainBox city={weather.city_name} weather={weather.data[0]} />
        </View>

        {weather.data.map((day: any, index: number) =>
          index === 0 ? null : (
            <SmallBox key={index} weather={day} index={index} />
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  error: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
  },
  info: {
    color: "#333",
    fontSize: 24,
    textAlign: "center",
  },
  mainBoxContainer: {
    height: "35%",
  },
});

export default Weather;

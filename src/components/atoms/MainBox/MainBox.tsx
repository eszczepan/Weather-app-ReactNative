import React, { FC } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import { IWeather } from "../../../../store/models";

interface IProps {
  weather: IWeather;
  city: string;
  modal?: boolean;
  onCloseModal?: any;
}

const MainBox: FC<IProps> = ({ city, weather, modal, onCloseModal }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        {modal ? (
          <TouchableOpacity style={styles.button} onPress={onCloseModal}>
            <Icon name="left" size={20} color="#fff" />
          </TouchableOpacity>
        ) : (
          <Text style={styles.baseText}>{city}</Text>
        )}

        <Text style={styles.baseText}>{weather.datetime}</Text>
      </View>
      <View style={styles.image}>
        <Image
          style={styles.icon}
          source={{
            uri: `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`,
          }}
        />
        <Text style={[styles.baseText, styles.description]}>
          {weather.weather.description}
        </Text>
      </View>
      <View style={styles.temperature}>
        <Text style={[styles.baseText, styles.temp]}>
          {Math.round(weather.temp)}&#8451;
        </Text>
      </View>

      <View style={styles.details}>
        <View style={styles.detailsRow}>
          <View
            style={[styles.detailsBox, styles.borderRight, styles.borderBottom]}
          >
            <Text style={styles.detailsDesc}>MIN. TEMPERATURE</Text>
            <Text style={styles.baseText}>{weather.min_temp} &#8451;</Text>
          </View>
          <View style={[styles.detailsBox, styles.borderBottom]}>
            <Text style={styles.detailsDesc}>MAX. TEMPERATURE</Text>
            <Text style={styles.baseText}>{weather.max_temp} &#8451;</Text>
          </View>
        </View>

        <View style={styles.detailsRow}>
          <View
            style={[styles.detailsBox, styles.borderRight, styles.borderBottom]}
          >
            <Text style={styles.detailsDesc}>WIND</Text>
            <Text style={styles.baseText}>
              {weather.wind_gust_spd.toFixed(1)} m/s
            </Text>
          </View>
          <View style={[styles.detailsBox, styles.borderBottom]}>
            <Text style={styles.detailsDesc}>PRESSURE</Text>
            <Text style={styles.baseText}>{Math.round(weather.pres)} mbar</Text>
          </View>
        </View>

        <View style={styles.detailsRow}>
          <View style={[styles.detailsBox, styles.borderRight]}>
            <Text style={styles.detailsDesc}>UV INDEX</Text>
            <Text style={styles.baseText}>{Math.round(weather.uv)}</Text>
          </View>
          <View style={styles.detailsBox}>
            <Text style={styles.detailsDesc}>RAIN</Text>
            <Text style={styles.baseText}>{weather.pop}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "#fff",
    marginBottom: 5,
    backgroundColor: "#427BFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    overflow: "hidden",
  },
  baseText: {
    color: "#fff",
    fontSize: 16,
  },
  icon: {
    width: 100,
    height: 100,
  },
  info: {
    alignSelf: "flex-start",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingBottom: 0,
  },
  button: {
    width: 40,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 24,
  },
  temperature: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
  },
  temp: {
    fontSize: 60,
  },
  details: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#c0d3ff",
    alignSelf: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#c0d3ff",
  },
  detailsDesc: {
    color: "#c0d3ff",
  },
  detailsRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsBox: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: "#c0d3ff",
  },
  borderBottom: {
    borderRightWidth: 1,
    borderRightColor: "#c0d3ff",
    borderBottomWidth: 1,
    borderBottomColor: "#c0d3ff",
  },
});

export default MainBox;

import React, { FC } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

interface IProps {
  weather: any;
}

const Smallbox: FC<IProps> = ({ weather }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{weather.datetime}</Text>
      </View>
      <View style={styles.temperature}>
        <Text>{Math.round(weather.temp)}&#8451;</Text>
        <Image
          style={styles.icon}
          source={{
            uri: `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`,
          }}
        />
        <TouchableOpacity style={styles.button}>
          <Icon name="right" size={16} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
    paddingVertical: 8,
    paddingLeft: 20,
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  temperature: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 15,
    height: "100%",
  },
});

export default Smallbox;

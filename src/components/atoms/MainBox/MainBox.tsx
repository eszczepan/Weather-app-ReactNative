import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

import { IWeather } from "../../../../store/models";

interface IProps {
  weather: IWeather;
  city: string;
}

const MainBox: FC<IProps> = ({ city, weather }) => {
  return (
    <View style={styles.container}>
      <Text>{city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#427BFF",
    borderRadius: 20,
  },
});

export default MainBox;

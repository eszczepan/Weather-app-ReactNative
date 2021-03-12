import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

interface IProps {
  weather: any;
}

const Smallbox: FC<IProps> = ({ weather }) => {
  return (
    <View style={styles.container}>
      <Text>{weather.temp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 5,
    backgroundColor: "#eee",
    borderRadius: 20,
  },
});

export default Smallbox;

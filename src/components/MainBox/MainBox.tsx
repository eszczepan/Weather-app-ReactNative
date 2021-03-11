import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

const MainBox: FC = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#427BFF",
    borderRadius: 20,
  },
});

export default MainBox;

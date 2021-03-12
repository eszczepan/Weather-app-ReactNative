import React from "react";
import { StyleSheet, View } from "react-native";

const Smallbox = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    height: "10%",
    marginVertical: 5,
    backgroundColor: "#eee",
    borderRadius: 20,
  },
});

export default Smallbox;

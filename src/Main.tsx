import { StatusBar } from "expo-status-bar";
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Alert,
  Dimensions,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { fetchWeather } from "../store/actions";
import SearchForm from "./components/SearchForm/SearchForm";
import MainBox from "./components/MainBox/MainBox";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const App: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("Paris"));
  }, [dispatch]);

  const handleSearchSubmit = () => {
    if (searchValue === "") {
      return Alert.alert(
        "You have entered an invalid value.",
        "City name is required. Please try again.",
        [{ text: "Got it" }]
      );
    } else {
      setIsLoading(true);
      dispatch(fetchWeather(searchValue.trim()));
      setSearchValue("");
      Keyboard.dismiss();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <SearchForm
          searchValue={searchValue}
          onSetSearchValue={setSearchValue}
          onSubmit={handleSearchSubmit}
        />
        <MainBox />
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    width: WIDTH,
    paddingHorizontal: 20,
  },
});

export default App;

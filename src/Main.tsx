import { StatusBar } from "expo-status-bar";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { fetchWeather } from "../store/actions";
import { IAppState } from "../store/models";
import SearchForm from "./components/molecules/SearchForm/SearchForm";
import Weather from "./components/molecules/Weather/Weather";
import ModalDetials from "./components/molecules/ModalDetails/ModalDetials";

const App: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const { data, error } = useSelector((state: IAppState) => state.weather);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchWeather("Cracow"));
    setIsLoading(false);
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
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {data !== null ? <ModalDetials weather={data} /> : null}
        <SearchForm
          searchValue={searchValue}
          onSetSearchValue={setSearchValue}
          onSubmit={handleSearchSubmit}
        />
        {data !== null ? (
          <Weather loading={isLoading} weather={data} error={error} />
        ) : null}
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default App;

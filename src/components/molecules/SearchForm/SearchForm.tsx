import React, { FC } from "react";
import {
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

interface IProps {
  searchValue: string;
  onSetSearchValue: any;
  onSubmit: any;
}

const SearchForm: FC<IProps> = ({
  searchValue,
  onSetSearchValue,
  onSubmit,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchValue}
        onChangeText={(e) => onSetSearchValue(e)}
      />
      <TouchableOpacity style={styles.searchButton} onPress={onSubmit}>
        <Icon name="search1" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: StatusBar.currentHeight,
    paddingVertical: 20,
  },
  searchInput: {
    height: "100%",
    width: "85%",
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 20,
    color: "#000",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchForm;

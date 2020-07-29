import React, { useState } from "react";
import { SearchBar } from "react-native-elements";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function SearchMedicine(props: any) {
  const [searchText, setSearchText] = useState("");

  return (
    <View>
      <SearchBar
        style={styles.searchBar}
        placeholder="Type Here..."
        onChangeText={(searchText) => setSearchText(searchText)}
        value={searchText}
        lightTheme={true}
      />
       <Button title="Search" onPress={() => {
         props.navigation.push("DonorsList")
      }} />
        <Button title="Upload Prescription" onPress={() => {
         props.navigation.push("UploadPrescriptionDetails")
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: 50,
    marginLeft: 15,
    marginRight: 15,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
  },
});

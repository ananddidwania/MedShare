import React, { useState } from "react";
import { SearchBar } from "react-native-elements";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

export default function SearchMedicine(props: any) {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>

      <Text style={{ color: "#10847e", position: "absolute", top: 0, right: 0, padding: 10, textDecorationLine: "underline" }} onPress={() => {
        props.navigation.push("UploadPrescriptionDetails")
      }} >Upload Prescription</Text>
      <SearchBar
        inputStyle={{ ...styles.backgroundWhite, color: "black" }}
        inputContainerStyle={{ borderRadius: 30, backgroundColor: "white" }}
        containerStyle={{ ...styles.backgroundWhite, width: "95%", borderRadius: 30 }}
        leftIconContainerStyle={styles.backgroundWhite}
        placeholder="Type Here..."
        onChangeText={(searchText) => setSearchText(searchText)}
        value={searchText}
        lightTheme={true}
      />
      <View style={{ padding: 10, width: "50%", borderRadius: 30, overflow: "hidden" }}>

        <TouchableOpacity onPress={() => props.navigation.push("DonorsList")}>
          <Text style={{ fontSize:15, backgroundColor: "#10847e", color: "white", fontWeight: "500", borderRadius: 4, padding:10, textAlign:"center" }}>{"Search"}</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: "white",
  },
});

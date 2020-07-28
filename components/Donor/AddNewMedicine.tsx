import * as React from "react";
import { Alert, View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Header from "../Header";

export default function AddNewMedicine() {
  return (
    <View style={styles.container}>
      <Header headerText="Add Medicine to donate" />
      <TextInput
        style={styles.inputBox}
        placeholder="Name of medicine"
      ></TextInput>
      <TextInput style={styles.inputBox} placeholder="Expiry date"></TextInput>
      <TextInput
        style={styles.inputBox}
        placeholder="Number of pills"
      ></TextInput>
      <Button
        onPress={() => Alert.alert("Button with adjusted color pressed")}
        title="Submit"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
  },
  inputBox: {
    paddingVertical: 10,
    marginVertical: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
  },
});

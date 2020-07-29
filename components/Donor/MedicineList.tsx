import * as React from "react";
import { Alert, View, Button, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Header from "../Header";
import { firebaseApp } from "../../config";

export default class MedicineList extends React.Component {
  state = {
    medicineName: "",
    expiryDate: "",
    count: 0,
  };
  ReadMedicineDetails() {
    firebaseApp
      .database()
      .ref("Medicines/")
      .on("value", function (snapshot) {
        console.log(snapshot.val());
      });
  }

  render() {
    Alert.alert("inside medilist component");
    return (
      <View style={styles.container}>
        <Header headerText="Listed medicines to donate" />
        <Text>{this.ReadMedicineDetails}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
  },
});

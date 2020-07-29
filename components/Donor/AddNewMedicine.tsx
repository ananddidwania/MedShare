import * as React from "react";
import { Alert, View, Button, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Header from "../Header";
import { firebaseApp } from "../../config";
import MedicineList from "./MedicineList";
import Navigation from "../../navigation";

export default class AddNewMedicine extends React.Component {
  state = {
    medicineName: "",
    expiryDate: "",
    count: 0,
  };

  SubmitMedicineDetails = (
    medicineName: string,
    expiryDate: string,
    count: number
  ) => {
    firebaseApp
      .database()
      .ref("Medicines/")
      .push({
        medicineName,
        expiryDate,
        count,
      })
      .then(() => {
        //success callback
        console.log("Successfully entered in database");
      })
      .catch((error) => {
        //error callback
        console.log("Error: ", error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Add Medicine to donate" />
        <TextInput
          style={styles.inputBox}
          placeholder="Name of medicine"
          onChangeText={(medicineName) => this.setState({ medicineName })}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Expiry date"
          onChangeText={(expiryDate) => this.setState({ expiryDate })}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Number of pills"
          onChangeText={(count) => this.setState({ count })}
        ></TextInput>
        <View style={styles.submitButton}>
          <Button
            onPress={() =>
              this.SubmitMedicineDetails(
                this.state.medicineName,
                this.state.expiryDate,
                this.state.count
              )
            }
            title="Submit"
            color="#841584"
          />
        </View>
      </View>
    );
  }
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
  submitButton: {
    marginVertical: 50,
  },
});

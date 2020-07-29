import * as React from "react";
import { Alert, View, Button, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Header from "../Header";
import { firebaseApp } from "../../config";

export default class AddNewMedicine extends React.Component<any> {
  state = {
    medicineName: "",
    expiryDate: "",
    count: "",
  };

  SubmitMedicineDetails = () => {
    firebaseApp
      .database()
      .ref("Medicines/")
      .push({
        medicineName: this.state.medicineName,
        expiryDate: this.state.expiryDate,
        count: this.state.count,
      })
      .then(() => {
        //success callback
        console.log("Successfully entered in database");
        this.setState({
          medicineName: "",
          expiryDate: "",
          count: "",
        });
        Alert.alert(
          "Your medicine got visibility to receivers. Thanks for the donation."
        );
      })
      .catch((error) => {
        //error callback
        console.log("Error: ", error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: "40%",
            flex: 1,
            alignSelf: "flex-end",
            marginTop: 10,
            marginBottom: 40,
          }}
        >
          <Button
            title={"See Donated medicines"}
            onPress={() => this.props.navigation.push("MedicineList")}
          />
        </View>
        <TextInput
          style={styles.inputBox}
          placeholder="Name of medicine"
          onChangeText={(medicineName) => this.setState({ medicineName })}
          value={this.state.medicineName}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Expiry date"
          onChangeText={(expiryDate) => this.setState({ expiryDate })}
          value={this.state.expiryDate}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Number of pills"
          onChangeText={(count) => this.setState({ count })}
          value={this.state.count.toString()}
        ></TextInput>
        <View style={styles.submitButton}>
          <Button
            onPress={() => this.SubmitMedicineDetails()}
            title="Add Medicine"
            color="#10847e"
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

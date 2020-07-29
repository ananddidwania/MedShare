import * as React from "react";
import {
  Alert,
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
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
    if (
      this.state.medicineName === "" ||
      this.state.expiryDate === "" ||
      this.state.count === ""
    ) {
      Alert.alert("Please enter valid details!");
    } else {
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
            "Your medicine got added to list. \nPlease go to View Medicines to see the list."
          );
        })
        .catch((error) => {
          //error callback
          console.log("Error: ", error);
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: "45%",
            marginTop: 10,
            marginBottom: 50,
            alignSelf: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{ paddingVertical: 2 }}
            onPress={() => this.props.navigation.push("MedicineList")}
          >
            <Text
              style={{
                fontSize: 16,
                backgroundColor: "blank",
                color: "black",
                fontWeight: "500",
                borderRadius: 4,
                paddingVertical: 4,
                paddingHorizontal: 10,
                borderStyle: "solid",
                borderWidth: 1,
              }}
            >
              {"View Medicines"}
            </Text>
          </TouchableOpacity>
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

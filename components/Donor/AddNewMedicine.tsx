import * as React from "react";
import {
  Alert,
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Header from "../Header";
import { firebaseApp } from "../../config";
import { withTheme } from "react-native-elements";

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
            "Medicine successfully added!. \nClick 'View Medicine' to see the list."
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
            width: "36%",
            marginTop: 10,
            marginBottom: 100,
            alignSelf: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.push("MedicineList")}
          >
            <Text
              style={{
                fontSize: 15,
                backgroundColor: "blank",
                color: "black",
                fontWeight: "500",
                borderRadius: 4,
                paddingHorizontal: 11,
                paddingVertical: 4,
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
          placeholder="Medicine Name"
          onChangeText={(medicineName) => this.setState({ medicineName })}
          value={this.state.medicineName}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Expiry Date (DD/MM/YYYY)"
          onChangeText={(expiryDate) => this.setState({ expiryDate })}
          value={this.state.expiryDate}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Pills Quantity"
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
    marginHorizontal: 10,
  },
  inputBox: {
    paddingVertical: 10,
    paddingLeft: 10,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 40,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  submitButton: {
    marginVertical: 50,
    marginHorizontal: 40,
    borderRadius: 10,
  },
});

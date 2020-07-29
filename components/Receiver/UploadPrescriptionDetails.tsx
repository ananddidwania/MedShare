import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import MedicinesList from "./MedicinesList";

export default function UploadPrescriptionDetails(props: any) {
  const [prescription, setPrescription] = useState("");
  const [medicine, setMedicineName] = useState("");

  let listLength = 0;
  const selectOneFile = () => {
    return async () => {
      //Opening Document Picker for selection of one file
      const res = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: false,
      });
      console.log("loading prescription");
      //Printing the log realted to the file
      setPrescription(JSON.stringify(res));
    };
  };

  const testInAttachmentBox = () => {
    const text =
      prescription == ""
        ? "Click here to pick attach prescription"
        : "See prescription";
    return <Text style={{ fontSize: 19 }}> {text} </Text>;
  };

  const addTextBox = () => {
    return (
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(medicineName) => setMedicineName(medicineName)}
        value={medicine}
      />
    );
  };
  return (
    <ScrollView>
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.attachButtonStyle}
          onPress={selectOneFile()}
        >
          {testInAttachmentBox()}
          <Image
            source={{
              uri: "https://img.icons8.com/offices/40/000000/attach.png",
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 19, marginLeft: 10 }}>
          Add required medicines
        </Text>
        <MedicinesList />

        <Button title="Submit" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    width: "70%",
  },
  containerStyle: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  textStyle: {
    backgroundColor: "#fff",
    fontSize: 15,
    marginTop: 16,
    color: "black",
  },
  attachButtonStyle: {
    marginTop: 100,
    width: "50%",
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#DDDDDD",
    padding: 5,
    marginBottom: 20,
  },
  addButtonStyle: {
    marginLeft: 10,
    marginBottom: 10,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: "stretch",
  },
});

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

  const textInAttachmentBox = () => {
    const text =
      prescription == "" ? "Upload Prescription" : "View Prescription";
    return (
      <Text
        style={{
          fontSize: 15,
          flex: 1,
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    );
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
          {textInAttachmentBox()}
          <Image
            source={{
              uri:
                "https://www.searchpng.com/wp-content/uploads/2019/03/Upload-Icon-PNG-Image-1024x1024.png",
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 19, marginLeft: 23 }}>
          Add required medicines
        </Text>
        <MedicinesList />
        <View
          style={{
            borderRadius: 30,
            overflow: "hidden",
            marginHorizontal: 50,
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.push("SearchMedicine")}
          >
            <Text
              style={{
                fontSize: 15,
                backgroundColor: "#10847e",
                color: "white",
                fontWeight: "500",
                borderRadius: 4,
                padding: 10,
                textAlign: "center",
              }}
            >
              {"Submit"}
            </Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 50,
    width: "42%",
    marginLeft: 20,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#DDDDDD",
    padding: 5,
    marginBottom: 40,
    borderRadius: 4,
  },
  addButtonStyle: {
    marginLeft: 10,
    marginBottom: 10,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: "cover",
    alignSelf: "flex-end",
  },
});

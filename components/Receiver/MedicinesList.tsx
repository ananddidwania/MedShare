import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function MedicinesList() {
  const [enteredMedicine, setEnteredMedicine] = useState("");
  const [medicinesList, setMedicinesList] = useState([]);

  const medicineInputHandler = (enteredText) => {
    setEnteredMedicine(enteredText);
  };

  const addMedicineHandler = () => {
    setMedicinesList((currentMedicines) => [
      ...currentMedicines,
      enteredMedicine,
    ]);
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter required mdeicine"
            style={StyleSheet.input}
            onChangeText={medicineInputHandler}
            value={enteredMedicine}
          />
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.addButtonStyle}
            onPress={addMedicineHandler}
          >
            <Image
              source={require("../../assets/images/plus_icon.png")}
              style={styles.imageIconStyle}
            />
          </TouchableOpacity>
        </View>
        <View>
          {medicinesList.map((medicine) => (
            <Text key={medicine} style={styles.listItem}>
              {medicine}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
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
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

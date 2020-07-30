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
  const [medicinesList, setMedicinesList] = useState<string[]>([]);

  const medicineInputHandler = (enteredText: string) => {
    setEnteredMedicine(enteredText);
  };

  const addMedicineHandler = () => {
    setMedicinesList(
      (currentMedicines: string[]) =>
        [...currentMedicines, enteredMedicine] as string[]
    );
  };

  const headingForMedicineList = () => {
    const text = medicinesList.length > 0 ? "Medicine List" : "";
    return (
      <Text
        style={{
          marginTop: 20,
          marginBottom: 10,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {text}
      </Text>
    );
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter required medicine"
            style={styles.input}
            onChangeText={medicineInputHandler}
            value={enteredMedicine}
          />
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.addButtonStyle}
            onPress={addMedicineHandler}
          >
            <Image
              source={{
                uri:
                  "https://th.bing.com/th/id/OIP.8Ot1ginA5dU7UuspDk4OCAHaHa?w=187&h=187&c=7&o=5&dpr=1.5&pid=1.7",
              }}
              style={styles.imageIconStyle}
            />
          </TouchableOpacity>
        </View>
        {headingForMedicineList()}
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "white",
  },
  addButtonStyle: {
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  imageIconStyle: {
    height: 35,
    width: 35,
    resizeMode: "stretch",
    borderRadius: 40,
  },
  listItem: {
    fontSize: 15,
    paddingLeft: 10,
    borderWidth: 1,
    paddingVertical: 5,
    borderBottomColor: "grey",
  },
});

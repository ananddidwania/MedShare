import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import AddNewMedicine from "../components/Donor/AddNewMedicine";

export default function TabTwoScreen() {
  return (
    <View>
      <AddNewMedicine />
    </View>
  );
}

const styles = StyleSheet.create({});

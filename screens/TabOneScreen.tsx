import * as React from "react";
import { StyleSheet, Button } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import SearchMedicine from "../components/Receiver/SearchMedicine";
import UploadPrescriptionDetails from "../components/Receiver/UploadPrescriptionDetails";

export default function TabOneScreen() {
  const [prescriptionUploaded, setPrescriptionUploaded] = React.useState(false);

  return (
    <View>
      <SearchMedicine />
    </View>
  );
}

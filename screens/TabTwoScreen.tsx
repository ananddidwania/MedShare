import * as React from "react";
import { StyleSheet, Button } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import AddNewMedicine from "../components/Donor/AddNewMedicine";
import MedicineList from "../components/Donor/MedicineList";

export default class TabTwoScreen extends React.Component {
  state = {
    listVisible: false,
  };
  render() {
    return (
      <View>
        {!this.state.listVisible ? <AddNewMedicine /> : null}
        <View style={styles.bottomButton}>
          <Button
            title={
              this.state.listVisible
                ? "Add new medicine to donate"
                : "See Donated medicines"
            }
            onPress={() =>
              this.setState({ listVisible: !this.state.listVisible })
            }
          />
        </View>
        {this.state.listVisible ? <MedicineList /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomButton: {
    marginTop: 70,
  },
});

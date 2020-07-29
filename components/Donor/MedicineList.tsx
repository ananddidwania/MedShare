import * as React from "react";
import {
  Alert,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Header from "../Header";
import { firebaseApp } from "../../config";

export default class MedicineList extends React.Component {
  state = {
    medicines: {},
  };
  componentDidMount() {
    firebaseApp
      .database()
      .ref("/Medicines")
      .on("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let medicineItems = { ...data };
        this.setState({
          medicines: medicineItems,
        });
      });
  }

  render() {
    let medicinesKeys = Object.keys(this.state.medicines);
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header headerText="Listed medicines to donate" />
          <View>
            {medicinesKeys.length > 0 ? (
              medicinesKeys.map((key: string) => (
                // @ts-ignore
                <MedicineCard medicine={this.state.medicines[key]} />
              ))
            ) : (
              <Text>No medicines added to donate</Text>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const MedicineCard = ({
  medicine: { medicineName, expiryDate, count },
}: {
  medicine: { medicineName: string; expiryDate: string; count: number };
}) => {
  return (
    <View
      style={{
        elevation: 5,
        backgroundColor: "white",
        marginVertical: 5,
        marginHorizontal: 1,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            paddingVertical: 2,
            paddingHorizontal: 5,
            fontSize: 14,
          }}
        >
          {medicineName}
        </Text>
        <Text style={{ paddingVertical: 2, color: "gray", fontSize: 13 }}>
          {count}
        </Text>
      </View>
      <Text style={{ paddingVertical: 2, paddingHorizontal: 5, fontSize: 13 }}>
        {expiryDate}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Image } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { BottomTabParamList, ReceiverTab, DonorTab } from "../types";
import MedicineList from "../components/Donor/MedicineList";
import SearchMedicine from "../components/Receiver/SearchMedicine";
import UploadPrescriptionDetails from "../components/Receiver/UploadPrescriptionDetails";
import DonorList from "../components/Donor/DonorsList";
import AddNewMedicine from "../components/Donor/AddNewMedicine";

const ReceiverTabNav = createStackNavigator<ReceiverTab>();

function ReceiverTabNavigator() {
  return (
    <ReceiverTabNav.Navigator>
      <ReceiverTabNav.Screen
        name="SearchMedicine"
        component={SearchMedicine}
        options={{ headerTitle: "Search for Medicines" }}
      />
      <ReceiverTabNav.Screen
        name="UploadPrescriptionDetails"
        component={UploadPrescriptionDetails}
        options={{ headerTitle: "Upload your prescription" }}
      />
      <ReceiverTabNav.Screen
        name="DonorsList"
        component={DonorList}
        options={{ headerTitle: "List of Donors" }}
      />
    </ReceiverTabNav.Navigator>
  );
}

const DonorTabNav = createStackNavigator<DonorTab>();

function DonorTabNavigator() {
  return (
    <DonorTabNav.Navigator>
      <DonorTabNav.Screen
        name="AddMedicine"
        component={AddNewMedicine}
        options={{ headerTitle: "Add Medicines" }}
      />
      <DonorTabNav.Screen
        name="MedicineList"
        component={MedicineList}
        options={{ headerTitle: "List of added Medicines" }}
      />
    </DonorTabNav.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: "gray",
        labelStyle: { fontWeight: "bold", fontSize: 16 },
        activeBackgroundColor: "#f1f1f1",
      }}
    >
      <BottomTab.Screen
        name="Receiver"
        component={ReceiverTabNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ height: 25, width: 25, marginTop: 8 }}
              source={{
                uri:
                  "https://cdn2.iconfinder.com/data/icons/charity-line/96/blood_donation_transfusion_volunteer-256.png",
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Donor"
        component={DonorTabNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ height: 25, width: 25, marginTop: 8 }}
              source={{
                uri:
                  "https://cdn2.iconfinder.com/data/icons/charity-line/96/blood_donation_charity_donor-256.png",
              }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

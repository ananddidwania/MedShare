import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { BottomTabParamList, ReceiverTab, DonorTab } from "../types";
import MedicineList from "../components/Donor/MedicineList";
import SearchMedicine from "../components/Receiver/SearchMedicine";
import UploadPrescriptionDetails from "../components/Receiver/UploadPrescriptionDetails";
import DonorList from "../components/Donor/DonorsList";
import AddNewMedicine from "../components/Donor/AddNewMedicine";

const ReceiverTabNav = createStackNavigator<ReceiverTab>();

function ReceiverTabNavigator(){
  return (
    <ReceiverTabNav.Navigator>
      <ReceiverTabNav.Screen name="UploadPrescriptionDetails" component={UploadPrescriptionDetails} />
      <ReceiverTabNav.Screen name="SearchMedicine" component={SearchMedicine} />
      <ReceiverTabNav.Screen name="DonorsList" component={DonorList} />
    </ReceiverTabNav.Navigator>
  )
}

const DonorTabNav = createStackNavigator<DonorTab>();

function DonorTabNavigator() {
  return (
    <DonorTabNav.Navigator>
      <DonorTabNav.Screen name="TabTwoScreen" component={AddNewMedicine} />
      <DonorTabNav.Screen name="MedicineList" component={MedicineList} />
    </DonorTabNav.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen name="Receiver" component={ReceiverTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen name="Donor" component={DonorTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}


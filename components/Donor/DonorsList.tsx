import * as React from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import { ScrollView, FlatList, TouchableOpacity } from "react-native-gesture-handler";

export default function DonorList(props: any) {
    const donors: Array<any> = require("../../assets/data/donors.json");
    return (
        <ScrollView>
            <View>
                <FlatList data={donors}
                    keyExtractor={(donor) => donor.UserId}
                    renderItem={
                        (donor) => <DonorCard donor={donor.item} />
                    } />
            </View>
        </ScrollView>
    );
}

function DonorCard(props: any) {
    const { donor } = props;
    return (
        <View style={{ elevation: 6, backgroundColor: "white", marginVertical: 5, marginHorizontal: 10, padding: 10, shadowColor: "black", shadowOpacity: 0.4, shadowOffset: { height: 2, width: 2 }, shadowRadius: 6 }}>
            <View style={{ flexDirection: "row",width:"100%" }}>
                <Image style={{ height: 30, width: 30 }} source={{
                    uri: donor.ProfileImage || "https://d2cax41o7ahm5l.cloudfront.net/mi/speaker-photo/dermatology-NMKiron---62959-4369.jpeg",
                }} />

                {donor.IsVerified && <Image style={{ height: 10, width: 10 }} source={{
                    uri: "https://ih1.redbubble.net/image.1128192462.0602/st,small,507x507-pad,600x600,f8f8f8.jpg",
                }} />}
                <Text style={{ paddingVertical: 2, paddingHorizontal: 5, flex:1}}>{donor.UserName}</Text>
                <TouchableOpacity style={{ paddingVertical: 2 }} onPress={() => { Linking.openURL(`tel:${donor.ContactNumber}`) }}>
                    <Text style={{ fontSize: 12, backgroundColor: "#10847e", color: "white", fontWeight: "500", borderRadius: 4, paddingVertical: 4, paddingHorizontal: 10 }}>{"Call"}</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ paddingVertical: 2, fontSize: 13 }}>{`Medicines available: ${(donor.MedicineList.map((med: any) => med.MedicineName)).join(", ")}`}</Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ paddingVertical: 2, color: "#10847e", fontSize: 12 }}>{`${donor.Location.Dist}kms away (${donor.Location.Area})`}</Text>

            </View>
        </View>);
}


const styles = StyleSheet.create({


});
import React from "react";
import {
    View,
    SafeAreaView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import  { CustomButton } from "../../components/atom/CustomButton";

const Stack = createStackNavigator();

export const ContactScreen = () => {
    const navigation = useNavigation();

    const buttonPress = () => {
        console.log("meow");
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", backgroundColor: "#FFF", paddingRight: 20, paddingLeft: 20 }}>
                <CustomButton title={"Open Contact List"} buttonPress={buttonPress}></CustomButton>
            </View>
        </SafeAreaView>
    );
}
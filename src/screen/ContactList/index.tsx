import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import {
    View,
    SafeAreaView,
  } from "react-native";

const Stack = createStackNavigator();

export const ContactListScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

            </View>
        </SafeAreaView>
    );
}
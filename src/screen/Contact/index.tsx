import React from "react";
import {
    View,
    SafeAreaView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import  { CustomButton } from "../../components/atom/CustomButton";
import styles from "./styles"

const Stack = createStackNavigator();

export const ContactScreen = () => {
    const navigation = useNavigation();

    const buttonPress = () => {
        console.log("meow");
    };

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <CustomButton title={"Open Contact List"} buttonPress={buttonPress}></CustomButton>
            </View>
        </SafeAreaView>
    );
}
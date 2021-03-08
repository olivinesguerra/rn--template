import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import {
    View,
    SafeAreaView,
    FlatList
  } from "react-native";

const Stack = createStackNavigator();

export const ContactListScreen = () => {
    const navigation = useNavigation();
    const keyExtractor = (item: any, index: number) => index.toString();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={[{ a: 1 }, { a: 2 }]}
                    style={{ flex: 1 }}
                    renderItem={({ item }) => <View  />} />
            </View>
        </SafeAreaView>
    );
}
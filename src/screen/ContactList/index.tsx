import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import {
    View,
    SafeAreaView,
    FlatList
} from "react-native";
import styles from "./styles";

import { ContactListItem } from "../../components/molecule/ContactListItem"

const Stack = createStackNavigator();

export const ContactListScreen = () => {
    const navigation = useNavigation();
    const keyExtractor = (item: any, index: number) => index.toString();

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <FlatList
                    data={[{ a: 1 }, { a: 2 }]}
                    style={styles.flatList}
                    renderItem={({ item }) => 
                        <ContactListItem />
                    } />
            </View>
        </SafeAreaView>
    );
}
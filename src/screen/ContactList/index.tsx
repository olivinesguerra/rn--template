import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import * as Contacts from 'expo-contacts';
import { 
    View,
    SafeAreaView,
    FlatList
} from "react-native";
import styles from "./styles";
import { ContactState } from "../../store/reducer/contact";

import { ContactListItem } from "../../components/molecule/ContactListItem";

const Stack = createStackNavigator();

type Props = {

}

export const ContactListScreen: React.FC<Props> = () => {
    const navigation = useNavigation();
    const keyExtractor = (item: any, index: number) => index.toString();
    const contacts = useSelector<ContactState, ContactState["contacts"]>((state: ContactState) => state.chatReducer.contacts)

    console.log(contacts);

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <FlatList
                    data={contacts}
                    style={styles.flatList}
                    keyExtractor={keyExtractor}
                    renderItem={({ item, index }) => 
                        <ContactListItem key={index} item={item}/>
                    } />
            </View>
        </SafeAreaView>
    );
}
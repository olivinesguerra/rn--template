import React from "react";
import {
    Text,
    View
} from "react-native";
import * as Contacts from 'expo-contacts';

type ContactListItemProps = {
    item?: Contacts.Contact
}


export const ContactListItem = ({ item } : ContactListItemProps) => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ color: "#000", textAlign: "center" }}>{item!!.firstName}</Text>
        </View>
    );
}
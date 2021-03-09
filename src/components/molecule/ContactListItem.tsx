import React from "react";
import {
    Text,
    View
} from "react-native";
import * as Contacts from 'expo-contacts';

type ContactListItemProps = {
    item?: Contacts.Contact | null | undefined
}


export const ContactListItem = ({ item } : ContactListItemProps) => {
    return (
        <View style={{ flex: 1, flexDirection:'column', margin: 20, alignItems: "flex-start" }}>
            <Text style={{ color: "#000", textAlign: "center" }}>{`${item!!.firstName} ${item!!.lastName}`}</Text>
            {
                item?.phoneNumbers!!.map((phoneNumber) => {
                    return  <Text key ={phoneNumber.id} style={{ color: "#000", textAlign: "center" }}>{`${phoneNumber!!.label} ${phoneNumber!!.number}`}</Text>;
                })
            }
        </View>
    );
}
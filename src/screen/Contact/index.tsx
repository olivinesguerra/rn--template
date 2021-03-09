import React, { useEffect }  from "react";
import {
    View,
    SafeAreaView,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import * as Contacts from 'expo-contacts';

import { setContacts } from "../../store/action/contact";
import { ContactState } from "../../store/reducer/contact";

import  { CustomButton } from "../../components/atom/CustomButton";
import styles from "./styles"

import { ContactListItem } from "../../components/molecule/ContactListItem";

type ContactScreenProps = {

}

export const ContactScreen: React.FC<ContactScreenProps> = ({ }) => {
    const navigation = useNavigation();
    const dispatch: Dispatch<any> = useDispatch();

    const selectedContact = useSelector<ContactState, ContactState["selectedContact"]>((state: ContactState) => state.chatReducer.selectedContact);

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [
                        Contacts.Fields.FirstName, 
                        Contacts.Fields.Image, 
                        Contacts.Fields.LastName, 
                        Contacts.Fields.PhoneNumbers,
                        Contacts.Fields.Image
                    ],
                });
                dispatch(setContacts(data));
          }
        })();
    }, []);

    const buttonPress = () => {
        navigation.navigate("ContactListScreen");
    };

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                {
                    selectedContact != null ? <ContactListItem key={selectedContact.id} item={selectedContact}/> : null
                }
                <CustomButton title={"Open Contact List"} buttonPress={buttonPress}></CustomButton>
            </View>
        </SafeAreaView>
    );
}
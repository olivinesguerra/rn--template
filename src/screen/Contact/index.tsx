import React, { useEffect }  from "react";
import {
    View,
    SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import * as Contacts from 'expo-contacts';

import { setContacts } from "../../store/action/contact";
import  { CustomButton } from "../../components/atom/CustomButton";
import styles from "./styles"

type Props = {

}

export const ContactScreen: React.FC<Props> = ({ }) => {
    const navigation = useNavigation();
    const dispatch: Dispatch<any> = useDispatch();

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
                <CustomButton title={"Open Contact List"} buttonPress={buttonPress}></CustomButton>
            </View>
        </SafeAreaView>
    );
}
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { 
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity
} from "react-native";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import styles from "./styles";
import { ContactState } from "../../store/reducer/contact";
import { setSelectedContact } from "../../store/action/contact";

import { ContactListItem } from "../../components/molecule/ContactListItem";

type ContactListScreenProps = {}

export const ContactListScreen: React.FC<ContactListScreenProps> = () => {
    const navigation = useNavigation();
    const dispatch: Dispatch<any> = useDispatch();

    const keyExtractor = (item: any, index: number) => index.toString();
    const contacts = useSelector<ContactState, ContactState["contacts"]>((state: ContactState) => state.chatReducer.contacts);

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <FlatList
                    data={contacts}
                    style={styles.flatList}
                    keyExtractor={keyExtractor}
                    renderItem={({ item, index }) => 
                        <TouchableOpacity 
                            onPress={() => {
                                dispatch(setSelectedContact(item))
                                navigation.goBack();
                            }}
                        >
                            <ContactListItem key={index} item={item}/>
                        </TouchableOpacity>
                    } />
            </View>
        </SafeAreaView>
    );
}
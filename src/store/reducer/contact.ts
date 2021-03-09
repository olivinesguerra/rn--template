
import { ContactsActionTypes } from "../types";
import { SET_SELECTED_CONTACT, SET_CONTACT_LIST } from "../action/contact";
import * as Contacts from 'expo-contacts';

export type ContactState = {
    contacts?: [Contacts.Contact?];
    selectedContact?: any;
};
  
const INITIAL_STATE: ContactState = {
    contacts: [],
    selectedContact: null,
};

export function chatReducer(state = INITIAL_STATE, action: ContactsActionTypes): ContactState {
    // console.log(action.payload);
    switch (action.type) {
        case SET_SELECTED_CONTACT:
            return {
                ...state,
                selectedContact: action.payload
            };
        case SET_CONTACT_LIST:
            return {
                ...state,
                contacts: action.payload
            };
      default:
        return state
    }
}
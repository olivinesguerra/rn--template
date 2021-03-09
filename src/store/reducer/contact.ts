
import { ContactsActionTypes } from "../types";
import { SET_SELECTED_CONTACT, SET_CONTACT_LIST } from "../action/contact";
import * as Contacts from 'expo-contacts';

export type ContactState = {
    contacts?: [Contacts.Contact?];
    selectedContact?: Contacts.Contact | null;
};
  
const INITIAL_STATE: ContactState = {
    contacts: [],
    selectedContact: null,
};

export function chatReducer(state = INITIAL_STATE, action: ContactsActionTypes): ContactState {
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
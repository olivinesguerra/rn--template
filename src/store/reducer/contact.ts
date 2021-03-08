
import { ContactsActionTypes, SET_SELECTED_CONTACT, SET_CONTACTS } from "../types";

type ContactState = {
    contacts?: [any?];
    selectedContact?: any;
};
  
const INITIAL_STATE: ContactState = {
    contacts: [],
    selectedContact: null,
};

export function chatReducer(
    state = INITIAL_STATE,
    action: ContactsActionTypes
  ): ContactState {
    switch (action.type) {
        case SET_SELECTED_CONTACT:
            return {
                selectedContact: action.payload
            };
        case SET_CONTACTS:
            return {
                contacts: action.payload
            };
      default:
        return state
    }
  }
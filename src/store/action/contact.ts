

import * as Contacts from 'expo-contacts';

import { ContactsActionTypes } from "../types";
export const SET_SELECTED_CONTACT = "SET_SELECTED_CONTACT";
export const SET_CONTACT_LIST = "SET_CONTACT_LIST";

export const setSelectedContact = (contact: Contacts.Contact | null | undefined): ContactsActionTypes => ({
    type: SET_SELECTED_CONTACT,
    payload: contact,
});

export const setContacts = (data:Contacts.Contact[]): ContactsActionTypes => ({
    type: SET_CONTACT_LIST,
    payload: data,
});
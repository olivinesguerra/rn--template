import * as Contacts from 'expo-contacts';

import { SET_SELECTED_CONTACT, SET_CONTACT_LIST } from "../action/contact";

interface SetSelectedContact {
  type: typeof SET_SELECTED_CONTACT
  payload: any
}
  
interface SetContacts {
  type: typeof SET_CONTACT_LIST
  payload: any
}
  
export type ContactsActionTypes = SetSelectedContact | SetContacts
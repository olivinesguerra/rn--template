export const SET_SELECTED_CONTACT = 'SET_SELECTED_CONTACT'
export const SET_CONTACTS = 'SET_CONTACTS'

interface SetSelectedContact {
  type: typeof SET_SELECTED_CONTACT
  payload: any
}
  
interface SetContacts {
    type: typeof SET_CONTACTS
    payload: [any]
}
  
export type ContactsActionTypes = SetSelectedContact | SetContacts
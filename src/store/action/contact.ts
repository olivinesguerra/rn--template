

//export const GET_CONTACT = "GET_CONTACT";
export const SET_SELECTED_CONTACT = "SET_SELECTED_CONTACT";


export const setSelectedContact = () => (dispatch: Function) => {
    dispatch({ type: SET_SELECTED_CONTACT });
};
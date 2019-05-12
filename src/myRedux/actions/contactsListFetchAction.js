import myFetch from "../../tools/fetch";

export const GET_CONTACTS_LIST_BEGIN = "GET_CONTACTS_LIST_BEGIN";
export const GET_CONTACTS_LIST_SUCCESS = "GET_CONTACTS_LIST_SUCCESS";
export const GET_CONTACTS_LIST_FAIL = "GET_CONTACTS_LIST_FAIL";
export const ADD_SELECTED_CONTACTS_ACTIVATION_BUTTONS = 'ADD_SELECTED_CONTACTS_ACTIVATION_BUTTONS';
export const SELECT_ALL = 'SELECT_ALL';
export const CANCEL_SELECTED = 'CANCEL_SELECTED';

export const getContactsListBegin = () => ({
    type: GET_CONTACTS_LIST_BEGIN
})
export const getContactsListSuccess = lists => ({
    type: GET_CONTACTS_LIST_SUCCESS,
    payload: {lists}
})
export const getContactsListFail = error => ({
    type: GET_CONTACTS_LIST_FAIL,
    payload: {error}
})


export const getContactsList = () => {
    return dispatch => {
        dispatch(getContactsListBegin());
        return myFetch("/contacts","GET")
            .then(data => {
                // console.log(data)
                dispatch(getContactsListSuccess(data))
            })
            .catch(error => dispatch(getContactsListFail(error)));
    };
}


// add selected contacts

export const addSelectedContacts = (guId) => ({
        type: ADD_SELECTED_CONTACTS_ACTIVATION_BUTTONS,
        guId
})

export const selectAll = () => ({
    type: SELECT_ALL
})

export const cancelSelected = () => ({
    type: CANCEL_SELECTED
})


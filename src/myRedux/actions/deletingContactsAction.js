export const ADD_DELETING_CONTACTS_ENABLE_POPUP = 'ADD_DELETING_CONTACTS_ENABLE_POPUP';
export const CANCEL_DELETING_CONTACTS_CLOSE_POPUP = 'CANCEL_DELETING_CONTACTS_CLOSE_POPUP';
export const DELETING_CONTACTS_OPEN_POPUP = 'DELETING_CONTACTS_OPEN_POPUP';


export const addDeletingContactsEnablePopup = (contact) => ({
    type: ADD_DELETING_CONTACTS_ENABLE_POPUP,
    contact
})

export const cancelDeletingContactsClosePopup = () => ({
    type: CANCEL_DELETING_CONTACTS_CLOSE_POPUP
})

export const deletingContactsOpenPopup = () => ({
    type: DELETING_CONTACTS_OPEN_POPUP
})
export const ADD_CONTACTS_ACTIVATION_BUTTONS = 'ADD_CONTACTS_ACTIVATION_BUTTONS';
export const OPEN_DELETING_CONTACTS_POPUP = 'OPEN_DELETING_CONTACTS_POPUP';
export const OPEN_CREATING_EMAIL_LIST_POPUP = 'OPEN_CREATING_EMAIL_LIST_POPUP';
export const CANCEL_CLEAR_CONTACTS_CLOSE_POPUPS = 'CANCEL_CLEAR_CONTACTS_CLOSE_POPUPS';


export const addContactsActivationButtons = (contact) => ({
    type: ADD_CONTACTS_ACTIVATION_BUTTONS,
    contact
})

export const openDeletingContactsPopup = () => ({
    type: OPEN_DELETING_CONTACTS_POPUP
})

export const openCreatingEmailListPopup = () => ({
    type: OPEN_CREATING_EMAIL_LIST_POPUP
})

export const cancelClearContactsClosePopups = () => ({
    type: CANCEL_CLEAR_CONTACTS_CLOSE_POPUPS
})
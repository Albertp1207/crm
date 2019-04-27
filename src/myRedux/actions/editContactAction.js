export const ADD_EDITING_CONTACT_OPEN_POPUP = 'ADD_EDITING_CONTACT_OPEN_POPUP';
export const CANCEL_EDITING_CONTACT_CLOSE_POPUP = 'CANCEL_EDITING_CONTACT_CLOSE_POPUP';


export const addEditingContactOpenPopup = (contact) => ({
    type: ADD_EDITING_CONTACT_OPEN_POPUP,
    contact
})

export const cancelEditingContactClosePopup = () => ({
    type: CANCEL_EDITING_CONTACT_CLOSE_POPUP
})
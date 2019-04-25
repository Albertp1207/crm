export const ADD_APDATING_CONTACT_OPEN_POPUP = 'ADD_APDATING_CONTACT_OPEN_POPUP';
export const CANCEL_APDATING_CONTACT_CLOSE_POPUP = 'CANCEL_APDATING_CONTACT_CLOSE_POPUP';


export const addApdatingContactOpenPopup = (contact) => ({
    type: ADD_APDATING_CONTACT_OPEN_POPUP,
    contact
})

export const cancelApdatingContactClosePopup = () => ({
    type: CANCEL_APDATING_CONTACT_CLOSE_POPUP
})
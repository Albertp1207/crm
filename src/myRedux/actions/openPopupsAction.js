export const OPEN_DELETING_POPUP = 'OPEN_DELETING_POPUP';
export const OPEN_CREATING_EMAIL_LIST_POPUP = 'OPEN_CREATING_EMAIL_LIST_POPUP';
export const CLOSE_POPUPS = 'CLOSE_POPUPS';



export const openDeletingPopup = () => ({
    type: OPEN_DELETING_POPUP
})

export const openCreatingEmailListPopup = () => ({
    type: OPEN_CREATING_EMAIL_LIST_POPUP
})

export const closePopups = () => ({
    type: CLOSE_POPUPS
})
export const OPEN_CREATING_EMAIL_LIST_POPUP = 'OPEN_CREATING_EMAIL_LIST_POPUP';
export const OPEN_ADD_TO_EXISTING_LIST_POPUP = 'OPEN_ADD_TO_EXISTING_LIST_POPUP';
export const OPEN_ADD_NEW_CONTACT_POPUP = 'OPEN_ADD_NEW_CONTACT_POPUP';
export const OPEN_UPLOAD_FILE_POPUP = 'OPEN_UPLOAD_FILE_POPUP';
export const OPEN_DELETING_POPUP = 'OPEN_DELETING_POPUP';
export const CLOSE_POPUPS = 'CLOSE_POPUPS';


export const openCreatingEmailListPopup = () => ({
    type: OPEN_CREATING_EMAIL_LIST_POPUP
})

export const openAddToExistingListPopup = () => ({
    type: OPEN_ADD_TO_EXISTING_LIST_POPUP
})

export const openAddNewContactPopup = () => ({
    type: OPEN_ADD_NEW_CONTACT_POPUP
})

export const openUploadFilePopup = () => ({
    type: OPEN_UPLOAD_FILE_POPUP
})

export const openDeletingPopup = () => ({
    type: OPEN_DELETING_POPUP
})

export const closePopups = () => ({
    type: CLOSE_POPUPS
})
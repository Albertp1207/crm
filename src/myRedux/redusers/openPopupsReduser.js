import {
    OPEN_CREATING_EMAIL_LIST_POPUP,
    OPEN_ADD_TO_EXISTING_LIST_POPUP,
    OPEN_ADD_NEW_CONTACT_POPUP,
    OPEN_UPLOAD_FILE_POPUP,
    OPEN_DELETING_POPUP,
    CLOSE_POPUPS
} from '../actions/openPopupsAction';

const initState = {
    creatingEmailListPopupIsOpen: false,
    addToExistingListIsOpen: false,
    addNewContactIsOpen: false,
    uploadFileIsOpen: false,
    deletingPopupIsOpen: false
};


export default function openPopupsReducer(state = initState, action) {
    // console.log(action);
    
    switch (action.type) {

        case OPEN_CREATING_EMAIL_LIST_POPUP:
            return {
                ...state,
                creatingEmailListPopupIsOpen: true,
            };

        case OPEN_ADD_TO_EXISTING_LIST_POPUP:
            return {
                ...state,
                addToExistingListIsOpen: true
            };

        case OPEN_ADD_NEW_CONTACT_POPUP:
            return {
                ...state,
                addNewContactIsOpen: true
            };

        case OPEN_UPLOAD_FILE_POPUP:
            return {
                ...state,
                uploadFileIsOpen: true
            };

        case OPEN_DELETING_POPUP:
            return {
                ...state,
                deletingPopupIsOpen: true
            };
            
        case CLOSE_POPUPS:
            return {
                creatingEmailListPopupIsOpen: false,
                addToExistingListIsOpen: false,
                addNewContactIsOpen: false,
                uploadFileIsOpen: false,
                deletingPopupIsOpen: false
            };

        default:
            return state;
    }
    
}
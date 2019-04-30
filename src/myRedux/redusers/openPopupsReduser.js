import {
    OPEN_DELETING_POPUP,
    OPEN_CREATING_EMAIL_LIST_POPUP,
    OPEN_ADD_TO_EXISTING_LIST_POPUP,
    CLOSE_POPUPS
} from '../actions/openPopupsAction';

const initState = {
    deletingPopupIsOpen: false,
    creatingEmailListPopupIsOpen: false,
    addToExistingListIsOpen: false
};


export default function openPopupsReducer(state = initState, action) {
    // console.log(action);
    
    switch (action.type) {

        case OPEN_DELETING_POPUP:
            return {
                deletingPopupIsOpen: true,
                creatingEmailListPopupIsOpen: false,
                addToExistingListIsOpen: false
            };

        case OPEN_CREATING_EMAIL_LIST_POPUP:
            return {
                deletingPopupIsOpen: false,
                creatingEmailListPopupIsOpen: true,
                addToExistingListIsOpen: false
            };

        case OPEN_ADD_TO_EXISTING_LIST_POPUP:
            return {
                deletingPopupIsOpen: false,
                creatingEmailListPopupIsOpen: false,
                addToExistingListIsOpen: true
            };
            
        case CLOSE_POPUPS:
            return {
                deletingPopupIsOpen: false,
                creatingEmailListPopupIsOpen: false,
                addToExistingListIsOpen: false
            };

        default:
            return state;
    }

    
}
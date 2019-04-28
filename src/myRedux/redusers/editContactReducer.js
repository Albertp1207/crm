import {
    ADD_EDITING_CONTACT_OPEN_POPUP,
    CANCEL_EDITING_CONTACT_CLOSE_POPUP
} from '../actions/editContactAction';

const initState = {
    editingContact: {},
    editPopupIsOpen: false
};

export default function editingContactPopupReducer(state = initState, action) {
    // console.log(action);
    
    switch (action.type) {
        case ADD_EDITING_CONTACT_OPEN_POPUP:
            return {
                editingContact: action.contact,
                editPopupIsOpen: true
            }

        case CANCEL_EDITING_CONTACT_CLOSE_POPUP:
            return {
                editingContact: {},
                editPopupIsOpen: false
            };
    
        default:
            return state;
    }

    
}
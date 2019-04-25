import {
    ADD_APDATING_CONTACT_OPEN_POPUP,
    CANCEL_APDATING_CONTACT_CLOSE_POPUP
} from '../actions/updateContactAction';

const initState = {
    updatingContact: {},
    updatePopupIsOpen: false
};

export default function updatingContactPopup(state = initState, action) {
    // console.log(action);
    
    switch (action.type) {
        case ADD_APDATING_CONTACT_OPEN_POPUP:
            return {
                updatingContact: action.contact,
                updatePopupIsOpen: true
            }

        case CANCEL_APDATING_CONTACT_CLOSE_POPUP:
            return {
                updatingContact: {},
                updatePopupIsOpen: false
            };
    
        default:
            return state;
    }

    
}
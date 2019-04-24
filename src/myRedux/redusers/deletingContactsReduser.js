import {
    ADD_DELETING_CONTACTS_ENABLE_POPUP,
    CANCEL_DELETING_CONTACTS_CLOSE_POPUP,
    DELETING_CONTACTS_OPEN_POPUP
} from '../actions/deletingContactsAction';

const initState = {
    buttonNotActive: true,
    deletingContactsArr: [],
    popupDeletingIsOpen: false
};
let contactsArr = [];

export function deletingContacts(state = initState, action) {
    // console.log(action);
    
    switch (action.type) {
        case ADD_DELETING_CONTACTS_ENABLE_POPUP:
            if(contactsArr.indexOf(action.contact) === -1 ){
                contactsArr.push(action.contact);
            }else{
                contactsArr = contactsArr.filter(item => {
                    return item !== action.contact;
                });
            }
            // console.log(contactsArr); 
            if (contactsArr.length !== 0) {
                return {
                    ...state,
                    buttonNotActive: false,
                    deletingContactsArr: contactsArr
                };
            }else{
                return {
                    ...state,
                    buttonNotActive: true,
                    deletingContactsArr: []
                };
            }

        case CANCEL_DELETING_CONTACTS_CLOSE_POPUP:
            contactsArr = [];
            return {
                buttonNotActive: true,
                deletingContactsArr: [],
                popupDeletingIsOpen: false
            };

        case DELETING_CONTACTS_OPEN_POPUP:
            return {
                ...state,
                popupDeletingIsOpen: true
            };
    
        default:
            return state;
    }

    
}
import {
    ADD_CONTACTS_ACTIVATION_BUTTONS,
    OPEN_DELETING_CONTACTS_POPUP,
    OPEN_CREATING_EMAIL_LIST_POPUP,
    CANCEL_CLEAR_CONTACTS_CLOSE_POPUPS
} from '../actions/gatherContactsAction';

const initState = {
    collectionContactsArr: [],
    buttonsNotActive: true,
    deletingPopupIsOpen: false,
    creatingEmailListPopupIsOpen: false
};
let contactsArr = [];

export default function gatherContacts(state = initState, action) {
    // console.log(action);
    
    switch (action.type) {
        case ADD_CONTACTS_ACTIVATION_BUTTONS:
            if(contactsArr.indexOf(action.contact) === -1 ){
                contactsArr.push(action.contact);
            }else{
                contactsArr = contactsArr.filter(item => {
                    return item !== action.contact;
                });
            }
            console.log(contactsArr); 
            if (contactsArr.length !== 0) {
                return {
                    ...state,
                    collectionContactsArr: contactsArr,
                    buttonsNotActive: false
                };
            }else{
                return {
                    ...state,
                    collectionContactsArr: [],
                    buttonsNotActive: true
                };
            }

        case OPEN_DELETING_CONTACTS_POPUP:
            return {
                ...state,
                deletingPopupIsOpen: true
            };

        case OPEN_CREATING_EMAIL_LIST_POPUP:
            return {
                ...state,
                creatingEmailListPopupIsOpen: true
            };
            
        case CANCEL_CLEAR_CONTACTS_CLOSE_POPUPS:
            contactsArr = [];
            return {
                collectionContactsArr: [],
                buttonsNotActive: true,
                deletingPopupIsOpen: false,
                creatingEmailListPopupIsOpen: false
            };

        default:
            return state;
    }

    
}
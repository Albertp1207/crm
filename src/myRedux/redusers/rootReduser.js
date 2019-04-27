import sendEmailPopup from "./sendEmailPopupReducer";
import contactsList from './contactsListReduser';
import mailingLists from "./mailingListsReducer";
import gatherContacts from './gatherContactsReduser';
import templates from "./templatesReducer";
import updatingContactPopup from "./editContactReducer";
import tickContacts from "./tickContactsReducer";
import MLContacts from  "./MLContactsReducer";
import editingContactPopup from "./editContactReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    mailingLists,
    sendEmailPopup,
    contactsList,
    gatherContacts,
    templates,
    updatingContactPopup,
    tickContacts,
    MLContacts,
    editingContactPopup
});

export default rootReducer;
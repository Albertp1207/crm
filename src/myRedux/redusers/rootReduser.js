import sendEmailPopup from "./sendEmailPopupReducer";
import contactsList from './contactsListReduser';
import mailingLists from "./mailingListsReducer";
import gatherContacts from './gatherContactsReduser';
import templates from "./templatesReducer";
import editingContactPopup from "./editContactReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    mailingLists,
    sendEmailPopup,
    contactsList,
    gatherContacts,
    templates,
    editingContactPopup
});

export default rootReducer;
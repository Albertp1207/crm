import sendEmailPopup from "./sendEmailPopupReducer";
import contactsList from './contactsListReduser';
import mailingLists from "./mailingListsReducer";
import { deletingContacts } from './deletingContactsReduser';
import templates from "./templatesReducer";
import updatingContactPopup from "./updateContactReducer";
import tickContacts from "./tickContactsReducer";
import MLContacts from  "./MLContactsReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    mailingLists,
    sendEmailPopup,
    contactsList,
    deletingContacts,
    templates,
    updatingContactPopup,
    tickContacts,
    MLContacts
});

export default rootReducer;
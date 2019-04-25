import sendEmailPopup from "./sendEmailPopupReducer";
import contactsList from './contactsListReduser';
import mailingLists from "./mailingListsReducer";
import { deletingContacts } from './deletingContactsReduser';
import templates from "./templatesReducer";
import updatingContactPopup from "./updateContactReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    mailingLists,
    sendEmailPopup,
    contactsList,
    deletingContacts,
    templates,
    updatingContactPopup
});

export default rootReducer;
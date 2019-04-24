import sendEmailPopup from "./sendEmailPopupReducer";
import contactsList from './contactsListReduser';
import mailingLists from "./mailingListsReducer";
import { deletingContacts } from './deletingContactsReduser';
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    mailingLists,
    sendEmailPopup,
    contactsList,
    deletingContacts
});

export default rootReducer;
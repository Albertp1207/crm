import sendEmailPopup from "./sendEmailPopupReducer";
import contactsList from './contactsListReduser';
import mailingLists from "./mailingListsReducer";
import openPopups from './openPopupsReduser';
import templates from "./templatesReducer";
import updatingContactPopup from "./editContactReducer";
import tickContacts from "./tickContactsReducer";
import MLContacts from  "./MLContactsReducer";
import editingContactPopup from "./editContactReducer";
import indicator from "./indicatorReducer";
import submitPopup from "./submitPopupReducer"
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    mailingLists,
    sendEmailPopup,
    contactsList,
    openPopups,
    templates,
    updatingContactPopup,
    tickContacts,
    MLContacts,
    editingContactPopup,
    indicator,
    submitPopup
});

export default rootReducer;
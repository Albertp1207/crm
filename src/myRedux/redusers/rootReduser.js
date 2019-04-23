import sendEmailPopup from "./sendEmailPopupReducer";
import contactsList from './contactsListReduser';
import mailingLists from "./mailingListsReducer";
import templates from "./templatesReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    mailingLists,
    sendEmailPopup,
    contactsList,
    templates
});

export default rootReducer;
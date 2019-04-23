import sendEmailPopup from "./sendEmailPopupReducer";
import contactsList from './contactsListReduser'
import mailingLists from "./mailingListsReducer"
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    mailingLists,
    sendEmailPopup,
    contactsList
});

export default rootReducer;
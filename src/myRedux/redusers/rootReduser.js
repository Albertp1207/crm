import popup from './reduserPopup';
import sendEmailPopup from "./sendEmailPopupReducer";
import contactsList from './contactsListReduser'
import mailingLists from "./mailingListsReducer"
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    popup,
    mailingLists,
    sendEmailPopup,
    contactsList,
    mailingLists
});

export default rootReducer;
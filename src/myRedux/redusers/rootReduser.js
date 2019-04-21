import popup from './reduserPopup';
import contactsList from './contactsListReduser'
import mailingLists from "./mailingListsReducer"
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    popup,
    contactsList,
    mailingLists
});

export default rootReducer;
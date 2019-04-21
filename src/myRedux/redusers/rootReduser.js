import popup from './reduserPopup';
import mailingLists from "./mailingListsReducer";
import sendEmailPopup from "./sendEmailPopupReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    popup,
    mailingLists,
    sendEmailPopup
});

export default rootReducer;
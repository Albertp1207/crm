import popup from './reduserPopup';
import mailingLists from "./mailingListsReducer"
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    popup,
    mailingLists
});

export default rootReducer;
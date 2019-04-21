import {
    OPEN_SEND_EMAIL_POPUP,
    CLOSE_SEND_EMAIL_POPUP
} from "../actions/sendEmailPopupActions/sendEmailPopupActions"

const initState = {
    isOpen:false
};

export default function sendEmailPopupReducer(state = initState,action) {
    switch(action.type) {
        case OPEN_SEND_EMAIL_POPUP:
          return {
            isOpen:true
          };
    
        case CLOSE_SEND_EMAIL_POPUP:
          return {
            isOpen:false
          };
        default:
          return state;
      }
}
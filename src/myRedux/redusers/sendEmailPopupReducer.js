import {
    OPEN_SEND_EMAIL_POPUP,
    CLOSE_SEND_EMAIL_POPUP
} from "../actions/sendEmailPopupActions/sendEmailPopupActions"

const initState = {
    isOpen:false,
    url: null,
    data: null
};

export default function sendEmailPopupReducer(state = initState,action) {
    switch(action.type) {
        case OPEN_SEND_EMAIL_POPUP:
          return {
            isOpen:true,
            withWhat: action.payload.type,
            data: action.payload.data
        };
    
        case CLOSE_SEND_EMAIL_POPUP:
          return {
            isOpen:false,
            withWhat: null,
            data: null
        };
        default:
          return state;
      }
}
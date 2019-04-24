import {
    OPEN_SEND_EMAIL_POPUP,
    CLOSE_SEND_EMAIL_POPUP
} from "../actions/sendEmailPopupActions/sendEmailPopupActions"

const initState = {
  isOpen:false,
  GuIDArr:null,
  mailingListId:null
};

export default function sendEmailPopupReducer(state = initState,action) {    
    // console.log(action);
    switch(action.type) {
        case OPEN_SEND_EMAIL_POPUP:
        const {GuIDArr,mailingListId} = action.payload
          return {
            isOpen:true,
            GuIDArr,
            mailingListId
        };
    
        case CLOSE_SEND_EMAIL_POPUP:
        console.log("CLOSE action");
          return {
            isOpen:false,
            GuIDArr:null,
            mailingListId:null
          };
        default:
          return state;
      }
}


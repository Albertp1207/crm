import {
    OPEN_SUBMIT_POPUP,
    CLOSE_SUBMIT_POPUP
} from "../actions/submitPopupActions/submitPopupActions"

const initState = {
  isOpen:false,
  callback:null,
  link: null
};

export default function submitPopupReducer(state = initState,action) {    
    // console.log(action);
    switch(action.type) {
        case OPEN_SUBMIT_POPUP:
          return {
            isOpen:true,
            callback:action.payload.callback,
            link: action.payload.link
        };
    
        case CLOSE_SUBMIT_POPUP:
          // console.log("CLOSE")
          return {
            isOpen:false,
            callback:null,
            link: null
          }
        default:
          return state;
      }
}


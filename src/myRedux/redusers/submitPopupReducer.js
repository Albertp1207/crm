import {
    OPEN_SUBMIT_POPUP,
    CLOSE_SUBMIT_POPUP,
    DO_CALLBACK
} from "../actions/submitPopupActions/submitPopupActions"

const initState = {
  isOpen:false,
  callback:null,
  args: null
};

export default function submitPopupReducer(state = initState,action) {    
    // console.log(action);
    switch(action.type) {
        case OPEN_SUBMIT_POPUP:
          return {
            isOpen:true,
            callback:action.payload.callback,
            args: action.payload.args
        };
    
        case CLOSE_SUBMIT_POPUP:
          console.log("CLOSE")
          return {
            isOpen:false,
            callback:null,
            args: null
          }
        default:
          return state;
      }
}

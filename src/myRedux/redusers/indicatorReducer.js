import {
    OPEN_INDICATOR,
    CLOSE_INDICATOR,
    SET_CONTENT_INDICATOR
} from "../actions/indicatorActions/indicatorAction"

const initState = {
    specClass: "wait",
    text: "Wait ...",
    isOpen: false
};

export default function indicatorReducer(state = initState,action) {
    switch(action.type) {
        case OPEN_INDICATOR:
          return {
            ...state,
            specClass: "wait",
            isOpen: true
          };
    
        case CLOSE_INDICATOR:
          return {
            specClass: 'wait',
            text: "Wait ...",
            isOpen: false
        };
    
        case SET_CONTENT_INDICATOR:
          return {
            ...state,
            text: action.payload.text,
            specClass: action.payload.specClass
          };
    
        default:
          return state;
      }
}
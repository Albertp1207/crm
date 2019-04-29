import {
    OPEN_INDICATOR,
    CLOSE_INDICATOR,
    SET_CONTENT_INDICATOR
} from "../actions/indicatorActions/indicatorAction"

const initState = {
    bgColor: "yellow",
    text: "Wait ...",
    isOpen: false
};

export default function indicatorReducer(state = initState,action) {
    switch(action.type) {
        case OPEN_INDICATOR:
          return {
            ...state,
            isOpen: true
          };
    
        case CLOSE_INDICATOR:
          return {
            bgColor: "yellow",
            text: "Wait ...",
            isOpen: false
        };
    
        case SET_CONTENT_INDICATOR:
          return {
            ...state,
            text: action.payload.text,
            bgColor: action.payload.bgColor
          };
    
        default:
          return state;
      }
}
import {
    GET_MAILLING_LISTS_BEGIN,
    GET_MAILLING_LISTS_SUCCESS,
    GET_MAILLING_LISTS_FAIL
} from "../actions/mailingListActions/mailingListFetchActions"

const initState = {
    lists: [],
    loading: false,
    error: null
};

export default function mailingListsReducer(state = initState,action) {
    switch(action.type) {
        case GET_MAILLING_LISTS_BEGIN:
          return {
            ...state,
            loading:true,
            error: null
          };
    
        case GET_MAILLING_LISTS_SUCCESS:
          return {
            ...state,
            loading: false,
            lists: action.payload.lists
          };
    
        case GET_MAILLING_LISTS_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            lists: []
          };
    
        default:
          return state;
      }
}
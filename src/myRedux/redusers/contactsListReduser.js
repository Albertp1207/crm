import {
    GET_CONTACTS_LIST_BEGIN,
    GET_CONTACTS_LIST_SUCCESS,
    GET_CONTACTS_LIST_FAIL
} from "../actions/contactsListFetchAction"

const initState = {
    lists: [],
    loading: false,
    error: null
};

export default function contactsListReducer(state = initState, action) {
    switch(action.type) {
        case GET_CONTACTS_LIST_BEGIN:
          return {
            ...state,
            loading: state.lists.length>0? false : true,
            error: null
          };
    
        case GET_CONTACTS_LIST_SUCCESS:
          return {
            ...state,
            loading: false,
            lists: action.payload.lists
          };
    
        case GET_CONTACTS_LIST_FAIL:
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
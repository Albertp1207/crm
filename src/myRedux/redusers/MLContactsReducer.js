import {
    GET_CONTACTS_FOR_ML,
    GET_CONTACTS_FOR_ML_SUCCESS,
    GET_CONTACTS_FOR_ML_FAIL,
    PUT_ML_GUID
} from "../actions/MLContactsActions/MLContactsFetchActions"

const initState = {
    list: [],
    loading: false,
    error: null,
    guID:null
};

export default function MLContactsReducer(state = initState,action) {
    switch(action.type) {
        case GET_CONTACTS_FOR_ML:
          return {
            ...state,
            loading:true,
            error: null
          };
    
        case GET_CONTACTS_FOR_ML_SUCCESS:
       console.log(action.payload)

          return {
            ...state,
            loading: false,
            list: action.payload.list.Contacts
          };
    
        case GET_CONTACTS_FOR_ML_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            list: []
          };
        case PUT_ML_GUID:
          return {
              ...state,
              guID: action.payload.guID
          }
        default:
          return state;
      }
}
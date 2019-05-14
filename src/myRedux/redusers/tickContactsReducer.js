import {
    TICK_CONTACT,
    CLEAR_TICKS,
    PUT_ID
} from "../actions/tickActions/tickContactsML"

const initialState = {
    tickContacts:[],
    MLID:null
}
export default function tickContactsReducer(state = initialState,action) {
    let copyArr = state.tickContacts.slice();
    switch(action.type) {
        case TICK_CONTACT:
            const i = copyArr.indexOf(action.payload.id);
            if(i > -1) {
                copyArr.splice(i,1);
            } else {
                copyArr.push(action.payload.id)
            }
            return {
                ...state,
                tickContacts:copyArr
            }
        case CLEAR_TICKS:
            return {
                tickContacts:[],
                MLID:null
            }
        case PUT_ID:
            return {
                ...state,
                MLID:action.payload.name
            }
            
        default:
          return state;
      }
}
// export default function mailingListsReducer(state = initState,action) {
//     switch(action.type) {
//         case GET_MAILLING_LISTS_BEGIN:
//           return {
//             ...state,
//             loading:true,
//             error: null
//           };
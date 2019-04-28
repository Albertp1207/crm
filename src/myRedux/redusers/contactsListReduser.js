import {
    GET_CONTACTS_LIST_BEGIN,
    GET_CONTACTS_LIST_SUCCESS,
    GET_CONTACTS_LIST_FAIL,
    ADD_SELECTED_CONTACTS_ACTIVATION_BUTTONS
} from "../actions/contactsListFetchAction"

const initState = {
    lists: [],
    loading: false,
    error: null,
    selectedContacts: {},
    collectionSelected: [],
    buttonsNotActive: true,
};

export default function contactsListReducer(state = initState, action) {
    let guIds = {};
    let collectionSel = [];
    // console.log(state.collectionSelected);

    switch(action.type) {

        case GET_CONTACTS_LIST_BEGIN:
          return {
            ...state,
            loading: true,
            error: null
          };

    
        case GET_CONTACTS_LIST_SUCCESS:
          action.payload.lists.forEach(element => {
              if(state.selectedContacts[element.GuID]){
                guIds[element.GuID] = true;
                collectionSel.push(element.GuID);
              }else{
                guIds[element.GuID] = false;
              }
          });
          // console.log(guIds);
        if (collectionSel.length !== 0) {
          return {
            ...state,
            loading: false,
            lists: action.payload.lists,
            selectedContacts: guIds,
            collectionSelected: collectionSel,
            buttonsNotActive: false,
          };
        }else{
          return {
            ...state,
            loading: false,
            lists: action.payload.lists,
            selectedContacts: guIds,
            collectionSelected: collectionSel,
            buttonsNotActive: true,
          };
        }
        
          
    
        case GET_CONTACTS_LIST_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            lists: []
          };

        case ADD_SELECTED_CONTACTS_ACTIVATION_BUTTONS:
          let selectedCon = state.selectedContacts;

          if (selectedCon[action.guId]) {
            selectedCon[action.guId] = false;
          }else{
            selectedCon[action.guId] = true;
          }
          for (const key in selectedCon) {
            if (selectedCon[key]) {
              collectionSel.push(key); 
            }
          }
          // console.log(selectedCon);
          // console.log(collectionSel);
          if (collectionSel.length !== 0) {
            return {
              ...state,
              selectedContacts: selectedCon,
              collectionSelected: collectionSel,
              buttonsNotActive: false,
            }
          }else{
            return {
              ...state,
              selectedContacts: selectedCon,
              collectionSelected: collectionSel,
              buttonsNotActive: true,
            }
          }
          
    
        default:
          return state;
      }
}



// case ADD_CONTACTS_GUID:
// return {
//     ...state,
//     selectedContacts: action.guIds
// };
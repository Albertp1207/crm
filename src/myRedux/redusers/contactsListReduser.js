import {
    GET_CONTACTS_LIST_BEGIN,
    GET_CONTACTS_LIST_SUCCESS,
    GET_CONTACTS_LIST_FAIL,
    ADD_SELECTED_CONTACTS_ACTIVATION_BUTTONS,
    SELECT_ALL,
    CANCEL_SELECTED
} from "../actions/contactsListFetchAction"

const initState = {
    lists: [],
    loading: false,
    error: null,
    selectedContacts: {},
    collectionSelected: [],
    selectAll: false,
    buttonsNotActive: true,
};

export default function contactsListReducer(state = initState, action) {
    let guIds = {};
    let collectionSel = [];
    let selectAllCopy = false;
    let buttonsNotActiveCopy = false;
  
    switch(action.type) {

        case GET_CONTACTS_LIST_BEGIN:
          return {
            ...state,
            loading: true,
            error: null
          };

    
        case GET_CONTACTS_LIST_SUCCESS:
          if (action.payload.lists.length === 0) {
            selectAllCopy = false;
          } else {
            selectAllCopy = true;
            action.payload.lists.forEach(element => {
              if(state.selectedContacts[element.GuID]){
                guIds[element.GuID] = true;
                collectionSel.push(element.GuID);
              }else{
                guIds[element.GuID] = false;
                selectAllCopy = false;
              }
            });
          }
          
          // console.log(guIds);
          if (collectionSel.length !== 0) {
            buttonsNotActiveCopy = false;
          }else{
            buttonsNotActiveCopy = true;
          }
          return {
            ...state,
            loading: false,
            lists: action.payload.lists,
            selectedContacts: guIds,
            collectionSelected: collectionSel,
            selectAll: selectAllCopy,
            buttonsNotActive: buttonsNotActiveCopy
          }
          
    
        case GET_CONTACTS_LIST_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            lists: []
          };


        case ADD_SELECTED_CONTACTS_ACTIVATION_BUTTONS:
          let selectedCon = {...state.selectedContacts};
          selectAllCopy = false;
          
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
          
          if (collectionSel.length !== 0) {
            buttonsNotActiveCopy = false;
          }else{
            buttonsNotActiveCopy = true;
          }
          if (Object.values(selectedCon).every(item => item)) {
            selectAllCopy = true;
          }else{
            selectAllCopy = false;
          }
          return {
            ...state,
            selectedContacts: selectedCon,
            collectionSelected: collectionSel,
            selectAll: selectAllCopy,
            buttonsNotActive: buttonsNotActiveCopy
          }

          
        case SELECT_ALL:
            selectedCon = {...state.selectedContacts};
            // selectAllCopy = !state.selectAll;

            if (Object.keys(selectedCon).length === 0) {
              selectAllCopy = false;
            } else {
              selectAllCopy = !state.selectAll;
              for (let key in selectedCon) {
                selectedCon[key] = selectAllCopy;
                collectionSel.push(key);
              }
            }

            
            
            // console.log(selectedCon);
            return {
              ...state,
              selectedContacts: selectedCon,
              collectionSelected: collectionSel,
              selectAll: selectAllCopy,
              buttonsNotActive: !selectAllCopy
            }


        case CANCEL_SELECTED:
          selectedCon = {...state.selectedContacts};

          for (let key in selectedCon) {
            selectedCon[key] = false;
          }
          return {
            ...state,
            selectedContacts: selectedCon,
            collectionSelected: [],
            selectAll: false,
            buttonsNotActive: true
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
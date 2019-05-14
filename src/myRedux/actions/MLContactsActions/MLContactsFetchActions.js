import myFetch from "../../../tools/fetch";

export const GET_CONTACTS_FOR_ML = "GET_CONTACTS_FOR_ML";
export const GET_CONTACTS_FOR_ML_SUCCESS = "GET_CONTACTS_FOR_ML_SUCCESS";
export const GET_CONTACTS_FOR_ML_FAIL = "GET_CONTACTS_FOR_ML_FAIL";
export const PUT_ML_GUID ="PUT_ML_GUID"

export const getContactsForMLBegin = () => ({
    type: GET_CONTACTS_FOR_ML
})
export const getContactsForMLSuccess = list => ({
    type: GET_CONTACTS_FOR_ML_SUCCESS,
    payload: {list}
})
export const getContactsForMLFail = error => ({
    type: GET_CONTACTS_FOR_ML_FAIL,
    payload: {error}
})

export const putGuID = guID => ({
    type:PUT_ML_GUID,
    payload:{guID}
})


export const getContactsForML = (guID) => {
    // console.log(guID)
    return dispatch => {
        dispatch(getContactsForMLBegin());
        dispatch(putGuID(guID))
        return myFetch(`/emaillists?id=${guID}`,"GET")
            .then(data => {
                // console.log(data)
                dispatch(getContactsForMLSuccess(data))
            })
            .catch(error => dispatch(getContactsForMLFail(error)));        
    };
}

// promise-i mej return aneluc anpayman promise ????

// error..tate update on an unmounted component. This is a no-op
//, but it indicates a memory leak in your application.
// To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
// console...




// getData = () => {
//     myFetch("/emaillists?id="+this.props.match.params.listid,"GET")
//     .then(data=>{
//         console.log("!!!!!!!!!!!!!!!!!!!!!!!!")
//         this.setState({
//             list:data,
//             error:null
//         });
//         this.props.putName(this.props.match.params.listid)

//     })
//     .catch(error=>{
//         this.setState({
//             error:error.message
//         })
//     })
// }
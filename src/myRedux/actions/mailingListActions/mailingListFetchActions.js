import myFetch from "../../../tools/fetch";

export const GET_MAILLING_LISTS_BEGIN = "GET_MAILLING_LISTS_BEGIN"
export const GET_MAILLING_LISTS_SUCCESS = "GET_MAILLING_LISTS_SUCCESS"
export const GET_MAILLING_LISTS_FAIL = "GET_MAILLING_LISTS_FAIL"

export const getMailingListsBegin = () => ({
    type: GET_MAILLING_LISTS_BEGIN
})
export const getMailingListsSuccess = lists => ({
    type: GET_MAILLING_LISTS_SUCCESS,
    payload: {lists}
})
export const getMailingListsFail = error => ({
    type: GET_MAILLING_LISTS_FAIL,
    payload: {error}
})

export const getMailingLists = () => {
    // console.log("ASD_AS_D-")
    return dispatch => {
        dispatch(getMailingListsBegin());
        // console.log("STTSTTs")
        return myFetch("/emaillists","GET")
            .then(data => {
                // console.log(data)
                dispatch(getMailingListsSuccess(data))
            })
            .catch(error => dispatch(getMailingListsFail(error)));
    };
}


export const deleteEmailList = (ev) => {
    return dispatch => {
        const id = ev.target.getAttribute("listid")
        return myFetch("/emaillists?id="+id,"DELETE")
            .then(res=>{
                    dispatch(getMailingLists()) // ?
                    return res
            })
            .catch(err=>console.log(err))
    }
        
}
// promise-i mej return aneluc anpayman promise ????

// error..tate update on an unmounted component. This is a no-op
//, but it indicates a memory leak in your application.
// To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
// console...
import myFetch from "../../tools/fetch";

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
    return dispatch => {
        dispatch(getMailingListsBegin());
        return myFetch("/emaillists","GET")
            .then(data => {
                console.log(data)
                dispatch(getMailingListsSuccess(data))
            })
            .catch(error => dispatch(getMailingListsFail(error)));
    };
}

// promise-i mej return aneluc anpayman promise ????
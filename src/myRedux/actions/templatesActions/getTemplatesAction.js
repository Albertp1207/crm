import myFetch from "../../../tools/fetch";

export const GET_TEMPLATES_BEGIN = "GET_TEMPLATES_BEGIN"
export const GET_TEMPLATES_SUCCESS = "GET_TEMPLATES_SUCCESS"
export const GET_TEMPLATES_FAIL = "GET_TEMPLATES_FAIL"

export const getTemplatesStart = () => ({
    type: GET_TEMPLATES_BEGIN
})
export const getTemplatesSuccess = templates => ({
    type: GET_TEMPLATES_SUCCESS,
    payload: {templates}
})
export const getTemplatesFail = error => ({
    type: GET_TEMPLATES_FAIL,
    payload: {error}
})

export const getTemplates = () => {
    return dispatch => {
        dispatch(getTemplatesStart());
        return myFetch("/templates","GET")
            .then(data => {
                console.log(data)
                dispatch(getTemplatesSuccess(data))
            })
            .catch(error => dispatch(getTemplatesFail(error)));
    };
}
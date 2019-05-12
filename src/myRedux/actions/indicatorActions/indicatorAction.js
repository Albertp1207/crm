
export const OPEN_INDICATOR = "OPEN_INDICATOR"
export const CLOSE_INDICATOR = "CLOSE_INDICATOR"
export const SET_CONTENT_INDICATOR = "SET_CONTENT_INDICATOR"

export const openIndicator = () => ({
    type: OPEN_INDICATOR
})
export const closeIndicator = () => ({
    type: CLOSE_INDICATOR
})
export const setContentIndicator = content => ({
    type: SET_CONTENT_INDICATOR,
    payload: {...content}
})
export const closeIndicatorAsync = (content) => dispatch => {
    // return 
    dispatch(setContentIndicator(content))
    setTimeout(()=>dispatch(closeIndicator()),2000)
}
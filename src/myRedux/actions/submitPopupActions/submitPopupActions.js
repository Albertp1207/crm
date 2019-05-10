export const OPEN_SUBMIT_POPUP = "OPEN_SUBMIT_POPUP";
export const CLOSE_SUBMIT_POPUP = "CLOSE_SUBMIT_POPUP";
export const DO_CALLBACK = "DO_CALLBACK"


export const openSubmitPopup = (callback,link) => ({
    type: OPEN_SUBMIT_POPUP,
    payload: {callback,link}
})
export const closeSubmitPopup = () => ({
    type: CLOSE_SUBMIT_POPUP
})
export const doCallback = () => ({
    type:DO_CALLBACK
})
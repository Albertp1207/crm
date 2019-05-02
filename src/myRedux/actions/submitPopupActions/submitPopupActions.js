export const OPEN_SUBMIT_POPUP = "OPEN_SUBMIT_POPUP";
export const CLOSE_SUBMIT_POPUP = "CLOSE_SUBMIT_POPUP";
export const DO_CALLBACK = "DO_CALLBACK"


export const openSubmitPopup = (callback,args) => ({
    type: OPEN_SUBMIT_POPUP,
    payload: {callback,args}
})
export const closeSubmitPopup = () => ({
    type: CLOSE_SUBMIT_POPUP
})
export const doCallback = () => ({
    type:DO_CALLBACK
})
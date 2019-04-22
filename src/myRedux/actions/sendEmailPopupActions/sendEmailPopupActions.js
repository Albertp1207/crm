export const OPEN_SEND_EMAIL_POPUP = "OPEN_SEND_EMAIL_POPUP";
export const CLOSE_SEND_EMAIL_POPUP = "CLOSE_SEND_EMAIL_POPUP";


export const openSendEmailPopup = (withWhat,data) => ({
    type: OPEN_SEND_EMAIL_POPUP,
    payload:{withWhat,data}
})
export const closeSendEmailPopup = () => ({
    type: CLOSE_SEND_EMAIL_POPUP
})

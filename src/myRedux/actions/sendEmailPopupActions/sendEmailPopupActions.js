export const OPEN_SEND_EMAIL_POPUP = "OPEN_SEND_EMAIL_POPUP";
export const CLOSE_SEND_EMAIL_POPUP = "CLOSE_SEND_EMAIL_POPUP";


export const openSendEmailPopup = (GuIDArr,mailingListId) => ({
    type: OPEN_SEND_EMAIL_POPUP,
    payload:{GuIDArr,mailingListId}
})
export const closeSendEmailPopup = () => ({
    type: CLOSE_SEND_EMAIL_POPUP
})

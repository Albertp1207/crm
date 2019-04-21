import React from "react";

const makeTemaplesList = list => {
    list.map(el => {
        return (
        <div >
            <div><input type = 'checkbox' /></div>
            <div>{list.templateName}</div>
        </div>)
    })
}

export default props => {
    return (
        <div id = "emailSendPopup" className = "popup">
            {makeTemaplesList(props.temaplesList)}
        </div>
    )
}
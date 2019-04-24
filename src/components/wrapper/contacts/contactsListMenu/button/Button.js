import React from "react";

export default (props) => {
    
    const { name, disable, openPopup } = props;
    return (
        <button className ='buttons'  onClick = { openPopup } disabled = { disable }>{ name }</button>
    );
}
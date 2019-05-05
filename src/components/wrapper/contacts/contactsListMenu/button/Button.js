import React from "react";

export default (props) => {
    
    const { name, disable, openPopup, icon } = props;
    return (
        <button className ='buttons'  onClick = { openPopup } disabled = { disable }>
            <span className = 'butIcons'>{icon}</span>
            <span className = 'butName'>{ name }</span>
        </button>
    );
}
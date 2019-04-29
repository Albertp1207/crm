import React from "react";

export default props => {
    return (
        <div className = {"indicator"} style={{backgroundColor:props.bgColor}}>
            <div>
                {props.text}
            </div>
        </div>
    )
}
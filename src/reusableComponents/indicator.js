import React from "react";

export default props => {
    return (
        <div className = {"indicator "+props.specClass}>
            <div>
                {props.text}
            </div>
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
    return (
        <Link to={props.path} className = 'buttons'>
            <span className = 'butIcons'>{props.icon}</span>
            <span className = 'butName'>{ props.name }</span>
        </Link>
    );
}
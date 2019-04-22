import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
    return (
        <Link to={props.path} className = 'buttons'>{ props.name }</Link>
    );
}
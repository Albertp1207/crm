import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default props => (
    <div className="lists">
        <ul>
            {props.lists.map(el=>{
                // console.log(el)
                return (
                    <li key={el.EmailListID} onClick={props.openList} listid={el.EmailListID}>
                        <Link to={"/mailinglist/"+el.EmailListID}>{el.EmailListName}</Link>
                    </li>
                )
            })}
        </ul>
    </div>
)
import React from "react";

export default props => (
    <div className="lists">
        <ul>
            {props.lists.map(el=>{
                console.log(el)
                return (
                    <li onClick={props.openList} listId={el.EmailListID}>{el.EmailListName}</li>
                )
            })}
        </ul>
    </div>
)
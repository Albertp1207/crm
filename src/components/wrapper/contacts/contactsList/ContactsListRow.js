import React from 'react';
import { FaUserEdit } from "react-icons/fa";

export default (props) => {
    const { person } = props;
    
    return (
        <div className = 'contactsListRow'>
            <div><input type = 'checkbox' /></div>
            <div>{ person['Full Name'] }</div>
            <div>{ person['Company Name'] }</div>
            <div>{ person['Position'] }</div>
            <div>{ person['Country'] }</div>
            <div>{ person['Email'] }</div>
            <div><FaUserEdit /></div>
        </div>
    );
}

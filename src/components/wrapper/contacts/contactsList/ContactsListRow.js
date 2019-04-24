import React, { Component } from 'react';
import { FaUserEdit } from "react-icons/fa";

class ContatsListRow extends Component{
    
    render () {
        const { person , colback } = this.props;
        return (
            <div className = 'contactsListRow'>
                <div>
                    <input type = 'checkbox' onClick = { colback } value = {person.GuID} />
                </div>
                <div>{ person['Full Name'] }</div>
                <div>{ person['Company Name'] }</div>
                <div>{ person['Position'] }</div>
                <div>{ person['Country'] }</div>
                <div>{ person['Email'] }</div>
                <div><FaUserEdit /></div>
            </div>
        );
    }
    
}

export default ContatsListRow;

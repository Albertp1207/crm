import React, { Component} from 'react';
import { FaUserEdit } from "react-icons/fa";

class ContactsList extends Component{
    render() {
        // console.log(this.props.person['Country']);
        return (
            
            <div className = 'contacts'>
                
                <div><input type = 'checkbox' /></div>
                <div>{this.props.person['Full Name']}</div>
                <div>{this.props.person['Company Name']}</div>
                <div>{this.props.person['Position']}</div>
                <div>{this.props.person['Country']}</div>
                <div>{this.props.person['Email']}</div>
                <div><FaUserEdit /></div>
            </div>
        );
    }
}

export default ContactsList;
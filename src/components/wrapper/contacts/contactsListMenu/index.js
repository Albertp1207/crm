import React, { Component} from 'react';
import Button from './button/Button';

class ContactsListMenu extends Component{
    render() {
        return (
            <div className = 'contactsListMenu'>
                <Button name = 'Send Email'/>
                <Button name = 'Create Mailing List'/>
                <Button name = 'Add to Existing List'/>
                <Button name = 'Add New Contact'/>
                <Button name = 'Upload File'/>
                <Button name = 'Delete Contact'/>
            </div>
        );
    }
}

export default ContactsListMenu;
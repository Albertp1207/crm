import React, { Component} from 'react';
import Button from './button/Button';

class ContactsListMenu extends Component{
    render() {
        return (
            <div className = 'contactsListMenu'>
                <Button name = 'Send Email' path = '/' />
                <Button name = 'Create Mailing List' path = '/' />
                <Button name = 'Add to Existing List' path = '/' />
                <Button name = 'Add New Contact' path = '/contacts/add_contact' />
                <Button name = 'Upload File' path = '/' />
                <Button name = 'Delete Contact' path = '/' />
            </div>
        );
    }
}

export default ContactsListMenu;
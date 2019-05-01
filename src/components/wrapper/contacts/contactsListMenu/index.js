import React, { Component} from 'react';
import ButtonLink from './button/ButtonLink';
import Button from './button/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openDeletingPopup, openCreatingEmailListPopup, addToExistingListPopup } from '../../../../myRedux/actions/openPopupsAction';
import { openSendEmailPopup } from '../../../../myRedux/actions/sendEmailPopupActions/sendEmailPopupActions';


class ContactsListMenu extends Component{
    openSendEmail = () =>{
        this.props.openSendEmailPopup(this.props.contacts.collectionSelected)
    } 

    render() {
        const { buttonsNotActive } = this.props.contacts;
        return (
            <div className = 'contactsListMenu'>
                <Button name = 'Send Email' openPopup = { this.openSendEmail } disable = { buttonsNotActive } />
                <Button name = 'Create Mailing List' openPopup = { this.props.openCreatingEmailListPopup } disable = { buttonsNotActive } />
                <Button name = 'Add to Existing List' openPopup = { this.props.addToExistingListPopup } disable = { buttonsNotActive } />
                <ButtonLink name = 'Add New Contact' path = '/contacts/add_contact' />
                <ButtonLink name = 'Upload File' path = '/' />
                <Button name = 'Delete Contact' openPopup = { this.props.openDeletingPopup } disable = { buttonsNotActive } />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        contacts: state.contactsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { 
            openDeletingPopup,
            openCreatingEmailListPopup,
            addToExistingListPopup,
            openSendEmailPopup
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListMenu);
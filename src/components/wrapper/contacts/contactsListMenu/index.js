import React, { Component} from 'react';
import ButtonLink from './button/ButtonLink';
import Button from './button/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openDeletingPopup, openCreatingEmailListPopup } from '../../../../myRedux/actions/openPopupsAction';


class ContactsListMenu extends Component{
    render() {
        const { buttonsNotActive } = this.props.contacts;
        return (
            <div className = 'contactsListMenu'>
                <ButtonLink name = 'Send Email' path = '/' />
                <Button name = 'Create Mailing List' openPopup = { this.props.openCreatingEmailListPopup } disable = { buttonsNotActive } />
                <ButtonLink name = 'Add to Existing List' path = '/' />
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
            openCreatingEmailListPopup
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListMenu);
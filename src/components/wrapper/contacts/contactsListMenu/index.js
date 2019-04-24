import React, { Component} from 'react';
import ButtonLink from './button/ButtonLink';
import Button from './button/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deletingContactsOpenPopup } from '../../../../myRedux/actions/deletingContactsAction';


class ContactsListMenu extends Component{
    render() {
        const { buttonNotActive } = this.props.deleting;
        return (
            <div className = 'contactsListMenu'>
                <ButtonLink name = 'Send Email' path = '/' />
                <ButtonLink name = 'Create Mailing List' path = '/' />
                <ButtonLink name = 'Add to Existing List' path = '/' />
                <ButtonLink name = 'Add New Contact' path = '/contacts/add_contact' />
                <ButtonLink name = 'Upload File' path = '/' />
                <Button name = 'Delete Contact' openPopup = { this.props.deletingContactsOpenPopup } disable = { buttonNotActive } />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        deleting: state.deletingContacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { 
            deletingContactsOpenPopup
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListMenu);
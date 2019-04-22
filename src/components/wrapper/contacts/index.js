import React, { Component, Fragment } from 'react';
import ContactsListRow from './contactsList/ContactsListRow';
import ContactsListMenu from './contactsListMenu';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getContactsList } from '../../../myRedux/actions/contactsListFetchAction'

class ContactsList extends Component{
 
    componentDidMount = () => {
        this.props.getContactsList();
    }

    render() {
        // console.log(this.props.contacts);
        const { lists, loading, error } = this.props.contacts;

        if(error) {
            return <div>ERROR --- {error.message}</div>
        }

        if( loading) {
            return <div>Loading ...</div>
        }
        return (
            <Fragment>
                <div className = 'contactsListTable'>
                    <div className = 'contactsListHead'>
                        <div className = 'contactsListRow'>
                            <div>Select</div>
                            <div>Full Name</div>
                            <div>Company Name</div>
                            <div>Position</div>
                            <div>Country</div>
                            <div>Email</div>
                            <div>Edit</div>
                        </div>
                    </div>
                    <div className = 'contactsListBody'>
                        { lists.map( item => <ContactsListRow person = {item} key = {item.GuID}/> )}
                    </div>
                </div>
                <ContactsListMenu />
            </Fragment>
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
            getContactsList
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
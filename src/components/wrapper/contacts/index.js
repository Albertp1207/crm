import React, { Component, Fragment } from 'react';
import ContactsListRow from './contactsList/ContactsListRow';
import ContactsListMenu from './contactsListMenu';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getContactsList, addSelectedContacts, selectAll } from '../../../myRedux/actions/contactsListFetchAction';
import WaitAnimation from '../../../reusableComponents/waitAnimation';

class ContactsList extends Component{
    
    componentDidMount = () => {
        this.props.getContactsList();
        
    }

    getSelectedContacts = (e) => {
        this.props.addSelectedContacts( e.target.value );

    }

    chooseAll = () => {
        // console.log(11);
        this.props.selectAll()
    }

    render() {
        // console.log(this.props.contacts);
        const { lists, loading, error, selectedContacts, selectAll } = this.props.contacts;

        if(error) {
            return <div>ERROR --- {error.message}</div>
        }

        if(loading) {
            return <WaitAnimation />
        }
        return (
            <Fragment>
                <div className = 'contactsListTable'>
                    <div className = 'contactsListHead'>
                        <div className = 'contactsListRow'>
                            <div>
                                <input type = 'checkbox' onChange = { this.chooseAll } checked = { selectAll } id = 'all'/>
                                <label htmlFor="all"></label>
                            </div>
                            <div>Full Name</div>
                            <div>Company Name</div>
                            <div>Position</div>
                            <div>Country</div>
                            <div>Email</div>
                            <div className = 'iconButHead'>Edit</div>
                        </div>
                    </div>
                    <div className = 'contactsListBody'>
                        { lists.map( item => <ContactsListRow 
                                                person = { item } 
                                                colback = { this.getSelectedContacts }
                                                checked = { selectedContacts[item.GuID] }
                                                key = { item.GuID } /> 
                                                )
                        }
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
            getContactsList,
            addSelectedContacts,
            selectAll
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
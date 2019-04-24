import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getContactsList } from '../myRedux/actions/contactsListFetchAction';
import { cancelDeletingContactsClosePopup, deletingContactsOpenPopup } from '../myRedux/actions/deletingContactsAction';
import myFetch from '../tools/fetch';
import WaitAnimation from '../reusableComponents/waitAnimation';



class DeletingPopup extends Component{
    state = {
        wait: false
    }
    deleteContacts = () => {
        const { deletingContactsArr } = this.props.deletingContacts;

        this.setState({wait: true}); 
        
        myFetch('/contacts', 'DELETE', deletingContactsArr)
        .then(res => {
            // console.log(res); 
            this.setState({wait: false}); 
            this.props.getContactsList();
            this.props.cancelDeletingContactsClosePopup();
        })
        .catch(error => console.log(error));        
    }

    deleteCancel = () => {
        this.props.cancelDeletingContactsClosePopup();
        this.props.getContactsList();
    }
    
    render() {
        
        return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>
                        <p>You want to delete the selected contacts ?</p>
                        <div className = 'popupButtons'>
                            <button onClick = { this.deleteContacts }>Ok</button>
                            <button onClick = { this.deleteCancel }>Cancel</button>
                        </div>
                    </div>
                    { this.state.wait? <WaitAnimation />: null }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contactsList,
        deletingContacts: state.deletingContacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { 
            getContactsList,
            cancelDeletingContactsClosePopup,
            deletingContactsOpenPopup
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DeletingPopup);
// export default AddContactPopup;
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getContactsList } from '../myRedux/actions/contactsListFetchAction';
import { openDeletingContactsPopup, cancelClearContactsClosePopups } from '../myRedux/actions/gatherContactsAction';
import myFetch from '../tools/fetch';
import WaitAnimation from '../reusableComponents/waitAnimation';



class DeletingPopup extends Component{
    state = {
        wait: false
    }
    deleteContacts = () => {
        const { collectionContactsArr } = this.props.gatherContacts;

        this.setState({wait: true}); 
        
        myFetch('/contacts', 'DELETE', collectionContactsArr)
        .then(res => {
            // console.log(res); 
            this.setState({wait: false}); 
            this.props.getContactsList();
            this.props.cancelClearContactsClosePopups();
        })
        .catch(error => console.log(error));        
    }

    cancelDeleting = () => {
        this.props.cancelClearContactsClosePopups();
        this.props.getContactsList();
        console.log(this.props.gatherContacts.collectionContactsArr)
    }
    
    render() {
        
        return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>
                        <p>You want to delete the selected contacts ?</p>
                        <div className = 'popupButtons'>
                            <button onClick = { this.deleteContacts }>Ok</button>
                            <button onClick = { this.cancelDeleting }>Cancel</button>
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
        gatherContacts: state.gatherContacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { 
            getContactsList,
            openDeletingContactsPopup, 
            cancelClearContactsClosePopups
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DeletingPopup);
// export default AddContactPopup;
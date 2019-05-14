import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getContactsList } from '../myRedux/actions/contactsListFetchAction';
import { closePopups } from '../myRedux/actions/openPopupsAction';
import myFetch from '../tools/fetch';
import WaitAnimation from '../reusableComponents/waitAnimation';



class DeletingPopup extends Component{
    state = {
        wait: false,
        error: ''
    }
    deleteContacts = () => {
        const { collectionSelected } = this.props.contacts

        this.setState({wait: true}); 
        
        myFetch('/contacts', 'DELETE', collectionSelected)
        .then(res => {
            // console.log(res); 
            this.setState({wait: false}); 
            this.props.getContactsList();
            this.props.closePopups();
        })
        .catch(error => {
            // console.log(error.statusText);
            this.props.getContactsList();
            this.setState({wait: false, error: 'Update the database and try again'});
        });        
    }

    cancelDeleting = () => {
        this.props.closePopups();
        // console.log(this.props.gatherContacts.collectionContactsArr)
    }
    
    render() {
        
        return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>
                        <p>You want to delete the selected contacts?</p>
                        <p>{this.state.error}</p>
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
        contacts: state.contactsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { 
            getContactsList,
            closePopups
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DeletingPopup);
// export default AddContactPopup;
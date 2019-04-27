import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getContactsList } from '../myRedux/actions/contactsListFetchAction';
import { cancelClearContactsClosePopups } from '../myRedux/actions/gatherContactsAction';
import validation from '../tools/validation';
import myFetch from '../tools/fetch';
import WaitAnimation from './waitAnimation';



class CreateMailingList extends Component{
    validation = true;

    state = {
        wait: false,
        error: ''
    }

    createContact = (el) => {
        
        if (validation(el)) {
            this.validation = true;
            el.target.nextSibling.innerHTML = '';
        }else{
            this.validation = false;
            el.target.nextSibling.innerHTML = 'Filled incorrectly';
        }
        
    }

    createMailingList = () => {
        const { collectionContactsArr } = this.props.gatherContacts;
        let mailingList = {
                EmailListName: this.emailListName.value,
                Contacts: collectionContactsArr
            }
        if (this.validation) {
            this.setState({wait: true}); 
        
            myFetch('/emaillists', 'POST', mailingList)
            .then(res => {
                // console.log(res);
                //catch bad request
                if(res.status === 400){
                    this.setState({wait: false, error: 'Check the data and try again'});
                } else {        
                    this.setState({wait: false, error: ''});
                    this.props.getContactsList(); 
                    this.props.cancelClearContactsClosePopups();
                } 
            })
            .catch(error => {
                this.setState({wait: false, error: 'Check the data and try again'});
                console.log(error);
            });
        }
                
    }

    cancelCreating = () => {
        this.props.cancelClearContactsClosePopups();
        this.props.getContactsList();
        console.log(this.props.gatherContacts.collectionContactsArr)
    }
    
    render() {
        
        return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>
                        <div id = 'EmailListName":' >
                            <label>Email List Name </label>
                            <input type = 'text' ref = {el => this.emailListName = el} onChange = { this.createContact } name = 'emailListName' />
                            <p></p>
                        </div>
                        <div>{ this.state.error }</div>
                        <div className = 'popupButtons'>
                            <button onClick = { this.createMailingList }>Create</button>
                            <button onClick = { this.cancelCreating }>Cancel</button>
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
        gatherContacts: state.gatherContacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {  
            getContactsList,
            cancelClearContactsClosePopups
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMailingList);
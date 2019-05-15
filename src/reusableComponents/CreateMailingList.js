import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cancelSelected } from '../myRedux/actions/contactsListFetchAction';
import { closePopups } from '../myRedux/actions/openPopupsAction';
import validation from '../tools/validation';
import myFetch from '../tools/fetch';
import WaitAnimation from './waitAnimation';



class CreateMailingList extends Component{
    validation = false;

    state = {
        wait: false,
        error: '',
        validInput: { msg: '', style: null}
    }

    createListName = (el) => {
        
        if (validation(el)) {
            this.validation = true;
            this.setState({ error: '', validInput: {
                    msg: '', 
                    style: {borderBottom: '2px solid green'}
                }
            });
        }else{
            this.validation = false;
            this.setState({ validInput: {
                    msg: 'Filled incorrectly', 
                    style: {borderBottom: '2px solid #c93131'}
                }
            });
        }
        
    }

    createMailingList = () => {
        const { collectionSelected } = this.props.contacts;
        
        let mailingList = {
                EmailListName: this.emailListName.value,
                Contacts: collectionSelected
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
                    this.props.cancelSelected();
                    this.props.closePopups();
                } 
            })
            .catch(error => {
                this.setState({wait: false, error: 'Check the data and try again'});
                // console.log(error);
            });
        }else{
            this.setState({ validInput: {
                                    msg: 'Filled incorrectly', 
                                    style: {borderBottom: '2px solid #c93131'}
                                }
            });
        }
        
    }

    cancelCreating = () => {
        this.props.closePopups();
    }
    
    render() {
        
        return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>
                        <div id = 'EmailListName":' >
                            <label>Email List Name </label>
                            <input  type = 'text' 
                                    ref = {el => this.emailListName = el} 
                                    onChange = { this.createListName } 
                                    style = { this.state.validInput.style }
                                    name = 'emailListName' 
                            />
                            <p>{ this.state.error }{this.state.validInput.msg}</p>
                        </div>
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
        contacts: state.contactsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {  
            closePopups,
            cancelSelected
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMailingList);

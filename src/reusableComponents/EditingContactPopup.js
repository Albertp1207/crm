import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getContactsList } from '../myRedux/actions/contactsListFetchAction';
import { cancelEditingContactClosePopup } from '../myRedux/actions/editContactAction';
import myFetch from '../tools/fetch';
import validation from '../tools/validation';
import WaitAnimation from './waitAnimation';


class EditingContactPopup extends Component{
    state = {
        wait: false,
        error: '',
        changes: '',
        validAllData: {
            fullName: true,
            companyName: true,
            position: true,
            country: true,
            email: true
        }
    }
    contact = this.props.editingContactPopup.editingContact;
    contactData = {
        FullName: this.contact['Full Name'],
        CompanyName: this.contact['Company Name'],
        Position: this.contact['Position'],
        Country: this.contact['Country'],
        Email: this.contact['Email'],
        GuID: this.contact['GuID']
    };

    wrongStyle = {borderBottom: '2px solid #c93131'};
    rightStyle = {borderBottom: '2px solid green'};
    
    
    changeContact = (el) => {
        const elemName = el.target.getAttribute('name');

        this.setState({changes: ""});

        this.contactData = {
            ...this.contactData,
            FullName: this.fullName.value,
            CompanyName: this.companyName.value,
            Position: this.position.value,
            Country: this.country.value,
            Email: this.email.value,
        };
        if (validation(el)) {
            this.setState({validAllData:{
                    ...this.state.validAllData,
                    [elemName]: true
                }
            });
        }else{
            this.setState({validAllData:{
                    ...this.state.validAllData,
                    [elemName]: false
                }
            });
        }
    }

    
    editContact = () => {
        if(
            this.contactData.FullName !== this.contact['Full Name'] ||
            this.contactData.CompanyName !== this.contact['Company Name'] ||
            this.contactData.Position !== this.contact['Position'] ||
            this.contactData.Country !== this.contact['Country'] ||
            this.contactData.Email !== this.contact['Email']
            ){
                    if(Object.values(this.state.validAllData).every(val => val)){
                        this.setState({wait: true});
                        myFetch('/contacts', 'PUT', this.contactData)
                        .then(res => {
                            // console.log(res); 
                            if(res.status === 400){                //catch bad request
                                this.setState({wait: false, error: 'Check the data and try again'});
                            }else{
                                this.setState({wait: false, error: ''}); 
                                this.props.getContactsList();
                                this.props.cancelEditingContactClosePopup();
                            }
                            
                        })
                        .catch(error => {
                            this.setState({wait: false, error: 'Check the data and try again'});
                            console.log(error);
                        });
                        
                    }
            } else {
                this.setState({changes: "Didn't make a change"});
            }

    }

    cancel = () => {
        this.props.cancelEditingContactClosePopup();
        
    }

    render() {
        const { editingContact } = this.props.editingContactPopup;

        return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>
                        <div id = 'fullName' >
                            <label>Full Name </label>
                            <input  type = 'text' 
                                    defaultValue = { editingContact['Full Name'] }
                                    ref = {el => this.fullName = el} 
                                    onBlur = { this.changeContact } 
                                    style = { this.state.validAllData.fullName? this.rightStyle: this.wrongStyle }
                                    name = 'fullName' 
                                    />
                            <p>{ !this.state.validAllData.fullName? 'Filled incorrectly': null }</p>
                        </div>
                        <div id = 'companyName'>
                            <label>Company Name</label>
                            <input  type = 'text' 
                                    defaultValue = { editingContact['Company Name'] }
                                    ref = {el => this.companyName = el} 
                                    onBlur = { this.changeContact } 
                                    style = { this.state.validAllData.companyName? this.rightStyle: this.wrongStyle }
                                    name = 'companyName'
                                    />
                            <p>{ !this.state.validAllData.companyName? 'Filled incorrectly': null }</p>
                        </div>
                        <div id = 'position'>
                            <label>Position</label>
                            <input  type = 'text' 
                                    defaultValue = { editingContact['Position'] }
                                    ref = {el => this.position = el} 
                                    onBlur = { this.changeContact } 
                                    style = { this.state.validAllData.position? this.rightStyle: this.wrongStyle }
                                    name = 'position'
                                    />
                            <p>{ !this.state.validAllData.position? 'Filled incorrectly': null }</p>
                        </div>
                        <div id = 'country'>
                            <label>Country</label>
                            <input  type = 'text' 
                                    defaultValue = { editingContact['Country'] }
                                    ref = {el => this.country = el} 
                                    onBlur = { this.changeContact } 
                                    style = { this.state.validAllData.country? this.rightStyle: this.wrongStyle }
                                    name = 'country'
                                    />
                            <p>{ !this.state.validAllData.country? 'Filled incorrectly': null }</p>
                        </div>
                        <div id = 'email'>
                            <label>Email</label>
                            <input  type = 'email' 
                                    defaultValue = { editingContact['Email'] }
                                    ref = {el => this.email = el} 
                                    onBlur = { this.changeContact } 
                                    style = { this.state.validAllData.email? this.rightStyle: this.wrongStyle }
                                    name = 'email'
                                    />
                            <p>{ !this.state.validAllData.email? 'Filled incorrectly': null }</p>
                            <p>{this.state.error}{this.state.changes}</p>
                        </div>
                        <div className = 'popupButtons'>
                            <button onClick = { this.editContact }>Save</button>
                            <button onClick = { this.cancel }>Cancel</button>
                        </div>
                        
                    </div>
                    {this.state.wait? <WaitAnimation />: null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        editingContactPopup: state.editingContactPopup
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { 
            getContactsList,
            cancelEditingContactClosePopup
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(EditingContactPopup);
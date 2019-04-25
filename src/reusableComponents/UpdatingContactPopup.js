import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { getContactsList } from '../../myRedux/actions/contactsListFetchAction';
import { cancelApdatingContactClosePopup } from '../myRedux/actions/updateContactAction';
// import myFetch from '../../tools/fetch';
import validation from '../tools/validation';
import WaitAnimation from '../reusableComponents/waitAnimation';


class UpdatingContactPopup extends Component{
    state = {
        cancel: false,
        wait: false,
        error: ''
    }
    contactData = {
        FullName: this.props.updatingContactPopup.updatingContact['Full Name'],
        CompanyName: this.props.updatingContactPopup.updatingContact['Company Name'],
        Position: this.props.updatingContactPopup.updatingContact['Position'],
        Country: this.props.updatingContactPopup.updatingContact['Country'],
        Email: this.props.updatingContactPopup.updatingContact['Email'],
        GuID: this.props.updatingContactPopup.updatingContact['GuID']
    };
    validAllData = {
        fullName: false,
        companyName: false,
        position: false,
        country: false,
        email: false,
    };
    
    changeContact = (el) => {
        // console.log(el.target.getAttribute('name'),el.target.value );
        this.contactData = {
            FullName: this.fullName.value,
            CompanyName: this.companyName.value,
            Position: this.position.value,
            Country: this.country.value,
            Email: this.email.value,
        };
        if (validation(el)) {
            this.validAllData[el.target.getAttribute('name')] = true;
            el.target.nextSibling.innerHTML = '';
        }else{
            this.validAllData[el.target.getAttribute('name')] = false;
            el.target.nextSibling.innerHTML = 'Filled incorrectly';
        }
        // console.log(this.validAllData);
    }

    // sendContact = () => {
        
    //     if(Object.values(this.validAllData).every(val => val)){
    //         this.setState({wait: true});
    //         myFetch('/contacts', 'POST', this.contactData)
    //         .then(res => {
    //             console.log(res); 
    //             if(res.status === 400){                //catch bad request
    //                 this.setState({wait: false, error: 'Check the data and try again'});
    //             }else{
    //                 this.setState({wait: false, cancel: true, error: ''}); 
    //                 this.props.getContactsList();
    //             }
                
    //         })
    //         .catch(error => console.log(error));
            
    //     } else {
    //         for (let key in this.validAllData) {
    //             // console.log(this.validAllDatay[key]);
    //             if (!this.validAllData[key]) {
    //                 document.getElementsByName(key)[0].nextSibling.innerHTML = 'Filled incorrectly';
                    
    //             }
    //         }
    //     }
    // }
    updateContact = () => {
        if (Object.values(this.validAllData).some(val => val)) {
            
        }
        console.log(this.contactData)
    }

    cancel = () => {
        this.props.cancelApdatingContactClosePopup();
        
    }

    render() {
        const { updatingContact } = this.props.updatingContactPopup;

        return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>
                        <div id = 'fullName' >
                            <label>Full Name </label>
                            <input  type = 'text' 
                                    defaultValue = { updatingContact['Full Name'] }
                                    ref = {el => this.fullName = el} 
                                    onBlur = { this.changeContact } 
                                    name = 'fullName' 
                                    />
                            <p></p>
                        </div>
                        <div id = 'companyName'>
                            <label>Company Name</label>
                            <input  type = 'text' 
                                    defaultValue = { updatingContact['Company Name'] }
                                    ref = {el => this.companyName = el} 
                                    onBlur = { this.changeContact } 
                                    name = 'companyName'
                                    />
                            <p></p>
                        </div>
                        <div id = 'position'>
                            <label>Position</label>
                            <input  type = 'text' 
                                    defaultValue = { updatingContact['Position'] }
                                    ref = {el => this.position = el} 
                                    onBlur = { this.changeContact } 
                                    name = 'position'
                                    />
                            <p></p>
                        </div>
                        <div id = 'country'>
                            <label>Country</label>
                            <input  type = 'text' 
                                    defaultValue = { updatingContact['Country'] }
                                    ref = {el => this.country = el} 
                                    onBlur = { this.changeContact } 
                                    name = 'country'
                                    />
                            <p></p>
                        </div>
                        <div id = 'email'>
                            <label>Email</label>
                            <input  type = 'email' 
                                    defaultValue = { updatingContact['Email'] }
                                    ref = {el => this.email = el} 
                                    onBlur = { this.changeContact } 
                                    name = 'email'
                                    />
                            <p>{this.state.error}</p>
                        </div>
                        <div className = 'popupButtons'>
                            <button onClick = { this.updateContact }>Save</button>
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
        updatingContactPopup: state.updatingContactPopup
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { 
            cancelApdatingContactClosePopup
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatingContactPopup);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getContactsList } from '../myRedux/actions/contactsListFetchAction';
import { closePopups } from '../myRedux/actions/openPopupsAction';
import myFetch from '../tools/fetch';
import validation from '../tools/validation';
import WaitAnimation from '../reusableComponents/waitAnimation';


class AddContactPopup extends Component{
    state = {
        wait: false,
        error: ''
    }
    contactData = {
        FullName: '',
        CompanyName: '',
        Position: '',
        Country: '',
        Email: '',
    };
    validAllData = {
        fullName: false,
        companyName: false,
        position: false,
        country: false,
        email: false,
    };
    
    createContact = (el) => {
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
            el.target.style.borderBottom = '2px solid green'
        }else{
            this.validAllData[el.target.getAttribute('name')] = false;
            el.target.nextSibling.innerHTML = 'Filled incorrectly';
            el.target.style.borderBottom = '2px solid #c93131'
        }
        // console.log(this.validAllData);
    }

    sendContact = () => {
        
        if(Object.values(this.validAllData).every(val => val)){
            this.setState({wait: true, error: ''});
            myFetch('/contacts', 'POST', this.contactData)
            .then(res => {
                // console.log(res); 
                if(res.status === 400){                //catch bad request
                    this.setState({wait: false, error: 'Check the data and try again'});
                }else{
                    this.setState({wait: false, error: ''}); 
                    this.props.getContactsList();
                    this.props.closePopups();
                }
                
            })
            .catch(error => {
                this.setState({wait: false, error: 'Check the data and try again'});
                console.log(error);
            });
            
        } else {
            for (let key in this.validAllData) {
                // console.log(this.validAllDatay[key]);
                if (!this.validAllData[key]) {
                    document.getElementsByName(key)[0].nextSibling.innerHTML = 'Filled incorrectly';
                    document.getElementsByName(key)[0].style.borderBottom = '2px solid red'
                }
            }
        }
    }

    cancel = () => {
        this.props.closePopups();
        
    }

    render() {
                
        return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>
                        <div id = 'fullName' >
                            <label>Full Name </label>
                            <input type = 'text' ref = {el => this.fullName = el} onBlur = { this.createContact } name = 'fullName' />
                            <p></p>
                        </div>
                        <div id = 'companyName'>
                            <label>Company Name</label>
                            <input type = 'text' ref = {el => this.companyName = el} onBlur = { this.createContact } name = 'companyName'/>
                            <p></p>
                        </div>
                        <div id = 'position'>
                            <label>Position</label>
                            <input type = 'text' ref = {el => this.position = el} onBlur = { this.createContact } name = 'position'/>
                            <p></p>
                        </div>
                        <div id = 'country'>
                            <label>Country</label>
                            <input type = 'text' ref = {el => this.country = el} onBlur = { this.createContact } name = 'country'/>
                            <p></p>
                        </div>
                        <div id = 'email'>
                            <label>Email</label>
                            <input type = 'email' ref = {el => this.email = el} onBlur = { this.createContact } name = 'email'/>
                            <p>{this.state.error}</p>
                        </div>
                        <div className = 'popupButtons'>
                            <button onClick = { this.sendContact }>Add</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddContactPopup);
// export default AddContactPopup;
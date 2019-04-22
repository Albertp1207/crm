import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import myFetch from '../../tools/fetch';
import validation from '../../tools/validation';

class AddContactPopup extends Component{
    state = {
        cancle: false
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
        console.log(el.target.getAttribute('name'),el.target.value );
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

    sendContact = () => {
        if(Object.values(this.validAllData).every(val => val)){
            myFetch('/contacts', 'POST', this.contactData)
            .catch(error => console.log(error));
            this.setState({cancle: true});
        } else {
            for (let key in this.validAllData) {
                // console.log(this.validAllDatay[key]);
                if (!this.validAllData[key]) {
                    document.getElementsByName(key)[0].nextSibling.innerHTML = 'Filled incorrectly';
                    
                }
            }
        }
    }

    cancle = () => {
        this.setState({cancle: true})
        
    }

    render() {
        if (this.state.cancle) {
            return <Redirect from = '/contacts/add_contact' to='/contacts'  />;
        }
        
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
                            <p></p>
                        </div>
                        <div className = 'popupButtons'>
                            <button onClick = { this.sendContact }>Add</button>
                            <button onClick = { this.cancle }>Cancle</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddContactPopup;
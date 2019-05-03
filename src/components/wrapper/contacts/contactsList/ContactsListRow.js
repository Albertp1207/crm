import React, { Component } from 'react';
import { FaUserEdit } from "react-icons/fa";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addEditingContactOpenPopup } from '../../../../myRedux/actions/editContactAction';

class ContatsListRow extends Component{

    chooseContact = () => {
        let editingContact = '';
        
        for (let value of this.props.contacts.lists) {
            if (value.GuID === this.iconButId) {
                editingContact = value;
                break;
            }
        }
        this.props.addEditingContactOpenPopup(editingContact);
        // console.log(updatingContact);
    }
    
    render () {
        const { person, colback, checked } = this.props;
        return (
            <div className = 'contactsListRow'>
                <div>
                    <input type = 'checkbox' onChange = { colback } value = {person.GuID} checked = { checked } id={person.GuID}/>
                    <label htmlFor={person.GuID}></label>
                </div>
                <div>{ person['Full Name'] }</div>
                <div>{ person['Company Name'] }</div>
                <div>{ person['Position'] }</div>
                <div>{ person['Country'] }</div>
                <div>{ person['Email'] }</div>
                <div className = 'iconBut' ref = {e => this.iconButId = person.GuID} onClick = {this.chooseContact}><FaUserEdit /></div>
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
            addEditingContactOpenPopup
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContatsListRow);

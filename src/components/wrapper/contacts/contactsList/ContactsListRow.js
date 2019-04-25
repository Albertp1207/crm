import React, { Component } from 'react';
import { FaUserEdit } from "react-icons/fa";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addApdatingContactOpenPopup } from '../../../../myRedux/actions/updateContactAction';

class ContatsListRow extends Component{

    chooseContact = () => {
        let updatingContact = '';
        
        for (let value of this.props.contacts.lists) {
            if (value.GuID === this.iconButId) {
                updatingContact = value;
                break;
            }
        }
        this.props.addApdatingContactOpenPopup(updatingContact);
        // console.log(updatingContact);
    }
    
    render () {
        const { person , colback } = this.props;
        return (
            <div className = 'contactsListRow'>
                <div>
                    <input type = 'checkbox' onClick = { colback } value = {person.GuID} />
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
            addApdatingContactOpenPopup
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContatsListRow);

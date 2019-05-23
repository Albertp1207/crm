import React, { Component} from 'react';
// import ButtonLink from './button/ButtonLink';
import Button from './button/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openCreatingEmailListPopup,
        openAddToExistingListPopup,
        openAddNewContactPopup,
        openUploadFilePopup, 
        openDeletingPopup 
        } from '../../../../myRedux/actions/openPopupsAction';
import { openSendEmailPopup } from '../../../../myRedux/actions/sendEmailPopupActions/sendEmailPopupActions';
import { IoIosSend, IoMdCreate, IoMdAdd, IoMdPersonAdd } from "react-icons/io";
// import { FaFileUpload, FaTrashAlt } from "react-icons/fa";
import { MdClear } from "react-icons/md";
// import { FiUpload } from "react-icons/fi";



class ContactsListMenu extends Component{
    openSendEmail = () =>{
        this.props.openSendEmailPopup(this.props.contacts.collectionSelected)
    } 

    render() {
        const { buttonsNotActive } = this.props.contacts;
        return (
            <div className = 'buttonsContainer'>
                <Button name = 'Send Email' openPopup = { this.openSendEmail } disable = { buttonsNotActive } icon = {<IoIosSend />} />
                <Button name = 'Create Mailing List' openPopup = { this.props.openCreatingEmailListPopup } disable = { buttonsNotActive } icon = {<IoMdCreate />} />
                <Button name = 'Add to Existing List' openPopup = { this.props.openAddToExistingListPopup } disable = { buttonsNotActive } icon = {<IoMdAdd />}/>
                <Button name = 'Add New Contact' openPopup = { this.props.openAddNewContactPopup }  icon = {<IoMdPersonAdd />} />
                {/* <Button name = 'Upload File' openPopup = { this.props.openUploadFilePopup }  icon = {<FiUpload />} /> */}
                <Button name = 'Delete Contact' openPopup = { this.props.openDeletingPopup } disable = { buttonsNotActive } icon = {<MdClear />} />
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
            openSendEmailPopup,
            openCreatingEmailListPopup,
            openAddToExistingListPopup,
            openAddNewContactPopup,
            openUploadFilePopup,
            openDeletingPopup
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListMenu);
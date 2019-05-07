import React,{Component} from "react";
import Menu from "./menu";
import Wrapper from "./wrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/index.sass';
import logo from '../styles/images/logo3.png';
import AddContactPopup from '../reusableComponents/AddContactPopup';
import DeletingPopup from '../reusableComponents/DeletingPopup';
import { connect } from 'react-redux';
import EditingContactPopup from '../reusableComponents/EditingContactPopup';
import CreateMailingList from '../reusableComponents/CreateMailingList';
import Indicator from "../reusableComponents/indicator";
import SubmitPopup from "../reusableComponents/SubmitPopup"
import AddToExistingList from "../reusableComponents/AddToExistingListPopup";
import EmailSendPopup from '../reusableComponents/emailSendPopup';
import UploadFilePopup from '../reusableComponents/UploadFilePopup';

class App extends Component{
    render(){
        const { deletingPopupIsOpen, creatingEmailListPopupIsOpen, addToExistingListIsOpen } = this.props.openPopups;
        const { editPopupIsOpen } = this.props.editingContactPopup;
        // const {bgColor,isOpen,text} = this.props.indicator;
        const {isOpen} = this.props.submitPopup
        const {bgColor,text} = this.props.indicator;
        const isOpenIndicator = this.props.indicator.isOpen
        const {isOpenSendEmailPopup} = this.props;
        return (
            <Router>
                <div className="main">
                    <div className="header">
                        <div className = 'size'>
                            <div id = 'logo'>
                                <Link to="/contacts">
                                    <img src = {logo} alt = 'logo'/>
                                </Link>
                            </div>
                            <h1>C<span>ustomer</span> R<span>elationship</span> M<span>anagement</span></h1>
                        </div>
                    </div>
                    <section>
                        <Menu />
                        <div id = 'container'>
                            <Wrapper />  
                        </div>
                    </section>
                </div>
                <Route path = '/contacts/add_contact' component = { AddContactPopup } />
                <Route path = '/contacts/uplaod_file' component = { UploadFilePopup } />
                { creatingEmailListPopupIsOpen ? < CreateMailingList />: null}
                { addToExistingListIsOpen ? < AddToExistingList />: null}
                { deletingPopupIsOpen ? < DeletingPopup />: null }
                { editPopupIsOpen ? < EditingContactPopup />: null}
                {isOpen ? <SubmitPopup /> : null}
                { isOpenIndicator ?<Indicator bgColor = {bgColor} text = {text}/> : null}
                { isOpenSendEmailPopup ? <EmailSendPopup/> : null }
            </Router>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        openPopups: state.openPopups,
        editingContactPopup: state.editingContactPopup,
        indicator: state.indicator,
        submitPopup: state.submitPopup,
        isOpenSendEmailPopup: state.sendEmailPopup.isOpen
    }
}


export default connect(mapStateToProps)(App);
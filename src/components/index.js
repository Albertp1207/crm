import React,{Component} from "react";
import Menu from "./menu";
import Wrapper from "./wrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/index.sass';
import logo from '../styles/images/logo.png';
import AddContactPopup from './popups/AddContactPopup';
import DeletingPopup from '../reusableComponents/DeletingPopup';
import { connect } from 'react-redux';
import EditingContactPopup from '../reusableComponents/EditingContactPopup';
import CreateMailingList from '../reusableComponents/CreateMailingList';
import Indicator from "../reusableComponents/indicator";
import AddToExistingList from "../reusableComponents/AddToExistingListPopup";
import EmailSendPopup from '../reusableComponents/emailSendPopup';

class App extends Component{
    render(){
        const { deletingPopupIsOpen, creatingEmailListPopupIsOpen, addToExistingListIsOpen } = this.props.openPopups;
        const { editPopupIsOpen } = this.props.editingContactPopup;
        const {bgColor,isOpen,text} = this.props.indicator;
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
                { creatingEmailListPopupIsOpen ? < CreateMailingList />: null}
                { addToExistingListIsOpen ? < AddToExistingList />: null}
                { deletingPopupIsOpen ? < DeletingPopup />: null }
                { editPopupIsOpen ? < EditingContactPopup />: null}
                { isOpen ?<Indicator bgColor = {bgColor} text = {text}/> : null}
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
        isOpenSendEmailPopup: state.sendEmailPopup.isOpen
    }
}


export default connect(mapStateToProps)(App);
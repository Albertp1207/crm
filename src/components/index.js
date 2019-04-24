import React,{Component} from "react";
import Menu from "./menu";
import Wrapper from "./wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../styles/index.sass';
import logo from '../styles/images/logo.png';
import AddContactPopup from './popups/AddContactPopup';
import DeletingPopup from '../reusableComponents/DeletingPopup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { popupDeletingContacts } from '../myRedux/actions/deletingContactsAction';



class App extends Component{
    render(){
        const { popupDeletingIsOpen } = this.props.deletingContacts;

        return (
            <Router>
                <div className="main">
                    <div className="header">
                        <div className = 'size'>
                            <div id = 'logo'>
                                <a href = '#'>
                                    <img src = {logo} alt = 'logo'/>
                                </a>
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
                { popupDeletingIsOpen ? < DeletingPopup />: null }
            </Router>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        deletingContacts: state.deletingContacts
    }
}


export default connect(mapStateToProps)(App);
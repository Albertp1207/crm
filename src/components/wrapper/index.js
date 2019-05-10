import React,{ Component } from "react";
import { Route,Redirect } from "react-router-dom";
import ContactsList from './contacts';
import MailingList from "./mailingList";

class Wrapper extends Component{

    render(){
        return (
            <div id = 'wrapper'>

                <Route path = "/contacts" component = { ContactsList } />
                <Route path = "/mailinglist" component={ MailingList }  />
                <Route path ="/"  render = {props=> <Redirect to="contacts" />} exact /> 
                
            </div>
        )
    }
        
}

export default Wrapper;
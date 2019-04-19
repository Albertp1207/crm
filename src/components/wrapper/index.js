import React,{ Component } from "react";
import { Route } from "react-router-dom";
import Contacts from './contacts';
import MailingList from "./mailingList";

class Wrapper extends Component{

    render(){
        return (
            <div id = 'wrapper'>

                <Route path = "/contacts" component = {Contacts} />
                <Route path = "/mailinglist" component={MailingList}  />
                
                
            </div>
        )
    }
        
}

export default Wrapper;
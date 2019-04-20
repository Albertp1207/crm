<<<<<<< HEAD
import React,{ Component } from "react";
import { Route } from "react-router-dom";
=======
import React,{Component} from "react";
import {Route} from "react-router-dom";
>>>>>>> 6992e8500dba4f576599b2960b88fe80bc7313a7
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
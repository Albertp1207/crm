import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
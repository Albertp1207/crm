import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MailingList from "./mailingList"
class Wrapper extends Component{
    render(){
        return (
            <div>
            <h1>WRAPPER</h1>

            <Route path = "/mailinglist" component={MailingList}  />
            <Route path = "/contacts" render={(props) => (
            <h1>Contacts</h1>
            )}  />
            </div>
        )
    }
        
}

export default Wrapper;
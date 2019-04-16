import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Wrapper extends Component{
    render(){
        return (
            <div>
            <h1>WRAPPER</h1>

            <Route path = "/mailinglist" render={(props) => (
                <h1>MAILINGLIST</h1>
              )}  />
            <Route path = "/contacts" render={(props) => (
            <h1>Contacts</h1>
            )}  />
            </div>
        )
    }
        
}

export default Wrapper;
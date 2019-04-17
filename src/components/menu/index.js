import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

class Menu extends Component{
    render(){
        return (
            <div id="mainMenu">
                <div className = 'itemMenu contacts'>
                    <Link to="/contacts">
                        <FaUsers />
                        <span>Contacts</span>
                    </Link>                    
                </div>
                <div className = 'itemMenu mailingList'>
                    <Link to="/mailinglist">
                        <IoIosSend /> 
                        <span>Mailinglist</span>
                    </Link>                    
                </div>
                 
                
            </div>
        )
    }
        
}

export default Menu;
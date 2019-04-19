import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

class Menu extends Component{
    render(){
        return (
            <div id="mainMenu">
                <div className = 'itemMenu contactsMenu'>
                    <Link to="/contacts">
                        <FaUsers />
                    </Link>                    
                </div>
                <div className = 'itemMenu mailingList'>
                    <Link to="/mailinglist">
                        <IoIosSend /> 
                    </Link>                    
                </div>
                 
                
            </div>
        )
    }
        
}

export default Menu;
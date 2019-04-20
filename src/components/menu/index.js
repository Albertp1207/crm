import React,{Component} from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import {Link } from "react-router-dom";
>>>>>>> 6992e8500dba4f576599b2960b88fe80bc7313a7
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
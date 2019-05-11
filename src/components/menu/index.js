import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
// variable in module or in class ?
class Menu extends Component{
    activeStyle = {
            pointerEvents: "none",
            cursor: "default",
            color: "grey"     
    }
    render(){
        return (
            <div id="mainMenu">
                <div className = 'itemMenu contactsMenu' title = 'Contacts'>
                    <NavLink activeStyle={this.activeStyle} to="/contacts">
                        <FaUsers />
                    </NavLink>                    
                </div>
                <div className = 'itemMenu mailingList' title = 'Mailing List'>
                    <NavLink activeStyle={this.activeStyle} to="/mailinglist">
                        <IoIosSend /> 
                    </NavLink>                    
                </div>
                 
                
            </div>
        )
    }
        
}

export default Menu;
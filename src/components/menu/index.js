import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component{
    render(){
        return (
            <div className="mainMenu">
                <div>
                    <Link to="/mailinglist">mailinglist</Link>                    
                </div>
                 <div>
                    <Link to="/contacts">contacts</Link>                    
                </div>
            </div>
        )
    }
        
}

export default Menu;
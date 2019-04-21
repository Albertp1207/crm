import React,{Component} from "react";
import {Route} from "react-router-dom";
import VisibleLists from "./lists";
import List from "./list";
import Menu from "./menu"

class MailingList extends Component {
    render(){
        return (
            <div className="mailinglist">
            
                <VisibleLists /> 
                <Route path='/mailinglist/:listid' component = {List} />
                <Menu />
                {/* <List /> */}
            </div>
        )
    }
}

export default MailingList

//komponent@ jnjum enq, en vijak@ vor@ menak iran er petq mnuma !? 
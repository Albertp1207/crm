import React,{Component} from "react";
import {Route} from "react-router-dom";
import VisibleLists from "./lists";
import List from "./list";
import Menu from "./menu"
import { connect } from 'react-redux'

class MailingList extends Component {
    render(){
        return (
            <div className="mailinglist">
            
                <VisibleLists /> 
                <div className = 'mailinglistTable'>
                    <Route path='/mailinglist/:listid' component = {List} />
                </div>
                <Menu />
                
                
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isOpenSendEmailPopup: state.sendEmailPopup.isOpen
})

export default connect(mapStateToProps)(MailingList);

//komponent@ jnjum enq, en vijak@ vor@ menak iran er petq mnuma !? 
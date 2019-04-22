import React,{Component} from "react";
import {Route} from "react-router-dom";
import VisibleLists from "./lists";
import List from "./list";
import Menu from "./menu"
import { connect } from 'react-redux'
import EmailSendPopup from "../../../reusableComponents/emailSendPopup"

class MailingList extends Component {
    render(){
        let {isOpenSendEmailPopup} = this.props;

        return (
            <div className="mailinglist">
            
                <VisibleLists /> 
                <Route path='/mailinglist/:listid' component = {List} />
                <Menu />
                {isOpenSendEmailPopup ? <EmailSendPopup/> : null }
                
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isOpenSendEmailPopup: state.sendEmailPopup.isOpen
})

export default connect(mapStateToProps)(MailingList);

//komponent@ jnjum enq, en vijak@ vor@ menak iran er petq mnuma !? 
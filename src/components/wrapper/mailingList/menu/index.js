//delete checks
// send,delete list
// add new list

import React,{Component} from "react";
import myFetch from "../../../../tools/addOrDeleteContactsFromML";
import {getContactsForML} from "../../../../myRedux/actions/MLContactsActions/MLContactsFetchActions"
import {openSendEmailPopup} from "../../../../myRedux/actions/sendEmailPopupActions/sendEmailPopupActions"
import {connect} from "react-redux";


class Menu extends Component{
    deleteContactsFromML = ()=> {
        myFetch(this.props.tickContacts,false,this.props.MLID)
            .then(res=>{
                if(res.ok) {
                    this.props.getContactsForML(this.props.MLID);
                }
            })
            .catch(error=>console.log(error))
    }// sxaaaaaaaaaaaal
    render(){
        return (
            <div id="menu">
                <div>asdsd
                    <button onClick = {this.deleteContactsFromML}>Delete checkeds</button>
                    <button onClick = {this.props.createML}>Create mailing list</button>  
                    <button onClick = {()=>this.props.openSendEmailPopup(this.props.tickContacts)}>send for checkeds contacts</button> 
                    {/* <button onClick = {this.props.send}>Send</button>        */}
                </div>
            </div>
        )
    }
        
}
// porcnakan menu-um
const mapStateToProps = state => {
    // console.log(state.tickContacts)
    return {
        tickContacts: state.tickContacts.tickContacts,
        MLID: state.tickContacts.MLID
    }
}

const mapDispatchToProps = dispatch => ({
    getContactsForML: (id)=>dispatch(getContactsForML(id)),
    openSendEmailPopup: (guIDArr)=> dispatch(openSendEmailPopup(guIDArr))
})
// after delete update, redux....

export default connect(mapStateToProps,mapDispatchToProps)(Menu);
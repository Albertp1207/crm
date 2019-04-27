//delete checks
// send,delete list
// add new list

import React,{Component} from "react";
import myFetch from "../../../../tools/addOrDeleteContactsFromML";
import {connect} from "react-redux";


class Menu extends Component{
    deleteContactsFromML = ()=> {
        myFetch(this.props.tickContacts,false,this.props.mailingListName)
            .then(res=>{
                if(res.ok) {

                }
            })
    }// sxaaaaaaaaaaaal
    render(){
        return (
            <div id="menu">
                <div>asdsd
                    <button onClick = {this.deleteContactsFromML}>Delete checkeds</button>
                    <button onClick = {this.props.createML}>Create mailing list</button>   
                    {/* <button onClick = {this.props.send}>Send</button>        */}
                </div>
            </div>
        )
    }
        
}
// porcnakan menu-um
const mapStateToProps = state => {
    return {
        tickContacts: state.tickContacts.tickContacts,
        mailingListName: state.tickContacts.mailingListName
    }
}
// after delete update, redux....

export default connect(mapStateToProps)(Menu);
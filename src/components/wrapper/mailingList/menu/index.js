import React,{Component} from "react";
import myFetch from "../../../../tools/addOrDeleteContactsFromML";
import {getContactsForML} from "../../../../myRedux/actions/MLContactsActions/MLContactsFetchActions"
import {openSendEmailPopup} from "../../../../myRedux/actions/sendEmailPopupActions/sendEmailPopupActions"
import {openSubmitPopup} from "../../../../myRedux/actions/submitPopupActions/submitPopupActions"
import {connect} from "react-redux";
import {IoMdRemoveCircleOutline,IoIosSend} from "react-icons/io";

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
        const isActive = this.props.tickContacts.length > 0;
        return (
            <div id="menu">
                <div className = "buttonsContainer">
                    <button className="buttons" onClick = {()=>this.props.openSubmitPopup(this.deleteContactsFromML)} disabled={!isActive}>
                        <span className = "butIcons"><IoMdRemoveCircleOutline/></span>
                        <span className = "butName ">Delete Checkeds</span>
                    </button>
                    <button className="buttons" onClick = {()=>this.props.openSendEmailPopup(this.props.tickContacts)} disabled={!isActive}>
                        <span className = "butIcons"><IoIosSend/></span>
                        <span className = "butName ">Send for Checkeds</span>
                    </button> 
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
    openSendEmailPopup: (guIDArr)=> dispatch(openSendEmailPopup(guIDArr)),
    openSubmitPopup: f => {
        dispatch(openSubmitPopup(f))
    }
})
// after delete update, redux....

export default connect(mapStateToProps,mapDispatchToProps)(Menu);
import React,{Component} from "react";
import {NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {getMailingLists,deleteEmailList} from "../../../../myRedux/actions/mailingListActions/mailingListFetchActions";
import {openSendEmailPopup} from "../../../../myRedux/actions/sendEmailPopupActions/sendEmailPopupActions"
import {openSubmitPopup} from "../../../../myRedux/actions/submitPopupActions/submitPopupActions"
import { IoIosSend } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Wait from "../../../../reusableComponents/waitAnimation";
class Lists extends Component{
    componentDidMount() {
        this.props.getMailingLists()
        ;
    } 

    makeList = (lists) => {
        return lists.map(el=>{
            return (
                <li key={el.EmailListID} listid={el.EmailListID}>
                    <NavLink className = "mlName" to={"/mailinglist/"+el.EmailListID} activeStyle={{
                        pointerEvents: "none",
                        cursor: "default",
                        color: "grey"
                    }}>{el.EmailListName}</NavLink>
                    <label  className = "sendML"  onClick = {()=>this.props.openSendEmailPopup(el.EmailListID)} listid = {el.EmailListID} ><IoIosSend /></label>
                    
                    <label className ="deleteML" onClick={(ev)=>this.props.openSubmitPopup(()=>this.props.deleteEmailList(el.EmailListID))} listid = {el.EmailListID} ><MdDelete /></label>
                    
                </li>
            )
        })
    }
    render(){
        let {error,lists,loading} = this.props;
        // console.log(this.props)
        if(error) {
            return <div>ERROR --- {error.message}</div>
        }

        if( loading && lists.length === 0) {
            return <Wait />
        }

        
        return(
            <div className="lists">
                <ul>
                    {this.makeList(lists)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    lists: state.mailingLists.lists,
    loading: state.mailingLists.loading,
    error: state.mailingLists.error,
    ticks: state.tickContacts
})

const mapDispatchToProps = dispatch => {
    return {
        getMailingLists: ()=>{
            dispatch(getMailingLists())
        },
        openSendEmailPopup:id=>{
                    dispatch(openSendEmailPopup(null,id))
            
        },// funkcia poxancum Listsin ...???
        deleteEmailList: ev => {
            dispatch(deleteEmailList(ev))
        },
        openSubmitPopup: f => {
            dispatch(openSubmitPopup(f,"/mailinglist"))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Lists);

//()=>()=>bind ??? askd aopsd 

 // uxarkel container funcer@ ...\/...
 // miajamanak state ev props poxvel@...
//shouldc-i mej hamematel imast ka te reactna anum ...?
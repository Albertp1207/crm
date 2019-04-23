import {getMailingLists} from "../../../../myRedux/actions/mailingListActions/mailingListFetchActions";
import {openSendEmailPopup} from "../../../../myRedux/actions/sendEmailPopupActions/sendEmailPopupActions"
import { connect } from "react-redux";
import Lists from "./lists"
import myFetch from "../../../../tools/fetch";

const mapStateToProps = state => ({
    lists: state.mailingLists.lists,
    loading: state.mailingLists.loading,
    error: state.mailingLists.error
})

const mapDispatchToProps = dispatch => {
    return {
        getMailingLists: ()=>{
            dispatch(getMailingLists())
        },
        onCklickOnListName:(ev)=>{
            // console.log(ev.target.getAttribute("action"))
            switch(ev.target.getAttribute("action")){
                case "send":
                    console.log(ev.target.getAttribute("listid"))
                    dispatch(openSendEmailPopup(null,ev.target.getAttribute("listid")))//pakel@ popupi koxmic !
                    return;
                default:
                    return
            }
        },// funkcia poxancum Listsin ...???
        deleteEmailList: (ev,d) => {
            const id = ev.target.getAttribute("listid")
            myFetch("/emaillists?id="+id,"DELETE")
                .then(res=>{
                    if(res.ok) {
                        console.log("!!!")
                        dispatch(getMailingLists()) // ?
                    }
                })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Lists);

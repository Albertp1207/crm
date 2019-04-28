import {getMailingLists} from "../../../../myRedux/actions/mailingListActions/mailingListFetchActions";
import {openSendEmailPopup} from "../../../../myRedux/actions/sendEmailPopupActions/sendEmailPopupActions"
import { connect } from "react-redux";
import Lists from "."
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
                    dispatch(openSendEmailPopup(null,ev.target.getAttribute("listid")))
            
        },// funkcia poxancum Listsin ...???
        deleteEmailList: (ev) => {
            const id = ev.target.getAttribute("listid")
            return myFetch("/emaillists?id="+id,"DELETE")
                .then(res=>{
                        dispatch(getMailingLists()) // ?
                        return res
                })
                .catch(err=>console.log(err))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Lists);

import {getContactsForML} from "../../../../myRedux/actions/MLContactsActions/MLContactsFetchActions"
import { connect } from "react-redux";
import List from "./list"
import myFetch from "../../../../tools/fetch";

const mapStateToProps = state => ({
    list: state.MLContacts.list,
    loading: state.MLContacts.loading,
    error: state.MLContacts.error,
    guID: state.MLContacts.guID
})

const mapDispatchToProps = dispatch => {
    return {
        getContactsForML: (guId)=>{
            dispatch(getContactsForML(guId))
        }
        // ,
        // deleteEmailList: (ev) => {
        //     const id = ev.target.getAttribute("listid")
        //     return myFetch("/emaillists?id="+id,"DELETE")
        //         .then(res=>{
        //                 dispatch(getContactsForML()) // ?
        //                 return res
        //         })
        //         .catch(err=>console.log(err))
        // }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);

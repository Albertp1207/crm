import {getMailingLists} from "../../../../myRedux/actions/fetchActions"
import { connect } from "react-redux";
import Lists from "./lists"

const mapStateToProps = state => ({
    lists: state.mailingLists.lists,
    loading: state.mailingLists.loading,
    error: state.mailingLists.error
})

const mapDispatchToProps = dispatch => {
    return {
        getMailingLists: ()=>{
            dispatch(getMailingLists())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Lists);

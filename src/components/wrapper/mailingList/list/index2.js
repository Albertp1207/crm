import {getContactsForML} from "../../../../myRedux/actions/MLContactsActions/MLContactsFetchActions"
import { connect } from "react-redux";
import List from "./list"
import {clearTicks} from "../../../../myRedux/actions/tickActions/tickContactsML"

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
        },
        clearTicks: () => dispatch(clearTicks())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);

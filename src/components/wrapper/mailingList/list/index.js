import React,{Component} from "react";
import ListRow from "./listRow";
import {getContactsForML} from "../../../../myRedux/actions/MLContactsActions/MLContactsFetchActions"
import { connect } from "react-redux";
import {clearTicks,putID} from "../../../../myRedux/actions/tickActions/tickContactsML"

class List extends Component{
    componentDidMount(){
        this.props.getContactsForML(this.props.match.params.listid)
        this.props.clearTicks()

        this.props.putID(this.props.match.params.listid)

    }
    //ERROR__
    componentDidUpdate(prevProps){

        if(this.props.match.params.listid !== prevProps.match.params.listid){            
            this.props.getContactsForML(this.props.match.params.listid)
            this.props.clearTicks()

            this.props.putID(this.props.match.params.listid)
            return true
        };
        return false
    }
    
    componentWillUnmount(){
        this.props.clearTicks()
    }
    makeList = list => {
        if(list.length === 0) {
            return <div>EMPTY !!!</div>
        }
        return (
            <div >
                {list.map(contact=><ListRow  key = {contact.GuID+this.props.match.params.listid} person={contact} />)}
            </div>
        )
    }

    render() {     
        console.log(this.props.ticks)
        let {error,list,loading} = this.props;
        if(error) {
            return <div>ERROR --- {error.message}</div>
        }

        if( loading && list.length === 0) {
            return <div>Loading ...</div>
        }

        
        return(
            <div  className="contactsListTable" >
                 <div className = 'contactsListHead'>
                    <div className = 'contactsListRow'>
                        <div>Select</div>
                        <div>Full Name</div>
                        <div>Company Name</div>
                        <div>Position</div>
                        <div>Country</div>
                        <div>Email</div>
                    </div>
                </div>
                <div className = 'contactsListBody'>
                    {this.makeList(list)}
                </div>
            </div>
        )
    }

} 
const mapStateToProps = state => ({
    list: state.MLContacts.list,
    loading: state.MLContacts.loading,
    error: state.MLContacts.error,
    guID: state.MLContacts.guID,
    ticks: state.tickContacts
})

const mapDispatchToProps = dispatch => {
    return {
        getContactsForML: (guId)=>{
            dispatch(getContactsForML(guId))
        },
        clearTicks: () => dispatch(clearTicks()),
        putID: (id) => dispatch(putID(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);

//null , mDTP...
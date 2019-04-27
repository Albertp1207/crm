import React,{Component} from "react";
import myFetch from "../../../../tools/fetch";
// import Table from "../../../../reusableComponents/Table"
import ListRow from "./listRow";

class List extends Component{
    componentDidMount(){
        console.log("PATAMS");
        console.log(this.props.match)
        this.props.getContactsForML(this.props.match.params.listid)
    }
    //ERROR__
    shouldComponentUpdate(nextProps){
        console.log(this.props.match.params.listid+ "!==" +nextProps.match.params.listid)

        if(this.props.match.params.listid !== nextProps.match.params.listid){
            this.props.getContactsForML(this.props.match.params.listid)
            return true
        };
        return false
    }
    makeList = list => {
        console.log(list)
        if(list.length === 0) {
            return <div>EMPTY !!!</div>
        }
        return (
            <div >
                {list.map(contact=><ListRow  key = {contact.GuID} person={contact} />)}
            </div>
        )
    }

    render() {     
        let {error,list,loading} = this.props;
        console.log(this.props)
        if(error) {
            return <div>ERROR --- {error.message}</div>
        }
        console.log(list)

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
export default List

//null , mDTP...
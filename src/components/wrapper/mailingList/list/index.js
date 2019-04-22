import React,{Component} from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import myFetch from "../../../../tools/fetch";
// import Table from "../../../../reusableComponents/Table"
import ListRow from "./listRow"

export default class extends Component{

    state = {
        list: null,
        tickedContacts: []
    }

    getData = () => {
        myFetch("/emaillists?id="+this.props.match.params.listid,"GET")
        .then(data=>{
            console.log(data)
            this.setState({
                list:data
            })
        })
    }
    tickContact = (ev) => {
        console.log(ev.target)
        const guid = ev.target.getAttribute("guiid");
        if( !guid) {
            return
        }
        let newTickedContacts = this.state.tickedContacts.slice();
        newTickedContacts.push(guid)
        this.setState({
            tickedContacts:newTickedContacts
        })
    }
    componentDidMount(){
        this.getData();
    }// update page with new list name !!!!!!!!????
    componentDidUpdate(prevProps){
        if(this.props.match.params.listid !== prevProps.match.params.listid){
            this.getData();
        };
    }
    makeList = () => {
        let {Contacts} = this.state.list;
        return (
            <div onClick = {this.tickContact}>
                {Contacts.map(contact=><ListRow onTick={this.tickContact} key = {contact.GuID} person={contact} />)}
            </div>
        )
    }

    render() {
// classNames ....
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
                        <div>Edit</div>
                    </div>
                </div>
                <div className = 'contactsListBody'>
                    {this.state.list ? this.makeList(): <h2>LOADIGN</h2>}
                </div>
            </div>
        )
    }

} 
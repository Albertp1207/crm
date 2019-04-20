import React,{Component} from "react";
import myFetch from "../../../tools/fetch"
import {Route} from "react-router-dom";
import Lists from "./lists";
import List from "./list";
import Menu from "./menu"

class MailingList extends Component {
    
    state = {
        lists:[]
    }

    componentDidMount() {
        myFetch("/emaillists","GET")
            .then(data=>{
                console.log(data)
                this.setState({
                    lists:data
                })
            })
    }
    openList = (ev) => {
        if(!ev.target.getAttribute("listId")) return;
        
    }
    render(){
        // console.log("????")
        let {lists} = this.state;
        return (
            <div className="mailinglist">
                {lists.length> 0? <Lists openList={this.openList} lists={lists} /> : "Loading lists"}
                {/* <Route path='/mailinglist/:listname' render={(props) => {
                    console.log(props);
                    
                    return (
                    <h1>{props.match.params.listname}</h1>
                )}}/> */}
                <Route path='/mailinglist/:listid' component = {List} />
                <Menu />
                {/* <List /> */}
            </div>
        )
    }
}

export default MailingList;
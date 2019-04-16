import React,{Component} from "react";
import myFetch from "../../../tools/fetch"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Lists from "./lists";
// import List from "./list";

class MailingList extends Component {
    
    state = {
        lists:[]
    }

    componentDidMount() {
        console.log("ASD")
        // fetch("https://jsonplaceholder.typicode.com/todos/1")
        //     .then(d=>console.log(d))
        //     .then(t=>console.log(t))
        myFetch("http://visual.istclabz.com:2112/api/emaillists","GET")
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
                <Route path = "/asd" component={MailingList}  />
                {/* <List /> */}
            </div>
        )
    }
}

export default MailingList;
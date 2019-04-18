import React,{Component} from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import myFetch from "../../../../tools/fetch"


export default class extends Component{

    state = {
        list: null
    }

    getData = () => {
        myFetch("http://visual.istclabz.com:2112/api/emaillists?id="+this.props.match.params.listid,"GET")
        .then(data=>{
            console.log(data)
            this.setState({
                list:data
            })
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
    render() {
        return(
            <div className="lists">
                {/* <div className="lis"></div>  */}
                {this.state.list ? <h1>{this.state.list.EmailListName}</h1>: <h2>LOADIGN</h2>}
            </div>
        )
    }

} 
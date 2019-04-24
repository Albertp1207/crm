import React,{Component} from "react";
import {Link } from "react-router-dom";
import myFetch from "../../../../tools/fetch"
import { Redirect } from 'react-router'
class Lists extends Component{
    state = {
        redirectToML:false
    }
    componentDidMount() {
        this.props.getMailingLists();
    }
    // uxarkel container funcer@ ...\/...
    delete = (ev) => {
        this.props.deleteEmailList(ev)
            .then(res=>{
                if(res.ok) {
                    this.setState({
                        redirectToML:true
                    })
                }
            })
// miajamanak state ev props poxvel@...
        
    }
    render(){
        let {error,lists,loading} = this.props;
        // console.log(this.props)
        if(this.state.redirectToML) {
            this.setState({
                redirectToML:false
            })
            return <Redirect  to = "/mailinglist"/>
        }
        if(error) {
            return <div>ERROR --- {error.message}</div>
        }

        if( loading) {
            return <div>Loading ...</div>
        }

        
        return(
            <div className="lists">
                <ul>
                    {lists.map(el=>{
                        return (
                            <li onClick = {this.props.onCklickOnListName}key={el.EmailListID} listid={el.EmailListID}>
                                <Link to={"/mailinglist/"+el.EmailListID}>{el.EmailListName}</Link>
                                <label action = "send" listid = {el.EmailListID} > Send </label>
                                <label onClick={this.delete} action = "delete" listid = {el.EmailListID} > delete </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Lists;

//shouldc-i mej hamematel imast ka te reactna anum ...?
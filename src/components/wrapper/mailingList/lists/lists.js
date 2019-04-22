import React,{Component} from "react";
import {Link } from "react-router-dom";

class Lists extends Component{
    componentDidMount() {
        this.props.getMailingLists();
    }
    render(){
        let {error,lists,loading} = this.props;
        console.log(this.props)
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
                                <label action = "delete" listid = {el.EmailListID} > delete </label>
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
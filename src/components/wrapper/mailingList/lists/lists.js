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
                            <li key={el.EmailListID} onClick={this.props.openList} listid={el.EmailListID}>
                                <Link to={"/mailinglist/"+el.EmailListID}>{el.EmailListName}</Link>
                                <label> Send </label>
                                <label> delete </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Lists;

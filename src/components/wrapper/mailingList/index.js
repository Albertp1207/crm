import React,{Component} from "react";
import myFetch from "../../../tools/fetch"
import {Route} from "react-router-dom";
import Lists from "./lists";
import List from "./list";
import Menu from "./menu"
import { connect } from "react-redux";

import {getMailingLists} from "../../../myRedux/actions/fetchActions"

class MailingList extends Component {
    
    // state = {
    //     lists:[]
    // }

    componentDidMount() {
        // myFetch("/emaillists","GET")
        //     .then(data=>{
        //         console.log(data)
        //         this.setState({
        //             lists:data
        //         })
        //     })
        this.props.dispatch(getMailingLists());
    }
    openList = (ev) => {
        if(!ev.target.getAttribute("listId")) return;
        
    }
    render(){
        // console.log("????")
        let {error,lists,loading} = this.props;
        console.log(this.props)
        if(error) {
            return <div>ERROR --- {error.message}</div>
        }

        if( loading) {
            return <div>Loading ...</div>
        }
        // console.log(thi)

        return (
            <div className="mailinglist">
            
                <Lists openList={this.openList} lists={lists} /> 
                <Route path='/mailinglist/:listid' component = {List} />
                <Menu />
                {/* <List /> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    lists: state.mailingLists.lists,
    loading: state.mailingLists.loading,
    error: state.mailingLists.error
})

export default connect(mapStateToProps)(MailingList);

//komponent@ jnjum enq, en vijak@ vor@ menak iran er petq mnuma !? 
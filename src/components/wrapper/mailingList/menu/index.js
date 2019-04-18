//delete checks
// send,delete list
// add new list

import React,{Component} from "react";

class Menu extends Component{
    render(){
        return (
            <div id="menu">
                <div>
                    <button onClick = {this.props.deleteCheckedClients}>Delete checkeds</button>
                    <button onClick = {this.props.createML}>Create mailing list</button>   
                    {/* <button onClick = {this.props.send}>Send</button>        */}
                </div>
            </div>
        )
    }
        
}

export default Menu;
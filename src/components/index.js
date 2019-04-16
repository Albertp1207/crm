import React,{Component} from "react";
import Menu from "./menu";
import Wrapper from "./wrapper"
// import { Provider } from 'react-redux'

class App extends Component{
render(){
    return (
        <div className="main">
            <div className="header">
                <h1>- CRM -</h1>
            </div>
            <Menu />
            <Wrapper />
        </div>
    );
}
}


export default App;
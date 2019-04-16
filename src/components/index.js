import React,{Component} from "react";
import Menu from "./menu";
import Wrapper from "./wrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/index.sass';
// import { Provider } from 'react-redux'

class App extends Component{
render(){
    return (
        <Router>
            <div className="main">
                <div className="header">
                    <h1>- CRM -</h1>
                </div>
                <Menu />
                <Wrapper />
            </div>
        </Router>

    );
}
}


export default App;
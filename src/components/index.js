import React,{Component} from "react";
import Menu from "./menu";
import Wrapper from "./wrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/index.sass';
import logo from '../styles/images/Logo.jpg';
// import { Provider } from 'react-redux'

class App extends Component{
render(){
    return (
        <Router>
            <div className="main">
                <div className="header">
                    <div className = 'size'>
                        <div id = 'logo'>
                            <a href = '#'>
                                <img src = {logo}/>
                            </a>
                        </div>
                        <h1>C<span>ustomer</span> R<span>elationship</span> M<span>anagement</span></h1>
                    </div>
                </div>
                <section>
                    <Menu />
                    <div id = 'container'>
                        <Wrapper />  
                    </div>
                </section>
                
            </div>
        </Router>

    );
}
}


export default App;
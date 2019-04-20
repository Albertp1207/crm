import React,{Component} from "react";
import Menu from "./menu";
import Wrapper from "./wrapper";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
import '../styles/index.sass';
import logo from '../styles/images/Logo.jpg';
import { connect } from 'react-redux';



class App extends Component{
    render(){
        return (
            <Router>
                <div className="main">
                    <div className="header">
                        <div className = 'size'>
                            <div id = 'logo'>
                                <a href = '#'>
                                    <img src = {logo} alt = 'logo'/>
                                </a>
                            </div>
                            <h1>C<span>ustomer</span> R<span>elationship</span> M<span>anagement</span></h1>
=======
import { BrowserRouter as Router,Link } from "react-router-dom";
import '../styles/index.sass';
import logo from '../styles/images/logo.png';
// import { Provider } from 'react-redux'

class App extends Component{
render(){
    return (
        <Router>
            <div className="main">
                <div className="header">
                    <div className = 'size'>
                        <div id = 'logo'>
                            <Link to = '/'>
                                <img src = {logo} alt="home"/>
                            </Link>
>>>>>>> 6992e8500dba4f576599b2960b88fe80bc7313a7
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

const mapStateToProps = (state) => {
    return {
        popup: state.popup
    }
}

export default connect(mapStateToProps)(App);
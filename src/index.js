import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from "./components";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import rootReduser from './myRedux/redusers/rootReduser';
import thunk from 'redux-thunk';

const store = createStore(rootReduser,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store = { store }>
        <Index />
    </Provider>
, document.getElementById('root'));

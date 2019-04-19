import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from "./components";
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReduser from './myRedux/redusers/rootReduser';

const store = createStore(rootReduser);

ReactDOM.render(
    <Provider store = { store }>
        <Index />
    </Provider>
, document.getElementById('root'));

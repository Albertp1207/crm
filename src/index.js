import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from "./components"
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import reducerr from "./reducerr"

// let store = createStore(reducers)

ReactDOM.render(
    // <Provider store={store}>
        <Index />
    // </Provider>
, document.getElementById('root'));

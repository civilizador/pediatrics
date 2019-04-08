import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import App from './components/App';
import './index.css';

// Hooking up thunk middleware to our redux store. We are using applyMiddleware to do it.
const store = createStore(reducers, applyMiddleware(thunk) )

ReactDOM.render(
    <Provider store={store}>    
        <App />
    </Provider>    
    , document.getElementById('root'));
 

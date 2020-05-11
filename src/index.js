import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// initial state
const firstReducerInitialState = [];

// put your reducer here!
const firstReducer = (state = firstReducerInitialState, action) => {
    console.log('in firstReducer, Action:', action);
    if(action.type === 'increase'){
        console.log('increase by', action.payload);
        state = {...state, speed: action.payload}
    } else if (action.type === 'decrease'){
        console.log('decrease by', action.payload);
        state = {...state, speed: action.payload}
    }
    return state;
}

// use reducer in store
const storeInstance = createStore(firstReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

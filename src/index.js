import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StateFullComponent from './container/StatefulComponent';
import YoutubeComp from './component/YoutubeComp/YoutubeComp';
import Home from './container/Home/Home';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import rootReducer from './redux/reducer/globalReducer'



// store
// const store = createStore(rootReducer);

// ReactDOM.render(<Provider store={store} ><Home /></Provider>, document.getElementById('root'));
ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
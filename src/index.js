import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {reRenderTree} from './render';

// addPost();
//comes from state.js
//goes next as props ->


reRenderTree(state);


//In App we send data(props) to components through attributes. Any child component can recieve these props.
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

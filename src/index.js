import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let speakers = [
  {id: 1, name: "Alex", message: "What's up guys?"},
  {id: 2, name: "Kate", message: "Who are you?"},
  {id: 3, name: "Phill", message: "I'm newby here."},
  {id: 4, name: "Ben", message: "Will it be anything interesting here?"},
  {id: 5, name: "Ann", message: "Hello everybody, let's start the party!"},
]

let posts = [
  {id: 1, message: "It's my first post :)", likesCount: 105},
  {id: 2, message: "Hello, where I am?", likesCount: 20},
  {id: 3, message: "Some dummy text to fill the post", likesCount: 5},
  {id: 4, message: "Checking the process!", likesCount: 28},
]

ReactDOM.render(<App speakers={speakers} posts={posts} />, document.getElementById('root'));

//In App we send data(props) to components through attributes. Any child component can recieve these props.
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

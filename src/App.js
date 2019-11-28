import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';


function App(props) {

  // let speakers = [
  //   {id: 1, name: "Alex", message: "What's up guys?"},
  //   {id: 2, name: "Kate", message: "Who are you?"},
  //   {id: 3, name: "Phill", message: "I'm newby here."},
  //   {id: 4, name: "Ben", message: "Will it be anything interesting here?"},
  //   {id: 5, name: "Ann", message: "Hello everybody, let's start the party!"},
  // ]

  return (
    <BrowserRouter>
    <div className="App wrapper">
      <Header />

      <Sidebar />

      {/* <Profile /> */}
      <div className="app-wrapper-content">
        {/* <Route path="/profile" component={Profile} /> */}
        {/* <Route path="/dialogs" component={Dialogs} /> */}
        <Route path="/profile" render={() => <Profile posts={props.posts} /> }/>
        <Route path="/dialogs" render={() => <Dialogs speakers={props.speakers} />}/>
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

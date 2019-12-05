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

  return (
    <BrowserRouter>
    <div className="App wrapper">
      <Header />

      <Sidebar />
      {/* <Sidebar name={props.state.messagePage.speakers} /> */}

      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts}
                                                      addPost={props.addPost}
                                                      newPostText={props.state.profilePage.newPostText}
                                                      postTextUpdate={props.postTextUpdate}
                                                       /> }/>
        <Route path="/dialogs" render={() => <Dialogs speakers={props.state.messagePage.speakers} />}/>
        <Route path="/news" render={ () => <News /> } />
        <Route path="/music" render={ () => <Music /> } />
        <Route path="/settings" render={ () => <Settings />} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

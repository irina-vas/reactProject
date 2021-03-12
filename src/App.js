// import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
 
  return (
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/Dialogs' 
            render={ () => <Dialogs store={props.store} /> }/>
          <Route path='/Profile' 
            render={ () => <Profile 
              stateProfilePage={props.state.profilePage} 
              dispatch={props.dispatch} /> }/>
          <Route path='/News' 
            render={ () => <News /> } />
          <Route path='/Music' 
            render={ () => <Music /> } />
          <Route path='/Settings' 
            render={ () => <Settings /> } />
        </div>
      </div>
  )
}

export default App;

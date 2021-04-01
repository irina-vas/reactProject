// import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Header from './components/Header/Header';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
const App = () => {
 
  return (
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/Dialogs' 
                render={ () => <DialogsContainer /> }/>
          <Route path='/Profile' 
                render={ () => <ProfileContainer /> }/>
          <Route path='/Users'
                render={ () => <UsersContainer />  }/>
          {/* <Route path='/News' 
                render={ () => <News /> } />
          <Route path='/Music' 
                render={ () => <Music /> } />
          <Route path='/Settings' 
                render={ () => <Settings /> } /> */}
        </div>
      </div>
  )
}

export default App;

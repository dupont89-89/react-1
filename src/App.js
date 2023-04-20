import React from 'react';
import Footer from './components/Footer/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import DialogsContainer from './components/Dialogs/Dialogs_Container/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/Content_profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {

  return (
    <div className='wrapper'>
      <HeaderContainer />
      <SidebarContainer />
      <div className='wrapper__content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<ProfileContainer />}>
            <Route path=":userId?" element={<ProfileContainer />} />
          </Route>
          <Route path="dialogs/*" element={<DialogsContainer />} />
          <Route path="music" element={<Music />} />
          <Route path="news" element={<News />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<UsersContainer />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

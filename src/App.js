import React from 'react';
import Profile from './components/Profile/Content_profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import DialogsContainer from './components/Dialogs/Dialogs_Container/DialogsContainer';

const App = (props) => {

  return (
      <div className='wrapper'>
        <Header />
        <SidebarContainer />
        <div className='wrapper__content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dialogs/*" element={<DialogsContainer />} />
            <Route path="music" element={<Music />} />
            <Route path="news" element={<News />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;

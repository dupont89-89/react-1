import React from 'react';
import Profile from './components/Profile/Content_profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs_Container/Dialogs';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='wrapper__content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile postData={props.postData} />} />
            <Route path="dialogs/*" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
            <Route path="music" element={<Music />} />
            <Route path="news" element={<News />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

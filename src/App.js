import React from 'react';
import Profile from './components/Profile/Content_profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs_Container/Dialogs';

const App = (props) => {

//   let dataFriends = [
//     { id: 2, avatar__one__friends: 'https://pixelbox.ru/wp-content/uploads/2022/05/russia-avatar-pixelbox.ru-14.jpg', name__one__friends: "Валентин Стрыкало" },
//     { id: 3, avatar__one__friends: "https://pixelbox.ru/wp-content/uploads/2022/05/russia-avatar-pixelbox.ru-14.jpg", name__one__friends: "Валентин Стрыкало" },
//     { id: 4, avatar__one__friends: "https://pixelbox.ru/wp-content/uploads/2022/05/russia-avatar-pixelbox.ru-14.jpg", name__one__friends: "Валентин Стрыкало" }

// ]

  return (
      <div className='wrapper'>
        <Header />
        <Sidebar state={props.state.sidebar} />
        <div className='wrapper__content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path="dialogs/*" element={<Dialogs state={props.state.messagesPage} dispatch={props.dispatch} />} />
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

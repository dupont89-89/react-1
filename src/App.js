import React from 'react';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Sidebar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, sendMessage, sendNewMessage, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEnteriFree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} sendMessage={sendMessage} updateNewPostText={updateNewPostText} sendNewMessage={sendNewMessage} />
      </React.StrictMode>
    </BrowserRouter>
);
}


import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import './index.css';
import App from './App';
// import { addPost, sendMessage, sendNewMessage, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEnteriFree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={store.addPost.bind(store)} sendMessage={store.sendMessage.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} sendNewMessage={store.sendNewMessage.bind(store)} />
      </React.StrictMode>
    </BrowserRouter>
);
}
rerenderEnteriFree (store.getState ());
store.subscribe (rerenderEnteriFree);
reportWebVitals();

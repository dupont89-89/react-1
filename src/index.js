import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEnteriFree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App store={store} />
      </React.StrictMode>
    </BrowserRouter>
);
}

rerenderEnteriFree (store.getState ());

store.subscribe ( () => {
  let state = store.getState();
  rerenderEnteriFree(state);
});

reportWebVitals();

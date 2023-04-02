import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './redux/store-context';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEnteriFree = () => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
}

rerenderEnteriFree();

store.subscribe(() => {
  rerenderEnteriFree();
});

reportWebVitals();

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { rerenderEnteriFree } from './render';
import state from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

rerenderEnteriFree (state);
reportWebVitals();

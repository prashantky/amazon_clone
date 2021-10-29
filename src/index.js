import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StateProvider } from './StateProvider';
//import reportWebVitals from './reportWebVitals';
import  reducer,{initialState} from "./reducer"

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



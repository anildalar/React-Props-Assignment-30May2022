import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';


let name="Naznin"
let name2="Abshisesk"

//  ReactDOM.createRoot(Where)
const root = ReactDOM.createRoot(document.getElementById('root'));


//root.render(What)
root.render(
  <React.StrictMode>
    <App myfullname={name} />
    <App2 myfullname2={name2} />
  </React.StrictMode>
);
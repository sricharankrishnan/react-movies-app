import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

/***** project imports *****/
import "./common/css/common.css";
import Home from "./screens/home/Home.js";

ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

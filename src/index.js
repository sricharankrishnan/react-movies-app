import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

/***** project imports *****/
import "./common/css/common.css";
import Home from "./screens/home/Home.js";
import Details from "./screens/details/Details.js";

/***** typography imports *****/
import 'fontsource-roboto';

ReactDOM.render(
  <React.StrictMode>
  <Home/>
  {/* <Details/> */}
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

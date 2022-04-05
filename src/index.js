import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import reportWebVitals from './reportWebVitals';

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {box-sizing: border-box;}
  body {
    margin: 0;
    color: #ECC488;
    background-color: #B667F1;
    background-color: #8A39E1;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

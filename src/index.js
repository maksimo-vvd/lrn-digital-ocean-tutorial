import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import reportWebVitals from './reportWebVitals';

import { createGlobalStyle } from "styled-components";

import { Provider } from "react-redux";
import { createStore} from "redux";
import movieApp from "./store/movies/movies";

const Global = createGlobalStyle`
  * {box-sizing: border-box;}
  body {
    margin: 0;
    color: #ECC488;
    background-color: #B667F1;
    background-color: #8A39E1;
  }
`

const store = createStore(movieApp)
// const store = createStore(() => ({
//   movies: [
//     {
//       name: 'Black list',
//       views: 1,
//     },
//     {
//       name: 'Avatar',
//       views: 100,
//     },
//   ],
// }))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Global />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

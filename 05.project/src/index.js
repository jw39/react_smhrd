import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './App2';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);

// 1. npm i react-router-dom 설치
// 2. BrowserRouter import
// 3. <App />를 BrowserRouter로 감싸기

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

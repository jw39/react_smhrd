import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// 앞에는 단순 별칭
import App from './AppExample'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode 주석 처리 한 이유 => AppExample log 창에서 반복 안 되게..
  // <React.StrictMode> 
    <App /> 
  // </React.StrictMode>
);
// 화면에 보여지기 위해선 app.js가 index.js 진입점을 거치고 index.html 을 가야 함
// 파일 변경하고 싶으면 10번째 줄과 4번째 줄 수정하면 됨.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

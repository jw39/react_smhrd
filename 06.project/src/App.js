import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  /*
    async / await : 비동기 통신 함수를 동기 코드처럼 작성할 수 있는 javaScript 문법
    fetch : JavaSript의 내장 HTTP 요청 함수로, Promise를 반환
    axios : HTTP 요청 외부 라이브러리 (자동으로 JSON 데이터 처리)
    ajax (JQuery) : JQuery에서 제공하는 HTTP 요청 함수

    async 키워드
    - 함수 앞에 붙여서 우리가 사용할 함수를 비동기처리 하겠다!

    await 키워드
    - Promise가 해결될 때까지 함수의 실행을 일시정지
    - await는 오직 async 함수 안에서만 사용 가능
  */

    const api_key = "INZONHz2apOLne7m9WWoNk89x5polhghKtO7ZMor"
    const url = `https://api.nasa.gov/planetary/apod?` +
         `start_date=2024-06-13&api_key=${api_key}`;

    const [dataList, setDataList] = useState([]);

    // 비동기 방식으로 실행하겠다
    const nasaApiCall = async () => {
      try{
        // 응답 받을 때까지 기다리겠다(함수의 실행을 멈춰두겠다). 
        const res = await axios.get(url)
        console.log(res.data);
        setDataList(res.data)
      }
      catch(error){
        console.error('데이터 로딩 오류 : ', error);
      }
    }

    useEffect(()=>{
      nasaApiCall();
    }, [])


  return (
    <div
      style={{
        display:'flex',
        flexDirection: 'column'
      }}>
        {dataList.map((item)=>(
          <img key={item.date} src={item.url}></img>
        ))}
     
    </div>
  );
}

export default App;

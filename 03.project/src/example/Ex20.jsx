import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/ex20.css'

const Ex20 = () => {
    const [city, setCity] = useState('gwangju');
    const [temp, setTemp] = useState('0');
    const [icon, setIcon] = useState('');
    const [cloud, setCloud] = useState('')

    const getCity = (cityName) => {
        console.log(cityName);
        setCity(cityName)
    }

    const getData = () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=603aa562f93c1b6e5fb4e7596aa820d5`

        // Axios
        /*
            비동기 작업을 쉽게 처리할 수 있는 promise 기반 구조
            요청과 응답 데이터를 자동으로 JSON으로 변환
            브라우저와 Node.js 환경에서 모두 사용 가능
            => HTTP 요청을 보다 효율적이고 간편하게 처리할 수 있다.

        */

        axios
            .get(url) // url로 요청했을 때
            .then((res) => { // 나한테 응답해주는 데이터
                console.log(res);
                // conslole.log 를 활용해서 구름의 양을 한 번 출력해보기
                // zpfqls dhseh - 273 = 섭씨온도
                console.log('weather res : ', res.data.clouds.all);
                setTemp(parseInt(res.data.main.temp - 273))

                // 아이콘 세팅
                setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)

                // 구름의 양 비교
                // 90보다 크면 매우 흐림
                // 60보다 크면 흐림
                // 30보다 크면 약간 흐림
                // 조건에 만족하지 않으면 맑음
                if (90 < res.data.clouds.all) {
                    setCloud('매우 흐림')
                } else if (60 < res.data.clouds.all) {
                    setCloud('흐림')
                } else if (30 < res.data.clouds.all) {
                    setCloud('약간 흐림')
                } else {
                    setCloud('맑음')
                }
            })
    }
    useEffect(() => {
        getData()
    }, [city]) //도시 이름이 변경될 수 있도록 state 넣었고 city 이름이 변경될 때마다 getdata 실행


    return (
        <div className='weather-container'>
            <div className='weather-item'>
                <h1>날씨 정보</h1>

                <div className='weather-data'>
                    <img src={icon} width='100px'></img>
                    <h1>{temp}℃</h1>
                    <h3>{city}</h3>
                    <h4>{cloud}</h4>
                </div>
                <div>
                    <button
                        onClick={() => {
                            getCity('GWANGJU')

                        }}
                    >광주</button>
                    <button
                        onClick={() => {
                            getCity('SEOUL')

                        }}
                    >서울</button>
                    <button
                        onClick={() => {
                            getCity('BUSAN')

                        }}
                    >부산</button>
                </div>
            </div>




        </div>
    )
}

export default Ex20
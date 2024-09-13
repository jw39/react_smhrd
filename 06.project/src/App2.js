import React from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

const App2 = () => {
    /*
        (1) index.hrml에 script 태그 추가 -> 발급받은 key 넣기
        (2) install : npm install react-kakao-maps-sdk
        (3) import : Map, MapMarker

        - Map : 지도 생성
            center => 지도 중심 위치 / 위도(lat), 경도(lng)
            style => 지도 크기
        - MapMarker : 마커 생성
            position => 마커 위치 / 위도(let), 경도(lng)

    */


    return (
        <div>
            {/* <Map center={{ lat:33.5563, lng: 126.79581 }}
        style={{width:'100%', height:'360px'}}
        >
            <MapMarker position={{lat:33.55635, lng:126.79581}} >
                <div style={{color: '#000'}}>HI</div>

            </MapMarker>

        </Map> */}

            {data.map((item) => {
                return <MarkerEvent key={item.latlng.lat} item={item} />

            })}



        </div>
    )
}

export default App2                                                       
import React, { useState, useEffect } from 'react'

const Ex17 = () => {

    // useState 설정 => 초기값 (0)
    // state 변수 명 : clickCount
    const [clickCount, setclickCount] = useState(0)

    // useEffect
    // log를 활용해 clickCount 가 변경될 때마다
    // '클릭 횟수가 변경되었습니다' -> 출력문 실행, 횟수
    useEffect(()=>{
        console.log('클릭 횟수가', clickCount ,'번 변경되었습니다');
    }, [clickCount])


    const handleClick = () => {
        setclickCount(clickCount + 1)
    }




    return (
        <div>
            <h1>클릭 횟수 세기</h1>
            <p>버튼을 클릭하세요.</p>
            <button onClick={handleClick}>클릭</button>
            <p>클릭 횟수 : {clickCount} </p>
        </div>
    )
}


export default Ex17
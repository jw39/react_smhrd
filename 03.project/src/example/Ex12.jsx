import React, { useRef, useState } from 'react'
import '../style/ex12.css'
/*
    useRef란?
    1. 저장 공간으로 사용
    useState 와의 차이점!
    - useRef는 재 렌더링 발생 X, 변수들의 값이 유지됨

    2. DOM 요소에 접근할 때
    기존에 JS에서는 메서드를 통해 DOM 요소에 접근

*/
// 함수형 컴포넌트란 타입이 함수인 거임.. 당연한 소리긴 함
// 함수형 컴포넌트를 실행할 때 
// state 함수를 실행할 때마다 컴포넌트 자체가 index.js에서 렌더링이 됨.

const Ex12 = () => {
    console.log('렌더링!');

    const [count, setCount] = useState(0)
    // 초기값을 current 라는 이름으로 반환

    // countRef 함수 생성
    const countRef = useRef(0)
    console.log(countRef);

    // state 함수와 다르게 렌더링이 안 되니까 
    const increaseCountState = () => {
        setCount(count + 1)
    }

    const increaseCountRef = () => {
        countRef.current += 1
        console.log(countRef.current);

    }
    return (
        <div className='container'>
            <div className='counter-box'>
                <div>
                    <p className='count-text'>State: {count} </p>
                    <p className='count-text'>Ref : {countRef.current} </p>
                    <button className='count-button' onClick={increaseCountState}>state Up</button>
                    <button className='count-button' onClick={increaseCountRef}>Ref Up</button>
                </div>


            </div>
        </div>
    )
}

// let num = 0;
// const Ex12 = () => {
//     const [count ,setCount]= useState(0);

//     const increaseCountState = () =>
//     {
//         setCount((count) => count +1)
//         num++;
//         console.log(num)
//     }
//     return (
//         <div>
//             <div>
//                 <p>State : {count}</p>
//                 <p>Num : {num}</p>
//                 <button onClick={increaseCountState}>State Up</button>
//             </div>
//         </div>
//     );
// };

export default Ex12
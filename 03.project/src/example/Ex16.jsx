import React, {useState, useEffect} from 'react'

const Ex16 = () => {

    console.log('a. 함수 초기화');

    const [num, setNum] = useState(0);

    const btnCk = () => {
        setNum(num + 1)
    }

    // useEffect
    // useEffect(()=>{}, []) 화면이 제일 처음 렌더링 됐을 때만 호출
    // API Call 호출할 때 많이 사용
    useEffect(()=>{
        console.log('c. Mount');
    }, []) // 빈 배열, 의존성 배열, 제일 처음 출력되고 출력 안됨. 시점을 제어한 것?
    
    // useEffect(()=>{}, [변화를 감지할 대상])  
    useEffect(()=>{
        console.log('update!');
    }, [num])
    // 변경된 state 값을 감지해서 num에 변화가 생겼을 때만 실행 
    
    return (
    <div>
        {console.log('b. rendering')}
        <h1>Function counter : {num}</h1>
        <button onClick={btnCk}>+1</button>
    </div>
  )
}

export default Ex16
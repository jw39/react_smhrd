import React, { useRef } from 'react'
import '../style/ex13.css'

const Ex13 = () => {
    const inputRef = useRef();

    const handleButtonClick = () => {
        console.log(inputRef.current.value);
        // value -< input 태그 안에 있는 값을 가져왔다.
        // 1. alert 창에 내가 입력한 값 출력하기
        // 변수랑 텍스트 같이 출력
        alert(`input value : ${inputRef.current.value}`)
        // alert(inputRef.current.value)
        // 2. 입력 필드 초기화
        inputRef.current.value = ''
    }

  return (
    <div className='container'>
        <header className='header'>
            <h1>UseRef Example</h1>
            <input type='text' ref={inputRef} placeholder='Enter Something'/>
            <button onClick={handleButtonClick}>Show Input</button>
        </header>
    </div>
  )
}

export default Ex13
import React, { useRef } from 'react'

const Ex14 = () => {
    const divRef = useRef()

    const changeSize = (size) => {
        console.log(divRef.current.className);
        // useRef 를 활용하면 반환되는 데이터 타입 : 객체
        divRef.current.style.width = `${size}px`
        divRef.current.style.height = `${size}px`

    }


    const ckBtn = (e) => {
        console.log(e);
        console.log('ck', e.target.innerText);
        // 조건문을 사용해서 크기 변경
        if(e.target.innerText === '작게'){
            changeSize(100)
        } else if (e.target.innerText === '원본'){
            changeSize(200)
        } else {
            changeSize(300)
        }

    }

    let divStyle = {
        marginTop : '3%',
        backgroundColor : 'skyblue',
        width : '200px',
        height : '200px'
    }



  return (
    <div>
        <div>
           <button onClick={ckBtn}>작게</button>
           <button onClick={ckBtn}>원본</button>
           <button onClick={ckBtn}>크게</button>
        </div>

        <div style={divStyle} ref={divRef}></div>
    </div>
  )
}

export default Ex14
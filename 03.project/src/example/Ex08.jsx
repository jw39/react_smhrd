import React, { useState } from 'react'
import Ex08SubItem from '../components/Ex08SubItem'

const Ex08 = () => {

    /*
        컴포넌트끼리 값 전달하기
        Ex08.jsx - 상위(부모)요소
    */

    const [inputTitle, setInputTitle] = useState('')
    const [rcTitle, setRcTitle] = useState('')

    const changeData = (e) => {
        setRcTitle(e.target.value)

    }


    return (
        <div>
            <h2>컴포넌트끼리 값 전달을 해보자!</h2>
            <p>
                1-1. 상위에서 입력 : {" "}
                <input
                    type='text'
                    onChange={(e) => {
                        console.log(e.target.value);
                        setInputTitle(e.target.value)
                    }}
                />
            </p>
            <Ex08SubItem Title={inputTitle} changeData={changeData} />
            <span>2-2. 상위에서 입력받은 값은 {rcTitle} 입니다.</span>


        </div>
    )
}

export default Ex08
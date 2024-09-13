import React, {useState} from 'react'
import { ColorContext } from '../context/Ex09ColorContext'
import ColorList from '../components/Ex09/ColorList'
import ColorResult from '../components/Ex09/ColorResult'

const Ex09 = () => {
    // Context란? 리엑트 컴포넌트에서 값을 전역적으로 공유할 수 있게 하는 기능

    // Q. props 로만 데이터를 전달했을 때 발생할 수 있는 문제
    // A. 깊은 위치에 있는 컴포넌트 데이터를 전달해야 할 때 문제가 될 수 있음

    const [choiceColor, setChoiceColor] = useState('#FF6347')

    // 연달아서 props 설정 => 실수 => props drilling
    return (

        // ColorContext 사용, (전달받기 위해) ProVider를 통해 값을 전달받음.  value 값을 전달 받는 건가?
                                    // 전역적으로 사용할 수 있는 컬러
        <ColorContext.Provider value={{choiceColor, setChoiceColor}}>
            <div>
                <h1>색상 변경하기! </h1>
                {/* 컴포넌트 불러오기 */}
                <ColorList/>
                <br/>
                <hr></hr>
                <h1>선택한 색상</h1>
                <ColorResult/>


            </div>
        </ColorContext.Provider>
    )
}

export default Ex09
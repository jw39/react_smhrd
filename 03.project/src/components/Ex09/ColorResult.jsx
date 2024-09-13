import React, { useContext } from 'react'
import { ColorContext } from '../../context/Ex09ColorContext'

const ColorResult = () => {
    // context를 사용하겠다 -> import -> value안에 있는 값을 가지고 오기
    //  전역적으로 사용할 value값(선택했을 시 보여줄 색상값 데이터)를 {} 안에 넣음, 
    const {choiceColor} = useContext(ColorContext)
    console.log('choiceColor : ' + choiceColor);
    
  return (
    <div>
        <div
            style={{
                width : '100px',
                height : '100px',
                // state를 통해서 색상 텍스트를 반환받고 있음.
                backgroundColor : `${choiceColor}`


            }}


        ></div>

    </div>
  )
}

export default ColorResult
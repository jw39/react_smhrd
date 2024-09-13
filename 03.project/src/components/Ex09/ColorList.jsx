import React, { useContext } from 'react'
import { ColorContext } from '../../context/Ex09ColorContext'

const ColorList = () => {
    const {setChoiceColor} = useContext(ColorContext);
    // 색상 배열, 문자열로 처리
    let color = ['#FF6347', '#FFA500', '#FFFF00', '#9ACD32', '#4682B4'];

    // 이벤트 객체를 매개변수로 전달받음
    const ck = (e) => {
        // 콘솔창에 클릭한 색상의 색상표가 찍힘
        console.log('ck', e.target.style.backgroundColor);
        // 클릭 시 choiceColor의 색을 계속 바꿔줌
        setChoiceColor(e.target.style.backgroundColor);
    }

    return (
        <div style={{display : 'flex'}}>
            {/* map() 함수 통해 반복시키겠다. item에는 color배열의 각 요소가 해당됨 */}
            {color.map((item) => (
                <div
                    onClick={ck}
                    key={item}
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: `${item}`
                    }
                    }


                ></div>

            ))}
        </div>
    )
}

export default ColorList
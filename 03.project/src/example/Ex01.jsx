import React, { useState } from 'react'

const Ex01 = () => {

    const [num2, setNum2] = useState(0);
    // num2는 state 변수명, setNum2는 함수,  초기값 설정

    const ck = (event) => {
        console.log(event.target.innerText);
        // console.log(event);
        // 매개변수에 event를 적고 콘솔창에 event를 찍으면 내가 지정한 이벤트에 대한 (객체 형태의) 정보가 넘어옴

        // console.log(event.target);
        // event.target하면 어디에 이벤트를 걸었는지 출력이 됨

        // console.log(event.target.innerText);
        // event.target.innerText하면 텍스트인 클릭만 출력됨
    }

    // let num = 0;

    const increase = () => {
        console.log('숫자 1씩 증가');
        // num = num + 1;
        // console.log(num); //useState 사용하지 않았을 때의 코드
        setNum2(num2 + 1)
    }

    const decrease = () => {
        if (num2 > 0)
        setNum2(num2 - 1)
        //  else {  없어도 문제 없음
        //     setNum2(num)
        // }
    }

    return (
        <div>
            <div>
                <p>{num2}</p>
                <button onClick={ck}>클릭!</button>
                <br></br>
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
            </div>
        </div>
    )
}

export default Ex01
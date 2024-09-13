import React, { useState } from 'react'

const Ex03 = () => {

    // state 2개 활용
    // 내가 누른 숫자
    // 랜덤한 숫자

    // 버튼을 클릭할 때 함수 호출 -> 함수명은 btnCk
    // 매개변수에 이벤트 객체를 넣어서 확인
    // 랜덤 수 구하기 -> Math.random()

    const [num1, setNum1] = useState(0)
    const [ran1, setRan1] = useState(0)

    const btnCk = (event) => {
        const num = event.target.innerText
        // console.log(num);
        // setNum1(parseInt(num)) // 강제 형변환
        setNum1(num)

        const ran = Math.floor(Math.random() * 3 + 1);
        // console.log(ran);
        setRan1(ran)
    }

    // 1. 랜덤한 수를 뽑아준다. 범위는 1~3
    // 2. 누른 버튼의 숫자를 랜덤한 수와 비교
    // 3. 만약, 랜덤한 수와 누른 버튼의 수가 같다면 => 정답, 다르다면 => 땡~

    return (

        <div>
            <div>
                <button onClick={btnCk}>1</button> &nbsp;
                <button onClick={btnCk}>2</button> &nbsp;
                <button onClick={btnCk}>3</button>
            </div>

            <div>
                내가 입력한 숫자 : {num1}
                <br />
                랜덤한 숫자 : {ran1}
                <br />
                {/* 정답인지 오답인지 출력할 수 있는 로직 작성 */}
                {num1 == ran1 ? "정답입니다^^" : "꽝~ 다시 도전하세요"}
                {/* innerText 를 사용한 num은 string이라 ==를 사용함 */}
            </div>
        </div>
    )
}

export default Ex03
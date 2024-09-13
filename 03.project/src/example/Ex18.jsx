import React, { useState, useEffect } from 'react'
import '../style/ex18.css'

const Ex18 = () => {

    const [computerNumber, setComputerNumber] = useState(0); //컴퓨터가 주는 랜덤수
    const [userNumber, setUserNumber] = useState(''); // 사용자가 입력한 수
    const [message, setMessage] = useState(''); // 성공 실패 유무 확인 멘트
    const [gameOver, setGameOver] = useState(false);

    // 1. 랜덤 수 만들기
    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 10) + 1 // 1에서 10 사이의 랜덤한 정수 반환
    }
    // 2. handleInputChange 선언부 만들기
    const handleInputChange = (e) => {
        setUserNumber(e.target.value);
    }

    // 3. handleCheckClick 선언부 만들기
    const handleCheckClick = () => {
        // 조건문을 활용해서 정답을 출력!
        const num = parseInt(userNumber);
        if (num === computerNumber) {
            setMessage('정답입니다!')
            setGameOver(true);
        } else {
            setMessage('틀렸습니다. 다시 시도해주세요.')
        }
        setUserNumber('')
    }



    const handleRestartClick = () => {
        setComputerNumber(generateRandomNumber()); // 게임 재시작할 때 난수 다시 넣기
        setUserNumber('')
        setMessage('')
        setGameOver(false)
    }

    // useEffect
    // 내가 화면을 처음 렌더링할 때만 난수를 구하기
    useEffect(() => {
        setComputerNumber(generateRandomNumber)
    }, []) // 빈배열 넣었당!



    return (
        <div className='number-game-container'>
            <h1>숫자 맞추기 게임</h1>
            {/* gameOver 가 true면 숫자 맞추는 화면 */}
            {!gameOver ? (<div className='game-content'>
                <p>1에서 10 사이의 숫자를 맞춰보세요.</p>
                <input
                    type='number'
                    value={userNumber} //내가 입력한 값이 value값으로 넘어감
                    onChange={handleInputChange}
                />
                <button onClick={handleCheckClick}>확인</button>
                <p className='message'>{message}</p>
            </div>
            ) : (
                // false라면 (정답을 맞췄다면) 정답입니다. 하고 재시작 화면 출력
                <div className='game-content'>
                    <p className='message'>{message}</p>
                    <button onClick={handleRestartClick}>재시작</button>
                </div>)}



        </div>
    )
}

export default Ex18
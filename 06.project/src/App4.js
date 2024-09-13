import React, { useState } from 'react'

const App4 = () => {
    /*
        Local Stroage & Session Stroage
        - 키:값으로 데이터 저장 => {data : 11}
        - 브라우저 내 저장 => 클라이언트 측 데이터 저장

        Local Stroage
        - 브라우저를 닫거나 다시 열어도 데이터 유지
        - 동일한 도메인 내 모든 창과 탭에서 접근 가능

        Session Stroage
        - 세션 기반 데이터 저장, 브라우저 or 탭 종료 시 데이터 삭제
        - 데이터를 저장한 창과 탭에서만 접근 가능

        Cookie vs Local Stroage
        - 쿠키보다 로컬 스토리지 저장 공간이 큼
        - 로컬 스토리지의 데이터는 사용자가 명시적으로 데이터를 삭제하거나
          브라우저의 저장 공간을 비우기 전까지 영구적으로 보관, 쿠키는 유효 기간을 설정할 수 있다.
        - 로컬 스토리지는 보안에 상대적으로 취약함.
    */

    // input 입력값
    const [localText, setLocalText] = useState(null);
    const [sessionText, setSessionText] = useState(null);

    // storage 저장값
    const [localData, setLocalData] = useState(null);
    const [sessionData, setSessionData] = useState(null);

    const setLocal = () => {
        console.log('setLocal', localText); // 텍스트만 출력됨
        console.log(localStorage);  // 객체 형태로 출력 됨
        localStorage.setItem('data', localText)
        // 로컬 스토리지에 접근해 setItem 하겠다. 뭐를? 'data'라는 이름의 localText(입력한 값)을... 
    }
    
    const getLocal = () => {
        setLocalData(localStorage.getItem('data'))
        // 로컬 스토리지에 접근해 setItem 하겠다. 뭐를? 'data'라는 이름의 localText(입력한 값)을... 
    }
    
    const removeLocal = () => {
        localStorage.removeItem('data')
    }
    
    const setSession = () => {
        // console.log('setSession', sessionText);
        sessionStorage.setItem('data', sessionText);
        // 세션 스토리지에 접근해 setItem 하겠다. 뭐를? 'data'라는 이름의 sessionText(입력한 값)을... 
    }
    const getSession = () => {
        // console.log('getSession', sessionStorage.getItem('data'));
        setSessionData(sessionStorage.getItem('data'));
        // 세션 스토리지에 접근해 getItem 하겠다. 뭐를? 'data'라는 이름의 친구를... 
    }

    const removeSession = () => {
        // console.log('removeSession');
        // sessionStorage.clear();
        sessionStorage.removeItem('data');
        // 세션 스토리지에 접근해 removeItem 하겠다. 뭐를? 'data'라는 이름의 친구를...
    }
    
    
    return (
        <div>
            <div>
                <h3>Local Storage</h3>
                <input type='text'
                    onChange={e => setLocalText(e.target.value)} />
                <button onClick={setLocal}>저장</button>
                <br />
                <button onClick={getLocal}>가져오기</button>
                {localData}
                <br />
                <button onClick={removeLocal}>삭제</button>
            </div>
            <div>
                <h3>Session Storage</h3>
                <input type='text'
                    onChange={e => setSessionText(e.target.value)} />
                <button onClick={setSession}>저장</button>
                <br />
                <button onClick={getSession}>가져오기</button>
                {sessionData}
                <br />
                <button onClick={removeSession}>삭제</button>
            </div>
            <div>
            </div>



        </div>

    )
}

export default App4
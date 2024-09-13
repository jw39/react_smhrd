import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Main = () => {

    /* Link 컴포넌트
        - 웹페이지에서 링크를 이동하는 태그 -> a 태그 사용
        - a 태그는 클릭 시 새로운 페이지를 불러오기 때문에 
         (single Page Application) SPA React 적합하지 않다
        - Link 컴포넌트 사용 시 새로운 페이지를 불러오지 않는다.
        - 브라우저 주소의 경로만 바꿔서 진행을 한다.
        - 경로를 지정하기 위해 to 라는 속성이 필요하다
    */

    // useNavigate
    // 사용 방법 : const 변수 = useNavigate()
    // 페이지 이동이 필요할 때 변수 ('경로') ex) ('/mypage')

    const nav = useNavigate()

    // 로그인 상태
    let auth = true
    return (
        <div>
            Main

            <br />
            {/* 경로 설정! to로 경로를 지정함. 켜져있는 브라우저 기준으로 이동이 됨 */}
            <Link to='/about'>About 페이지로 이동</Link>
            <br />
            <Link to='https://smhrd.or.kr'>SMHRD</Link>
            <br />
            {/* <button onClick={()=>{nav('/mypage')}}>마이페이지</button> */}
            <button onClick={() => {
                auth ? nav('/mypage') : nav('/about')

            }}>
                마이페이지

            </button>



        </div>
    )
}

export default Main
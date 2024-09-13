import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Ex10ThemeContext'


const Footer = () => {

    // ThemeContext를 사용하겠다!, 보관함을 가져오겠다!
    const { isDark, setIsDark } = useContext(ThemeContext);
    const toggleTheme = () => {
        // 버튼을 누를 시 토글테마 함수 실행!
        // 버튼 누를 때마다 isdark가 true, false 계속 바뀜
        setIsDark(!isDark)

    }

    return (
        <div>
            <footer
                className='footer' //className 넣는 이유 : style 넣으려고 ㅎㅎ
                style={{
                    // isdark가 트루면 검정, 펄스면 그레이색
                    backgroundColor: isDark ? 'black' : 'lightgray'
                }}
            >

                <button className='button' onClick={toggleTheme}>
                    {isDark ? 'Light Mode' : 'Dark Mode'}

                </button>
            </footer>
        </div>
    )
}

export default Footer
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Ex10ThemeContext'


const Content = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className='content'
      style={{
        // 삼항연산자 사용
        // isdark가 트루면 검정, 펄스면 흰색
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
      }}
    >
      <h1>지각하지 말기</h1>
    </div>
  )
}

export default Content
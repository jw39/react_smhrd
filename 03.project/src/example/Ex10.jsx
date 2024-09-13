import React, {useState} from 'react'
import Header from '../components/Ex10/Header'
import Content from '../components/Ex10/Content'
import Footer from '../components/Ex10/Footer'
import { ThemeContext } from '../context/Ex10ThemeContext'
import '../style/ex10.css'

const Ex10 = () => {

  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <div className='page'>
        {/* 세 개의 컴포넌트 불러오기, import도 필수 */}
        <Header />
        <Content />
        <Footer />
      </div>

    </ThemeContext.Provider>
  )
}

export default Ex10
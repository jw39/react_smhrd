import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>글 목록</h1>
        <hr/>
        <Link to='/product/1?best=true'>정보처리기사 스터디 모집</Link>
        <hr/>
        <Link to='/product/2'>리엑트 스터디 모집</Link>
        <hr/>
        <Link to='/product/3'>오늘 점심은 엽떡 부럽다.</Link>
        <hr/>

    </div>
  )
}

export default About
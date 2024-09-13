import React from 'react'

const Ex04 = () => {
    let students = [
        {name:'코난', age:7, bloodType:'A'},
        {name:'최지원', age:24, bloodType:'A'},
        {name:'양상권', age:28, bloodType:'O'}
    ]

    // map 함수 이용
    let newStudents = students.map((item) => <p key={item.name}>안녕하세요 제 이름은 {item.name}. 
                                        &nbsp;{item.age}살이고 {item.bloodType}형 입니다.</p>)
    console.log(newStudents);

  return (
    <div>
        <h3>Case 1 : 객체의 값을 하나하나 출력</h3>
        <p>안녕하세요 내 이름은 {students[0].name}. 명탐정이죠
            저는 {students[0].bloodType}형 {students[0].age} 살입니다</p>
        <p>안녕하세요 제 이름은 {students[1].name}. 
            저는 {students[1].bloodType}형 {students[1].age} 살입니다</p>
        <p>안녕하세요 제 이름은 {students[2].name}. 
            저는 {students[2].bloodType}형 {students[2].age} 살입니다</p>

        <h3>Case 2 : Map 함수를 이용</h3>
        {newStudents}

        <h3>Case 2-1 : Map 함수 이용해 리턴문에 바로 적기</h3>
        {students.map((item) => <p key={item.name}>안녕하세요 제 이름은 {item.name}. 
                                        &nbsp;{item.age}살이고 {item.bloodType}형 입니다.</p>)}




    </div>
  )
}

export default Ex04
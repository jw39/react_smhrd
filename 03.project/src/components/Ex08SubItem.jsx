import React from 'react'

const Ex08SubItem = ({Title, changeData}) => {
    // props, props.title로 안 하고 {Title}만 적음
    // 구조 분해 할당: 속성을 변수처럼 사용할 수 있음
    // 속성이 여러 개 일때 하위 컴포넌트에서 전달을 받을 때 {title, age} 이런 식으로 사용이 가능하다
  return (
    <div>
        <p>1-2. 하위 컴포넌트에서 입력 받은 값은 {Title} 입니다</p>
        <p>
            2-1. 하위에서 입력 : {" "}
            <input 
                type='test'
                onChange={changeData}
                
            />
        </p>



    </div>
  )
}

export default Ex08SubItem
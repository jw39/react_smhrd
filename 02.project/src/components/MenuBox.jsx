import React from 'react'

const MenuBox = (props) => {
    console.log('전달받는 데이터', props);
    // 객체인 object는 키와 값으로 지정됨.
    // 상위 요소에서 지정한 props(object, 객체)을 전달 받아옴. 키값을 입력하면 값이 넘어간다.
    // 내가 작성한 html 형식으로 부모 컴포넌트에 전달된다.
  return (
        <tr>
          <td>{props.ice} {props.name}</td>
          <td>{props.price}</td>
        </tr>
  )
}

export default MenuBox
//rafce -> 리엑트 함수 안에 리턴문을 가지고 있는 구조를 가진다.
import React, { useContext } from 'react'
import { TodoContext } from '../../context/Ex11TodoContext'
import ListItem from './ListItem';


const List = () => {
  
  // useContext 사용하기! -> useContext(내가 만든 컨텍스트 이름)
  const { todos } = useContext(TodoContext);
  // input 태그에 값을 하나하나 입력할 때마다 todos 배열 형태로 출력
  console.log('todos', todos);

  return (
    <div>
      {/* listitem 컴포넌트 불러오기 */}
      <table>
        <tbody>
          {/* map 함수 사용!
          todos 활용해 map 함수 돌리기
          최종적으로 listitem 컴포넌트에 보낼 것! 
          고유한 식별 속성이름은 key = item.key
          내가 넘겨줄 데이터의 속성 이름은 todo
          */}

            {/* todos를 받아와서 map 함수 돌림. 돌린 객체들을 ListItem 컴포넌트로 전달 */}
          {todos.map((item) => <ListItem key={item.key} todo={item} />)}

          {/* {todos.map((item) => {
            <ListItem key={item.key} todo={item} />
          })} */}

          {/* 테이블 형태로 리스트 보여줄 거 */}

        </tbody>
      </table>



    </div>
  )
}

export default List
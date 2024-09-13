import React, { useContext } from 'react'
import { TodoContext } from '../../context/Ex11TodoContext'


const ListItem = ({ todo }) => {
  const {handleTodoDelete, handleTodoToggle} = useContext(TodoContext)
  // props로 todo 전달받기

  return (
    <>

      <tr>
        <td>
          <input
            type='checkbox'
            checked = {todo.completed} // 이건 왜 한 거지
            // 요소의 키 값을 매개변수로 넣음. 매개변수에 데이터를 넣을 땐 익명 함수를 써줘야 함
            onChange={()=>{handleTodoToggle(todo.key)}}
          />
        </td>
        <td>
          <label
            style={{
              textDecoration : todo.completed ? "line-through" : "none"
            }}
          >
            <span className='todo-text' >
              {/* props로 받은 todo의 text (할 일)을 보여주는 코드 */}
              {todo.text}
            
            </span>
          </label>
        </td>
        <td>
          {/* todo의 key를 handleTodoDelete에게 인자를 넣어 key로 삭제할 예정 */}
          {/* 바로 함수를 호출해서 인자를 전달할 때는 익명함수로 한 번 거치는게 더 좋다
          // 어차피 같은 즉시 호출 함수인데 뭐,,, 즉시 실행이 필요할 때 쓰는 것 같음 */}
          <button onClick={()=>handleTodoDelete(todo.key)}>DEL</button>
        </td>
      </tr>
    </>

  )
}

export default ListItem
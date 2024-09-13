import React, { useContext } from 'react'
import { TodoContext } from '../../context/Ex11TodoContext'

const AddItem = () => {
  
  // uesContext 사용해서 값 전달 받기 (newTodo, setNewTodo, handleNewTodoAddition)
  // Ex11 provider.value에 전역으로 사용하려고 적은 친구들 사용할 예정!
  const { newTodo, setNewTodo, handleNewTodoAddition} = useContext(TodoContext)


  return (
    <div>
      <input type='text'
      value={newTodo}
        // onchange -> 내가 작성한 값을 setNewTodo에 넣기
        // 이벤트 객체 사용해서 내가 작성한 값을 setNewTodo에 넣기
        onChange={(e) => {
          // console.log(e.target.value);
          setNewTodo(e.target.value)
          // console.log('newtodo :', newTodo);
        }
        }
      />
      {/* onclick
      사용자가 버튼 클릭 시, 함수(handleNewTodoAddition) 호출 */}
      <button onClick={handleNewTodoAddition}>ADD</button>
    </div>
  )
}

export default AddItem
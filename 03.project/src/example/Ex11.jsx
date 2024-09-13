import React, { useState } from 'react'
import { TodoContext } from '../context/Ex11TodoContext'
import AddItem from '../components/Ex11/AddItem'
import List from '../components/Ex11/List'
// import ListItem from '../components/Ex11/ListItem'
import '../style/ex11.css'

const Ex11 = () => {
    
    const [todos, setTodos] = useState([
        // 데이터 타입이 다른 경우 객체 형태로 배열 안에 데이터를 담으면 된다.
        {text : '물 마시기' , completed : false , key : 1} 
    ]);

    // 할 일 추가하기, state 생성
    const [newTodo, setNewTodo] = useState('');

    // 새로운 newTodo 데이터를 todos 배열에 추가하는 함수 생성
    const handleNewTodoAddition = () => {
        // 사용자가 입력한 값이 잘 출력되나 확인용
        // console.log('handleNewTodoAddition:', newTodo);
        
        // newTodo 추가하기
        setTodos([
            ...todos, // 스프레드 문법! 
            // ...(), : 기존 배열이 있다면 유지 시킨 후 새로운 데이터를 추가하겠다.
            {
                text: newTodo, 
                completed: false,
                key: todos[todos.length-1].key + 1  
                // todos[1].key + 1
                // 내가 가지고 있는 배열의 제일 마지막에 있는 배열의 key값이 +1 되어야 한다
               
            }
        ])
        setNewTodo('')
        // AddItem에 value에는 newtodo로 지정했음.
        // ADD 버튼 클릭 시 handleNewTodoAddition() 실행이 됨. 
        // 그리고 기존 배열(todos)에 내가 입력한 값(newtodo)를 넣고
        // setNewTodo를 공백으로 지정함 -> 그럼 newTodo가 공백으로 변경될 것이고
        // 바로 input value에 newtodo로 지정한 곳도 텍스트가 남아있지 않고 공백으로 바뀜
        
    }

    // listItem에서 todo.key라는 인자를 전달받음. 매개변수 이름을 del로 받는다
    const handleTodoDelete = (delkey) => {
        // del버튼 눌렀을 때 key값 뜨나 확인용
        console.log('handleTodoDelete', delkey);

        // filter 함수 사용해서 데이터 걸러주기
        const filterList = todos.filter((item) => item.key !== delkey)
        // 이 콘솔창은 배열 형태로 내가 선택한 것이 아닌 것들 (삭제 안 한 애들)만 찍힘
        // console.log('filterList', filterList);
        // key 값을 불러올 건데 내가 선택한 삭제할 키 번호가 아닌 것을 가져오겠다.
        setTodos(filterList) // 할 일 목록을 선택한 삭제키 제외로 변경하겠다
    }

    // 체크박스를 선택했을 때 선택한 체크의 키 값을 ckkey라는 이름으로  넘겨받는다.
    const handleTodoToggle = (ckkey) => {
        console.log('handleTodoToggle', ckkey);

        // find 배열 함수 사용
        // item key를 가져와서 내가 체크한 key값이랑 동일한지 확인
        const targetTodo = todos.find((item) => item.key === ckkey)
        console.log('targetTodo', targetTodo);

        // targetTodo의 존재가 있을 시 if문 실행
        if(targetTodo){
            targetTodo.completed = !targetTodo.completed // 내가 누른 반대의 값을 대입하겠다!
            setTodos([...todos]) //머야 이거
            // 이전의 데이터들 + 바꾼 값만 바꿔서 todos에 넣겠다
            // 을 표기하기 위해 사용?
            // 새로운 배열
            // setTodo를 사용하면 화면이 렌더링됨. 
            // todo안에 있는 데이터는 그대로 유지 됨
            // completed값만 바뀌어서 저장이 됨
        }
    }



    return (
        <TodoContext.Provider value={{ todos, newTodo, setNewTodo ,
        handleNewTodoAddition, handleTodoDelete, handleTodoToggle}}>
            <div className='todo-container'>
                <h1>🍀 TODO LIST 🍀</h1>
                <List/>
                <AddItem/>

            </div>

        </TodoContext.Provider>



    )
}

export default Ex11
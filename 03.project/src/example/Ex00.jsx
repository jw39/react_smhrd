import React , { useState } from 'react'

const Ex00 = () => {
    
    const [todos] = useState([
        {text : '물 마시기' , completed : false , key : 1} ,
        {text : '술 마시기' , completed : false , key : 2} ,
        {text : '밥 마시기' , completed : false , key : 3} 
    ]);

    const test = () => {
        // 스프레드 연산자를 사용하는이유는 리액트의 불변성 법칙을 지키기 위함이고
        // 스프레드 연산자를 사용시 데이터 전체를 복사하여 새로운 데이터를 생성함
        // 불변성 법칙이란 데이터의 구조를 직접 변경하지 않고 변경이 필요할때 새로운 데이터 구조를 생성하는것을 의미
        let a = ['a'];
        let b= [...a];
        let c = a;
        console.log("a : ",a);
        console.log("b : ",b)
        if(a === b)
        {
            console.log("b is same");
        }
        else{
            // 여기로들어옴
            console.log("b is diffrent")
        }

        if(a === c)
        {
            // 여기로들어옴
            console.log("c is same");
        }
        else{
            console.log("c is diffrent")
        }

        if(todos[0]){
            todos[0].completed = !todos[0].completed // 내가 누른 반대의 값을 대입하겠다!
            // setTodos([...todos]) //머야 이거
            console.log(todos)
            console.log(todos[0]);

    }
}
  return (
    <div>
        <button onClick={test}>버튼</button>
        {console.log(todos)}
        {console.log(todos[0])}
    </div>
  )

}

export default Ex00
// import React from 'react'

// const Ex00 = () => {

//     const test = () => {
//         // 스프레드 연산자를 사용하는이유는 리액트의 불변성 법칙을 지키기 위함이고
//         // 스프레드 연산자를 사용시 데이터 전체를 복사하여 새로운 데이터를 생성함
//         // 불변성 법칙이란 데이터의 구조를 직접 변경하지 않고 변경이 필요할때 새로운 데이터 구조를 생성하는것을 의미
//         let a = ['a'];
//         let b= [...a];
//         let c = a;
//         console.log("a : ",a);
//         console.log("b : ",b)
//         if(a === b)
//         {
//             console.log("b is same");
//         }
//         else{
//             // 여기로들어옴
//             console.log("b is diffrent")
//         }

//         if(a === c)
//         {
//             // 여기로들어옴
//             console.log("c is same");
//         }
//         else{
//             console.log("c is diffrent")
//         }
//     }
//   return (
//     <div>
//         <button onClick={test}>btn</button>
//     </div>
//   )
// }

// export default Ex00
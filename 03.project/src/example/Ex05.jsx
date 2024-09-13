import React from 'react'

const Ex05 = () => {

    // 배열 생성
    let food = ['샐러드', '도시락', '컵누들'];
    console.log(food);
    // let newFood = food.map((item) => <p>{item}</p>)
    let newFood = food.map((item) => <button key={item}>{item}</button>)
    // 키 값을 주는게 일반적임

    // 새로운 배열 생성
    let numList = [1,2,3,4,5]
    console.log(numList);
    // 위의 numList를 활용하며 화면에 2,4,6,8,10 이라는 버튼을 생성
    let newNumList = numList.map((item) => <button key={item}>{item*2}</button>)
    console.log(newNumList);

  return (
    <div>
        {newFood}
        <br />
        {newNumList}
    </div>
  )
}

export default Ex05
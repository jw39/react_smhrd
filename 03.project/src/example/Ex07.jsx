import React, {useState} from 'react'
import data from '../json/ex06data.json'


const Ex07 = () => {
    /* filter 함수는 배열의 각 요소에 대해서 주어진 함수의 결과값이 참인 요소들만
    모아서 새로운 배열로 반환하는 함수 
    */
    console.log('data :', data.result[0].birthYear);

    const [newArr, setNewArr] = useState(
        data.result.filter(item => item.birthYear <= 1994)
        // filter() : 조건에 대해 true인 요소들만 새로운 배열로 반환함.
        // newArr에 초기값 useState(1994년 이상인 조건을 만족하는 요소를 담은 새로운 state 값 => newArr)
    );

    

  return (
    <div>
        <h3>1994년생과 나이가 같거나, 그보다 나이가 많은 사람들만 출력하시오.</h3>
        
        {newArr.map((item) => 
            <h5 key={item.title}>{item.title}</h5>)}
        {/* newArr (1994년생 이상 또는 같은 요소만 있는 배열)에서 map() 함수 사용해서
        title만 가져옴! 베리 간단간단 */}

    </div>
  )
}

export default Ex07
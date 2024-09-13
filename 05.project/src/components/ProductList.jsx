import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'

const ProductList = ({list, setList}) => {
    // 1. props로 데이터 전달받기! (구조 분해 할당)

    // 2-1. useEffect 사용 / 리엑트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하는 Hook
    // Hook은 함수 컴포넌트에서 React state와 생명주기 기능을 “연동(hook into)“할 수 있게 해주는 함수

    
    useEffect(()=>{
        // react의 public 폴더는 서버와 통신하고 있는 폴더
        let url = 'http://localhost:3000/bestList.json' //본인 경로 + 파일명이넹

        // 2-2. axios 사용
        axios
            .get(url)
            // 응답 받은 데이터 : res -> 이걸 setList에 담았음
            .then((res)=> setList(res.data.list))
    }, [])

  return (
    <div className='list-container'>
        {/* 
            3. map 함수를 사용해서 productItem에 보내기!
            ProductItem으로 이동 -> Props를 사용해 값 보내기
            item, idx => 속성 이름 동일하게 지정해 값 보내기
            ! key값 설정 -> no로 설정
        */}

        {/* idx는 인덱스 번호 */}
        {/* 
            ()는 return이 묵시적으로 처리 됨
            {}는 return이 안됨. map, filter, find에서는 소괄호 작성하는게 좋음
            return은 한 개만 반환 가능. 여러 개이면 list 형태로 리턴해야함
            
        */}
        {list.map((item, idx)=>(
            <ProductItem key={item.no} item={item} idx={idx}/>
        ))}

    </div>
  )
}

export default ProductList
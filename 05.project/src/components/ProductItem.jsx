import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({ item, idx }) => {
  // props 데이터 전달 받기
  // console.log(item);
  // console.log(idx);
  let nav = useNavigate();
  
  return (
    <div
      className='product-container'
      onClick={()=>{
        // detail로 경로 설정하고 / 1, 2, 3
        nav(`/detail/${idx}`)
      }}
    >
      {/* 1. props로 받아온 데이터 출력 */}
      <img src={item.src} width='200px' />
      <p>{item.title}</p>
      <p>{item.price}￦</p>



    </div>
  )
}

export default ProductItem
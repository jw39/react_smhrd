import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ProductDetail = ({list}) => {

  let { num } = useParams();
  // 주소값, 경로 설정할 때 사용
  console.log('productDetail :', list[num]);

  return (
    <div className='list-container'>
      <div className='detail-item'>
        <h3>{list[num].title}</h3>
        <p style={{textAlign:'center'}}>
          <span>가격 : {list[num].price}￦</span>
          <br/>
          {list[num].delivery === 'free' ?
          <span>배송비 무료!</span>
          : <span>배송비 : {list[num].delivery}￦</span>
        }
        </p>
        <img src={list[num].src} width='200px' height='200px'/> 
        <br/>
        <Link to='/list' style={{ textDecoration : 'none', color : 'black'}}>
        목록으로 이동</Link>
      </div>
      
    </div>
  )
}

export default ProductDetail
import React from 'react'
import { useParams , useSearchParams} from 'react-router-dom'

const Product = () => {
    /*
        useParams
        url의 파라미터 정보를 가져올 수 있다.
        useParams는 하나만 사용이 가능하다 (경로가 겹치면 안 된다는 이야기!)
        - 상품의 고유번호, 회원 번호, 학번, 사번
    */

    /*
        useSearchParams
        라우터 사용 시 queryString 정보를 가져와서 관리하고 싶을 때 사용
        url 뒤에 속성=값&속성=값
        검색기능 / 인기글, 신규글 -> 카테고리화
    */

   let {num} = useParams();
   console.log('게시물 번호', num);
    // about.jsx에서 /1 하면서 경로 설정해줌
    // app.js 에서 num 변수 처리 해줌!

    const [query, setQuery] = useSearchParams()
    console.log('인기글 여부 파악', query.get('best'));

  return (
    <div>


    </div>
  )
}

export default Product
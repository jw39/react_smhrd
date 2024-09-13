import React, {useRef} from 'react'

const Ex15 = () => {
    let pdfRef = useRef()

    const changePdf = () => {
        console.log(pdfRef.current.src);
        // 경로가 반환됨
        pdfRef.current.src === 'http://localhost:3000/pdf/pdfFile1.pdf' 
        ?  pdfRef.current.src = '/pdf/pdfFile2.pdf': 
           pdfRef.current.src = '/pdf/pdfFile1.pdf'
       
    }


  return (
    // viewport height : 문서의 가시 영역 설정
    <div style={{height : '100vh'}}>
        <button onClick={changePdf}>pdf 변경하기</button>
        {/* <iframe> 태그는 html 문서에서 인라인 프레임을 생성하는데 사용
        인라인 프레임은 현재 문서 안에서 다른 문서를 삽입하는 방법을 제공 */}
        <iframe
            ref={pdfRef}
            width='100%'
            height='90%'
            src='/pdf/pdfFile1.pdf '
        >
            {/* public 폴더는 정적인 파일 저장함! */}
        </iframe>
    </div>
  )
}


export default Ex15
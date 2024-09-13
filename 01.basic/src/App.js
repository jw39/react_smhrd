//import logo from './logo.svg';
import './App.css';

function App() {

  // JSX : 하나의 파일 안에 HTML과 JS를 동시에 작성 가능
  //     => 가독성이 좋고, 작성이 쉽다. 

  // JSX 특징
  // (1) 여러 요소가 있다면 반드시 부모요소로 감싸야 한다. 
  //     이 때, 꼭 div 태그가 아니더라도 가능 (<></>)

  // (2) 표현식이 사용 가능 {변수명}
  // 만약, return() 안에서 JS 문법을 사용하려면? {} 안에 작성

  // (단, return() 안에 if문은 사용 불가)
  // (2-1) 조건이 true / false 두개라면 삼항 연산자
  // (2-2) 만약 조건이 하나라면 && 연산자 사용 가능
  //       조건이 3개 이상이면 -> 다중 if문! return문 위에 작성
  // (3) 기존 문법과 다른 점들!
  //     class 대신 className을 사용!
  //     태그를 사용할 때, 소문자만 사용할 것!
  //     ** 대문자는 컴포넌트 이름으로 사용해야 함!
  //     끝 태그 생략 불가! (content가 없더라도)

  // (4) 스타일링 적용이 가능
  // (4-1) 객체 형태로 삽입
  const welStyle = {
    fontSize: "25px",
    color : "blue",
    backgroundColor : "skyblue"
  }
  
  let name ="최지원";
  let state = "true";
  // 변수가 회색 처리되면 생성은 됐지만 사용이 안 된 것을 의미!

  return (

    // (1) 부모 요소
    <div>
      {/* (3) className */}
      <div className="App" style={welStyle}>
        {/* (2) 표현식 사용 예시 */}
        <h1>{name}님 반갑습니다!</h1>

        {/* (2-1) 삼항연산자 사용 */}
        {name === "최지원" ? 
        <p>{name}의 삼항연산자 true 예제입니다</p>
        :
        <p>{name}님 삼항연산자 false 예제입니다</p>
        }
    
        {/* (2-2) && 연산자 이용 */}
        {state === 'true' && <p>조건이 하나일 때는 && 사용!</p>}
        <div>react</div>

      </div>
    </div>

  );
}
// html과 js를 같이 쓸 수 있음.

// app이라는 코드를 추출하겠다. 라는 의미.
// export를 하지 않으면 index.js에서 import를 할 수 없음
export default App;

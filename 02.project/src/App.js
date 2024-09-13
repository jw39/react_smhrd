//import logo from './logo.svg';
import './App.css';
import Member from './components/Member';
import MenuBox from './components/MenuBox';

function App() {
  // rafce : 함수형 컴포넌트를 만드는 단축키 (화살표 함수 구조)

  // 컴포넌트 : 리엑트로 만들어진 앱을 이루는 최소 단위
  // 컴포넌트의 목적성: 반복되는 코드를 하나로 묶어 컴포넌트로 만든다.
  // *** 컴포넌트를 생성할 때 반드시 대문자로 시작! => 기존 HTML 태그와 구분하기 위해서

  // props
  // 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용
  // 상위 컴포넌트 : <컴포넌트이름 속성(key)='값(value)'/>
  // 하위 컴포넌트 : 매개변수로 값을(객체, object 형태로) 전달 받는다 

  let temp = "아이스";
  return (
    <div className="App" >

      {/* 메뉴판 만들기 */}
      <table border='1px'>
        <tr>
          <th>메뉴 이름</th>
          <th>가격</th>
        </tr>
        <tr>
          <td>아메리카노</td>
          <td>2000원</td>
        </tr>
        {/* 메뉴박스에다가 객체 (키와 값)을 props로 전달하겠다 */}
        <MenuBox name={"카페라떼"} price={"2000원"}></MenuBox>
        <MenuBox ice={temp} name={"바닐라라떼"} price={"3500원"}></MenuBox>
        {/* 상위 요소에서 하위 요소인 menuBox.jsx을 import하고  */}
        {/* menubox에서 app.js가 props로 보낸 객체(키와 값)을 받아옴 */}

        {/* 상위 요소에서 하위요소로 props로 객체를 전달함!!! */}
        {/* props라는 이름으로 지칭해서 데이터를 전달하는 거임 */}
      </table>


      {/* 실습) 팀원을 소개하는 컴포넌트 생성하기 */}
      {/* Member라는 이름의 컴포넌트 파일을 생성하기 */}
      {/* props를 활용해서 2개의 속성을 전달하기 (1).teamName (2)MemberName */}

      <Member teamName={"RE+ECO"} MemberName={"최지원"}></Member>
      <Member teamName={"RE+ECO"} MemberName={"오세원"}></Member>
      <Member teamName={"RE+ECO"} MemberName={"이혜성"}></Member>

    </div>

  );
}
export default App;

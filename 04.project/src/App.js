import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main';
import About from './components/About';
import MyPage from './components/MyPage';
import Product from './components/Product';

function App() {

  /*
    1) react router 설치
    - npm i react-router-dom
    2) BrowserRouter
    - App 전체를 감싸주기
    - 브라우저 주소를 감지하는 역할!
    3) Routes
    - 여러 Route(경로)를 감싸서 가지고 있다가, 사용자가 요청한 조건에 맞는
    Route가 있을 때, 그 Route를 렌더링해준다.
    4) Route는 여러가지 경로를 설정할 수 있다.
    참고) Routes가 예쩐에는 Switch라는 이름으로 사용
    5) Route 필수 속성 2가지 : path, element
    - path(경로) : 사용자가 url을 요청했을 때 
    - element : 어떤 컴포넌트를 보여줄 지  
  */

  return (
    <div className="App">
      <h1>React router 학습하기</h1>

      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        <Route path='/product/:num' element={<Product/>}></Route>
        {/* num 변수 처리  */}
      </Routes>

    </div>
  );
}

export default App;

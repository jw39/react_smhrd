import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login'
import Join from './components/Join'
import NotFound from './components/NotFound';

import { useState } from 'react';

function App() {
  
  // 2. 상품 목록을 넣어둘 state 생성
  const [list, setList] = useState([])

  return (
    <div className="container">
      {/* 1. 라우트 생성 후 경로와 element 지정 */}
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/join' element={<Login/>}></Route>
        <Route path='/login' element={<Join/>}></Route>
        <Route path='/list' 
        // 3. list에 state 함수를 props로 list와 setList 함수 전달
        element={<ProductList list={list} setList={setList}/>}></Route>
        <Route path='/detail/:num' element={<ProductDetail list={list}/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      {/* 경로 뒤에  */}
        {/* 4. json 파일의 데이터를 public 폴더 안에 넣기 */}

        {/* 경로 설정
          1. App.js에서 필요한 파일 뒤에 :num 생성 / path='/detail/:num'
          2. Detail에서 params import하고 app.js에서 경로 뒤에 붙인 변수 num을 params로 생성 / let { num } = useParams();
          3. item에서 nav() 경로 설정 필요 / nav(`/detail/${idx}`)
          4. app.js에서 ProductDetail 컴포넌트에 list라는 속성 이름으로 list를 props 로 값 전달 / list={list}
        */}
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;

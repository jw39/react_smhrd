import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieList from './example/MovieList'
import MovieDetail from './example/MovieDetail'
import Home from './example/Home'

const App2 = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/movies' element={<MovieList />} ></Route>
                <Route path='/movie/:num' element={<MovieDetail />}></Route>


            </Routes>

        </div>
    )
}

export default App2
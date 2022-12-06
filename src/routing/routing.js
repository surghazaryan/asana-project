import React from 'react'
import { BrowserRouter, Routes, } from 'react-router-dom';
import {Route} from 'react-router'
import Home from '../components/Home'
import Login from '../components/Login'
import NewProject from '../headerComponent/NewProject'
import Task from '../headerComponent/Task'

function Roting() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Login/>}/>
                <Route path='home' element={<Home/>}>
                    <Route path='' element={<NewProject/>}/>
                    <Route path='task/:id' element={<Task/>}/>
                </Route> 
            </Routes>
        </BrowserRouter>
    </div>
  )
}
export default Roting;

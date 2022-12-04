import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import Task from './headerComponent/Task';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Login/>
          <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Task" element={<Task/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

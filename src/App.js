import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Roting from './routing/routing';


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Login/>
          <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Task" element={<Task/>}/>
        </Routes>

    
      </BrowserRouter> */}
      <Roting/>
    </div>
  );
}

export default App

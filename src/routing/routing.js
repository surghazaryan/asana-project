import React from 'react';
import { BrowserRouter, Routes, } from 'react-router-dom';
import { Route } from 'react-router';
import Home from '../component1/Home';
import Login from '../component1/Login';
import NewProject from '../component2/NewProject';
import Task from '../component2/Task';

function Roting() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='home' element={<Home />}>
            <Route path='' element={<NewProject />} />
            <Route path='task/:id' element={<Task />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Roting;

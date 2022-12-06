import React, { useCallback, useState } from 'react'
import { Outlet } from 'react-router'
import Back from '../headerComponent/Header'
import Members from '../headerComponent/Members'
import NewProject from '../headerComponent/NewProject'


export default function Home() {
  
 
  return (
   
    <div>
        <Members/>
        <div>
          <Outlet/> 
        </div>

    </div>
  )
}

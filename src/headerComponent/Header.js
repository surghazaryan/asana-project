import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"



export default function Header({users}) {
  
  return (
    <div>
      <div className='parent-small-user'>
            {users.map(user => (
                <div key={user.name} className='ss'>
                    <div className='header-samall-user'>
                        {user.name[0]}
                        {user.lastName[0]}
                    </div>
                </div>
            ))}  
      </div>
   </div>
    
  )
}

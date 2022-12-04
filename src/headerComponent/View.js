import React from 'react'

export default function View({users,deleteUser}) {
  return (
  
       users.map(user => ( 
            <div key={user.name}>
                
                    {user.name[0]}
                    {user.lastName[0]}
                   <p>{user.name}</p>
                  <p>{user.lastName}</p>
                <p>{user.email}</p>
                <button onClick={()=>deleteUser(user.name)}>x</button>   
            </div>
        ))  
   
  )
}

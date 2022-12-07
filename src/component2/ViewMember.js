import React from 'react';
import "./Members.css";

export default function ViewMember({ users, deleteUser }) {

  return (
    users.map(user => (
      <div key={user.name} className='parent-view-member'>
        <div className='view-member-parent-name-lastname'>
          <div className='user-small-title'>
            {user.name[0]}
            {user.lastName[0]}
          </div>
          &nbsp;
          <p>{user.name}</p>
          &nbsp;
          <p>{user.lastName}</p>
          &nbsp; &nbsp; <button onClick={() => deleteUser(user.name)} className='members-user-del'>x</button>
        </div>
        <p className='members-user-email'>{user.email}</p>
      </div>
    ))
  );
};

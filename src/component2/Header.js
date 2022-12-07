import React, { useContext } from 'react';
import "./Header.css";
import { headerSmallContext } from './Members';

export default function Header() {
  const { admin } = useContext(headerSmallContext);
  
  return (
    <div className='parent-small-user'>
      <div className='header-samall-user'>
        {admin.name[0]}
        {admin.lastName[0]}
      </div>
      &nbsp;  &nbsp;
      <div>
        {admin.name}
        /
        {admin.lastName}
      </div>
    </div>
  );
};

import { Outlet } from 'react-router';
import Members from '../component2/Members';
import "../component2/NewProject.css";

export default function Home() {
  return (
    <div className='container-home'>
      <Members />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

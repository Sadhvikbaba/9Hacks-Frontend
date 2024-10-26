import './App.css'
import {Sidebar} from "./components/index";
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <div className='bg-black overflow-x-hidden'>
      <Sidebar/>
      <div className='pt-10 p-2 min-h-screen sm:w-[calc(100%-16rem)] ml-0 sm:ml-64'>
      <Outlet/>
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react';
import { CiMenuBurger , CiLogout} from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaWpforms , FaHistory , FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { logout } from '../connecting';
import {logout as authLogout} from "../store/authSlice";
import { useDispatch } from 'react-redux';

function Sidebar() {
  const Dispatch = useDispatch()
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const Navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const logout22 = async () => {
    await logout().then((res) => {console.log(res);
      Dispatch(authLogout())
    })
  }

  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="absolute top-0 left-0 p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only text-white">Open sidebar</span>
        <CiMenuBurger/>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-700">
          <ul className="space-y-2 font-medium">
            <button onClick={toggleSidebar} className='block sm:hidden'> <RxCross1/> </button>
            <li className='hover:bg-gray-400 p-3 rounded-lg flex items-center cursor-pointer text-indigo-600'  onClick={() =>{ Navigate("/") ; toggleSidebar()}}>
                <FaHome/>&nbsp; Home
            </li>
            <li className='hover:bg-gray-400 p-3 rounded-lg flex items-center cursor-pointer text-indigo-600'  onClick={() =>{ Navigate("/outpass") ; toggleSidebar()}}>
                <FaWpforms/>&nbsp; outpass
            </li>
            <li className='hover:bg-gray-400 p-3 rounded-lg flex items-center cursor-pointer text-indigo-600' onClick={() =>{Navigate("/history"); toggleSidebar() } }>
                <FaHistory />&nbsp; history
            </li>
            <li className='hover:bg-gray-400 p-3 rounded-lg flex items-center cursor-pointer text-indigo-600' onClick={() =>{Navigate("/pending-requests"); toggleSidebar() } }>
                <FaHistory />&nbsp; pending
            </li>
            <li className='hover:bg-gray-400 p-3 rounded-lg flex items-center cursor-pointer text-indigo-600' onClick={() =>{Navigate("/login"); toggleSidebar}}>
               &nbsp; Login
            </li>
            <li className='hover:bg-gray-400 p-3 rounded-lg flex items-center cursor-pointer text-indigo-600' onClick={() =>{Navigate("/signup"); toggleSidebar}}>
               &nbsp; signup
            </li>
            <li className='hover:bg-gray-400 p-3 rounded-lg flex items-center cursor-pointer text-indigo-600' onClick={toggleSidebar}>
              <CiLogout/> &nbsp; Logout
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

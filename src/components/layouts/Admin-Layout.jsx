import React from 'react'
import {NavLink, Outlet } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdContacts,MdOutlineMiscellaneousServices } from "react-icons/md";

function AdminLayout() {
  return (
     <header className='text-white'>
        <h1>Admin Control Panel</h1>
        <nav>
        <ul className='flex gap-4 pl-4'>
            <li>
               <NavLink to='/admin/users' className='flex items-center gap-1'><HiUsers/> users</NavLink>
            </li>
            <li>
            <NavLink to='/admin/contacts' className='flex items-center gap-1'><MdContacts /> contacts</NavLink>
            </li>
            <li className='flex items-center gap-1'><MdOutlineMiscellaneousServices />services</li>
            <li className='flex items-center gap-1'><FaHome />Home</li>
        </ul>
        </nav>
        <Outlet/>
     </header>
     
  )
}

export default AdminLayout

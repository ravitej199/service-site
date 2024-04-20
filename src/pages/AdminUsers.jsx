import {React,useEffect, useState} from 'react'
import { useAuth } from '../store/auth';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function AdminUsers() {
    
    const authorizationToken = useAuth();
    const [userData,setUserdata] = useState();

  const getAllUsersData = async () =>{
    try {
        const response = await fetch('http://localhost:3000/admin/users',{
            method:"GET",
            headers:{
                Authorization:  authorizationToken,
            },
        });
        const data = await response.json();
        setUserdata(data);
    } catch (error) {
        console.log(error)
    }
  }

    useEffect(async ()=>{
       getAllUsersData();
    },[])
  return (
    <div className='text-white'>
        <h1>Users</h1>
    <table className='table-auto border border-collapse border-white'>
        <thead>
            <th className='px-4 py-2'>Username</th>
            <th className='px-4 py-2'>Email</th>
            <th className='px-4 py-2'>phone</th>
            <th className='px-4 py-2'>Edit</th>
            <th className='px-4 py-2'>Delete</th>
        </thead>
        <tbody>
           { 
                userData.map((curUser,index)=>{
                    return <tr key={index}><td>{curUser.username}</td>
                    <td className='border px-4 py-2 border-white'>{curUser.email}</td>
                    <td className='border px-4 py-2 border-white'>{curUser.phone}</td>
                    <td className='border px-4 py-2 border-white'><FaEdit /></td>
                    <td className='border px-4 py-2 border-white'><MdDelete /></td>
                    </tr>
                })
            }
        </tbody>
    </table>

      
      
    </div>
  )
}

export default AdminUsers

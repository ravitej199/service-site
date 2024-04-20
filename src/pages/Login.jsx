import React, { useState, useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../store/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const {storetokenLS} = useAuth();
  const responseMessage = useRef();
const navigate = useNavigate();
  const [loginUser, setloginUser] = useState({
    email : "",
    password : "",
  })


  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setloginUser({
      ...loginUser,
      [name] : value

  })
  }

  const submitToBackend = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST', // Specify the HTTP method
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(data), // Convert data to JSON string
      });
      console.log(response);
       
      if (!response.ok) {
        toast.error("invalid credential")
        throw new Error('Failed to send data to backend');
      }
  
      let res = await response.json();
      storetokenLS(res.token);
      // Data sent successfully
      console.log('Data sent successfully');
      toast("Login Successful")
      navigate("/");
    } catch (error) {
      console.error('Error sending data to backend:', error.message);
    }
  };





  const handleSubmit = (e) =>{
    e.preventDefault();
    submitToBackend(loginUser);
    setloginUser({
      email : "",
      password : "",
    })
  }

  return (
    <div className='flex justify-center items-center w-full bg-black mt-20 text-white flex-col gap-4'>
    <p className='text-base sm:text-lg lg:text-2xl font-bold'>Login Form</p>
    <form action="" onSubmit={handleSubmit}>
      <div className="inputs flex flex-col gap-3">
        <div className="email flex flex-col gap-1">
        <label htmlFor="email">Email</label>
      <input type="email" name='email' value={loginUser.email} onChange={handleInput} required id='email' className="text-black bg-gray-200 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500 w-80" placeholder="Enter your text"/>
        </div>
        <div className="password flex flex-col gap-1">
      <label htmlFor="password">Password</label>
      <input type="password" name='password' required id='password' value={loginUser.password} onChange={handleInput} className="text-black bg-gray-200 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500" placeholder="Enter your text" />
        </div>
        <div className="flex login_btn mt-2">
      <button className='text-white rounded border-none bg-purple-500 font-semibold pl-3 pr-3 pt-1 pb-1' type='submit'>Login Now</button>
        <p ref={responseMessage} className='text-red-500'></p>
        </div>

      </div>
    </form>
  </div>
  )
}

export default Login

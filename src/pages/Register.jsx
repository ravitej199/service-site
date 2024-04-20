import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
function Register() {
  const navigate = useNavigate();
  const {storetokenLS} = useAuth();
  const [errors,seterrors] = useState();
  const [user, setUser] = useState({
      username :"",
      email : "",
      phone : "",
      password: "",
  });

  const sendDataToBackend = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST', // Specify the HTTP method
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(data), // Convert data to JSON string
      });

      console.log("response :",response );
  
      if (response.status == 400) {
        seterrors(response.error_messages); 
      }

      const res_data = await response.json();
        console.log(res_data.token);
      // Data sent successfully
      console.log('Data sent successfully');
      setUser({
        username :"",
        email : "",
        phone : "",
        password: "",

      });
      navigate("/login");
      storetokenLS(res_data.token)
  
    } catch (error) {
      console.error('Error sending data to backend:', error.message);
    }
  };
 
  

  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name] : value,
    })
    console.log(user.username);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    sendDataToBackend(user);

    
    
  }
  return (
    <div className='flex justify-center items-center w-full bg-black mt-20 text-white flex-col gap-4'>
      <p className='text-base sm:text-lg lg:text-2xl font-bold'>Registration Form</p>
      <form action="" onSubmit={handleSubmit}>
        <div className="inputs flex flex-col gap-3">
          <div className="username flex flex-col gap-1">
          <label htmlFor="username">Username</label>
        <input type="text" name='username' value={user.username} onChange={handleInput} required id='username' className="text-black bg-gray-200 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500 w-80" placeholder="Enter your text"/>
          </div>
          <div className="email flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input type="email" name='email' value={user.email} onChange={handleInput} required id='email' className="text-black bg-gray-200 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500" placeholder="Enter your text" />
          </div>
          <div className="phone flex flex-col gap-1">
        <label htmlFor="phone">Phone</label>
        <input type="text" name='phone' value={user.phone} onChange={handleInput} required id='phone'  className="text-black bg-gray-200 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500" placeholder="Enter your text"/>
          </div>
          <div className="password flex flex-col gap-1">
        <label htmlFor="Password">Password</label>
        <input type="password" required name='password' value={user.password} onChange={handleInput} id='Password'  className="text-black bg-gray-200 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500" placeholder="Enter your text"/>
          </div>
          <div className="submit_btn mt-2">
        <button className='text-white rounded border-none bg-purple-500 font-semibold pl-3 pr-3 pt-1 pb-1' type='submit'>Register Now</button>
          </div>
          <div className="error_messages">

          </div>

        </div>
      </form>
    </div>
  )
}

export default Register

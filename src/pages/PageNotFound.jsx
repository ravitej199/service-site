import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='flex justify-center items-center m-auto w-2/5 text-white flex-col mt-32'>
        <div className="texts flex flex-col gap-2 justify-center items-center">
        <h1 className='text-9xl'>404</h1>
      <p>SORRY! PAGE NOT FOUND</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint esse sapiente pariatur atque. Laudantium commodi minima nulla iure maxime quas esse enim soluta nobis!</p>
    </div>
     <div className="buttons flex gap-5 mt-6">
     <NavLink to="/Home">
  <button className='bg-black border border-purple-500 text-purple-500 px-4 py-2 rounded-md hover:bg-purple-700 font-semibold text-white'>
    Connect Now
  </button>
</NavLink>

<NavLink to="/services">
  <button className='bg-black border border-purple-500 text-purple-500 px-4 py-2 rounded-md hover:bg-purple-700 font-semibold text-white'>
    Learn More
  </button>
</NavLink> </div>
    </div>
  )
}

export default PageNotFound

import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

function Navbar() {
  const { isLoggedIn } = useAuth();
  console.log("is logged in :" + isLoggedIn);
  return (
    <div className="bg-black text-purple-400">
      <nav className="flex justify-between w-full h-10">
        <div className="logo ml-8 mt-2">Tech</div>
        <div className="links mr-8 mt-2">
          <ul className="flex gap-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/Logout">Logout</NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

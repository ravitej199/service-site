import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';
import Logout from './pages/Logout';
import AdminLayout from './components/layouts/Admin-Layout';
import AdminUsers from './pages/AdminUsers';
import AdminContacts from './pages/AdminContacts';
function App() {
  return (
    <>
   <div className="flex flex-col min-h-screen">
    <BrowserRouter>
    <Navbar/>
    <main className="flex-1">
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Logout' element={<Logout/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path='/admin' element={<AdminLayout/>}>
        <Route path='users' element={<AdminUsers/>}/>
        <Route path='contacts' element={<AdminContacts/>}/>
      </Route>
      </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App

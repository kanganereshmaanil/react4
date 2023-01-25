import './App.css';
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Componant/Home';
import Students from './Componant/Students';
import Contactus from './Componant/Contactus';
import Navbar from './Componant/Navbar'
import Edit from './Componant/Edit';
import Addstudent from './Componant/Addstudent';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Students" element={<Students/>}/>
          <Route path="/Contact" element={<Contactus/>}/>
          <Route path="/Edit" element={<Edit/>}/>
          <Route path="/Addstudent" element={<Addstudent/>}/>
   </Routes>
    </div>
  )
}

export default App
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './Form/Form';
import './App.css';
import Home from './Pages/Home';
import Welcome from './Pages/Welcome';
import Course from './Pages/Course';
import Learn from './Pages/Learn';
import Product from './Pages/Product';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import CourseBook from './Pages/CourseBook';
import NetworkStatusComponent from './NetworkStatusComponent';

function App() {
  return (
    <div >
    {/* <NetworkStatusComponent> */}
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Welcome/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/learn' element={<Learn/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/course-book' element={<CourseBook/>}/>
        </Route>
        <Route path="/form" element={<Login />} />
        <Route path="/coursebook" element={<CourseBook />} />
      </Routes>
      {/* </NetworkStatusComponent> */}
    </div>
  )
}

export default App
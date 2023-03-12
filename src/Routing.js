import React from 'react'
import Navbar from "./components/organism/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { BackgroundLanding } from './test/BackgroundLanding';


const Routing = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/projects' element={<ProjectsPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/contact' element={< ContactPage/>}/>
        <Route path='/test' element={<BackgroundLanding />} />
      </Routes>
      </Router>
    </div>
  )
}

export default Routing
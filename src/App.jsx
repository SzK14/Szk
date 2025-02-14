import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar.jsx';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import WorkPage from './components/WorkPage.jsx';
import Contact from './components/Contact.jsx';



function App() {

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App

import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = ()=>{
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/education' Component={Education} />
        <Route path='/skills' Component={Skills} />
        <Route path='/projects' Component={Projects} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
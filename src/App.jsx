import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import './App.css'
import Project from './sections/Projects'
import projects from './data/projects'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <Contact/>
    </>
  )
}

export default App

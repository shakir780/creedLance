import React from 'react'
import './App.css'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import GettingStarted from './components/GettingStarted/GettingStarted'
import Hero from './components/Hero/Hero'
import Scale from './components/Scale/Scale'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'

const App = () => {
  return (
    <div className='App'>
      <Hero />
      <GettingStarted />
      <Scale />
      <Skills />
      <Categories />
      <Work />
      <Footer />
    </div>
  )
}

export default App
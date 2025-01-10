import React from 'react'
import UpcomingProjects from './components/UpcomingProjects'
import Services from './components/Services'
import Hero from './components/Hero'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <UpcomingProjects />
      <Services/>
    </div>
  )
}

export default App

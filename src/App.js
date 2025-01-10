import React from 'react'
import UpcomingProjects from './components/UpcomingProjects'
import Services from './components/Services'
import Hero from './components/Hero'
import Header from './components/Header'
import PreLoader from './common/PreLoader'
import BackToTop from './common/BackToTop'

const App = () => {
  return (
    <div>
      <PreLoader/>
      <Header/>
      <Hero/>
      <UpcomingProjects />
      <Services />
      <BackToTop/>
    </div>
  )
}

export default App

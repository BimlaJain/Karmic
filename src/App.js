import React from 'react'
import UpcomingProjects from './components/UpcomingProjects'
import Services from './components/Services'
import Hero from './components/Hero'
import Header from './components/Header'
import PreLoader from './common/PreLoader'
import BackToTop from './common/BackToTop'
import Footer from './components/Footer'
import Values from './components/Values'
import Karmic from './components/WhoIsKarmic'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <PreLoader/>
      <Header/>
      <Hero/>
      <UpcomingProjects />
      <Services />
      <Projects/>
      <Karmic/>
      <Values/>
      <Footer/>
      <BackToTop/>
    </>
  )
}

export default App

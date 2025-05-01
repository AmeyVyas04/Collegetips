import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HeroPage from '../components/HeroPage'

function Home() {
  return (
    <>
    <Nav/>
    <div className="hero min-h-screen bg-base-200">
      <HeroPage/>
    </div>
    <Footer/>
    </>
  )
}

export default Home

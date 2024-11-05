import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutme from '../components/Aboutme'
import Myservice from '../components/Myservice'
import Feedbacks from '../components/Feedbacks'
import Footer from '../components/Footer'

function Home() {
  return (
    <section className='w-full flex flex-col'>
      <Navbar activeState={"Home"} />
      <Hero />
      <Aboutme />
      <Myservice />
      <Feedbacks />
      <Footer />
    </section>
  )
}

export default Home
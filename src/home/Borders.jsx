import React from 'react'
import Navbar from '../components/Navbar'
import BorderControll from '../components/BorderControll'

function Borders() {
  return (
    <section className='w-full h-screen sm:h-full flex flex-col'>
        <Navbar activeState={"Border-Generator"}/>
        <BorderControll />
    </section>
  )
}

export default Borders
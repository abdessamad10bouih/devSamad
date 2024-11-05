import React from 'react'
import Navbar from '../components/Navbar'
import GradientForm from '../components/GradientForm'

const GradientGenerator = () => {
  return (
    <section className='w-full flex flex-col'>
        <Navbar activeState={"Tailwind-Gradient"}/>
        <GradientForm />
    </section>
  )
}

export default GradientGenerator
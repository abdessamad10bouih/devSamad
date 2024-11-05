import React from 'react'
import Navbar from '../components/Navbar'
import ErrorComponent from '../components/ErrorComponent'

const Error = () => {
  return (
    <section className='w-full h-screen flex flex-col'>
        <Navbar />
        <ErrorComponent />
    </section>
  )
}

export default Error
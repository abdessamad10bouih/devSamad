import React from 'react'
import Navbar from '../components/Navbar'
import Pallets from '../components/Pallets'

function ColorPallete() {
  return (
    <section className='w-full flex flex-col'>
        <Navbar activeState={"Color-palette"}/>
        <Pallets />
    </section>
  )
}

export default ColorPallete
import React from 'react'
import Navbar from '../components/Navbar';
import FilterGeneratorForm from '../components/FilterGeneratorForm';

const FilterGenerator = () => {
  return (
    <section className='w-full flex h-screen flex-col'>
        <Navbar activeState={"Filter"} />
        <FilterGeneratorForm />
    </section>
  )
}

export default FilterGenerator
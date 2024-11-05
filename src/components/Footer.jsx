import { Facebook, GithubIcon, Linkedin, Mail, Phone, Send } from 'lucide-react'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='w-full sm:flex-col flex h-[30vh] bg-teal-800'>
        <div className='w-[30%] h-full text-white flex flex-col justify-center p-10'>
            <h1 className='text-4xl font-bold text-black stroke-1 stroke-white'>Dev<span className='text-white'>Samad</span></h1>
            <p>Empowering developers with intuitive design tools.</p>
            <div className='w-[50%] h-20 flex justify-between items-center'>
                <a href="https://github.com/abdessamad10bouih" target='_blank' className='hover:scale-110'><GithubIcon /></a>
                <a href="https://www.linkedin.com/in/abdessamad-bouih-235b522a9/" target='_blank' className='hover:scale-110'><Linkedin /></a>
                <a href="tel:+212 679 10 36 79" className='hover:scale-110'><Phone /></a>
                <a href="mailto:bouihabdessamad5@gmail.com" className='hover:scale-110'><Mail /></a>
            </div>
        </div>
        <div className='w-[40%] h-full flex flex-col p-10'>
            <h1 className='text-white font-bold text-xl underline mb-2'>Quick Links</h1>
            <ul className='flex flex-col justify-around'>
                <li className='text-white'><Link to={'/'}>Home</Link></li>
                <li className='text-white'><Link to={'/border-generator'}>Border Generator</Link></li>
                <li className='text-white'><Link to={'/palette'}>Color Palette</Link></li>
                <li className='text-white'><Link to={'/tailwind-gradient'}>Background Gradient</Link></li>
                <li className='text-white'><Link to={'/filter'}>Filter Generator</Link></li>
            </ul>
        </div>
        <div className='w-[30%] text-white h-full flex flex-col p-10'>
            <h1 className='text-white font-bold text-xl underline mb-2'>Stay Updated</h1>
            <h3>Subscribe to our newsletter for the latest updates and tips.</h3>
            <div className='w-full h-10 border border-white flex items-center justify-center mt-2 px-2'>
                <input type="text" name="email" id="email" placeholder='Enter your email' className='w-full h-full bg-transparent outline-none placeholder:text-white' />
                <Send className='cursor-pointer' />
            </div>
        </div>
    </footer>
  )
}

export default Footer
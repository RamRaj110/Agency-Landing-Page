import React from 'react';
import Nav from './Nav';
import {motion} from 'framer-motion';
function Header() {
  return (
    <div id='Header' className='relative bg-black min-h-screen flex flex-col text-center md:text-start md:flex-row items-center justify-between w-full overflow-hidden'>
      
    <div 
      className='absolute  inset-0 md:inset-y-0 md:left-1/2 md:right-0 bg-cover bg-center'
      style={{backgroundImage: `url(/Designer.png)`}}
    >
      <div 
          className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent'
          aria-hidden="true"
        ></div>
    </div>
       <Nav />

      <motion.div
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: 1 }}
      className='absolute uppercase text-white  z-10  mt-20 md:mt-24'>
        <p className=' text-[#6d95fc] text-xs mt-12 md:my-6 tracking-widest   md:ml-20 '>Welcome to Creatic</p>
        <div className='flex md:block flex-col tracking-wider items-center text-center md:text-start font-bold text-4xl md:text-5xl md:ml-20 max-w-xl'>
        <h2 className='text-5xl' >We are</h2>
        <h1 className=' text-[#6d95fc] text-5xl'>Creative </h1>
        <h2>Design Agency</h2>
        <span className='block w-32 md:mt-6 h-[2px] mb-8 bg-[#6d95fc]' aria-hidden="true"></span>
        </div>
       <div className='flex md:block flex-col md:w-1/2 md:ml-20 items-center mt-24 md:mt-0'>
       <p className='mt-28 text-sm font-light leading-relaxed md:mt-0 pl-4 md:pl-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptate est aspernatur eligendi magni qui! Amet minima quaerat voluptates quis!</p>
       <button 
            className='border border-[#6d95fc] text-white px-6 py-3 mt-8 rounded-full font-medium text-sm tracking-wider hover:bg-[#6d95fc] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#6d95fc] focus:ring-offset-2 focus:ring-offset-black'
            aria-label="Contact our creative design agency"
          >
            GET IN TOUCH
          </button>
       </div>
      
      </motion.div>
    </div>
  )
}

export default Header

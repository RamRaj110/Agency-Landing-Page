import React from 'react';
import {motion} from 'framer-motion';

function About() {
  return (
    <div id='About'
    className='relative   bg-black text-white h-[70vh] 
      md:h-[92vh] overflow-hidden'>
      <motion.div 
       initial={{ opacity: 0, y: 100 }}
       transition={{ duration: 1 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: 1 }}
      className='absolute  inset-0 w-full h-full overflow-hidden'>
        <img 
          src="/about.jpg" 
          alt="Robotic image." 
          className='w-full h-full md:w-1/2 object-cover  scale-x-[-1]'
        />
        <div 
          className='absolute inset-0 bg-gradient-to-r  md:bottom-0 md:left-0 md:w-0  from-black/80  to-transparent'
          aria-hidden="true"
        />
       </motion.div>

{/* content goes here---------*/}
      <motion.div 
       initial={{ opacity: 0, x: 250 }}
       transition={{ duration: 1.5 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: 1 }}
      className='relative md:absolute md:right-3  z-10 md:w-1/2 container mx-auto px-4 md:px-8 py-10 md:py-24 flex items-center justify-center align-center'>
        <div className='max-w-2xl items-center justify-center flex md:block flex-col'>
          <h2 className='text-[#6d95fc] text-lg md:text-sm flex justify-center md:justify-start align-center text-center md:ml-0 md:mb-5 tracking-widest uppercase'>
            About Us
          </h2>
          
          <h1 className='text-2xl md:w-1/2 md:text-3xl font-bold md:mt-0 mt-6 tracking-wider flex text-center md:text-left  justify-center  flex-col md:block'>
            We Bring <span className='text-[#6d95fc]'>Creative </span> Ideas To Life.
          </h1>
          
          <span 
            className='block w-20 h-[2px] mt-2 md:mt-4 bg-white' 
            aria-hidden="true"
          />
          
          <p className='text-xs text-[#6d95fc] font-light mt-2 md:mt-4 '>
            We Love Creating
          </p>
          
          <div className='space-y-4 mt-4 text-sm md:text-base flex md:block flex-col align-center  justify-center text-center md:text-left'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, est.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptate est aspernatur eligendi magni qui! Amet minima quaerat voluptates quis!
            </p>
          </div>
          
          <button 
            className='border border-[#6d95fc] text-white px-6 py-3 mt-8 rounded-full font-medium text-sm tracking-wider hover:bg-[#6d95fc] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#6d95fc] focus:ring-offset-2 focus:ring-offset-black'
            aria-label="Contact our creative design agency"
          >
            Read More
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
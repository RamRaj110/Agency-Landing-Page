import React from 'react';
import {motion} from 'framer-motion';


function Services() {
  return (
    <div  id='Services'
    className='md:flex align-center justify-center text-center md:text-start bg-black text-white min-h-[80vh] p-14 md:p-0'>
      <motion.div 
      initial={{opacity:0, y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:1}}
      className='md:w-1/2  md:m-20'>
      <h2 className='text-[#6d95fc] text-lg md:text-sm md:ml-0 mb-5  tracking-widest uppercase'>
           Our services 
          </h2>
          
          <h1 className='text-2xl md:text-3xl font-bold md:mt-0 tracking-wider '>
          Experience The Power <br />of <span className='text-[#6d95fc]'>Innovation.</span> 
          </h1>
          
          <span 
            className='block w-20 h-[2px] mt-4 bg-white md:mx-0 mx-auto' 
            aria-hidden="true"
          />          
          <div className='space-y-4 mt-4 md:blockflex flex-col align-center  justify-center text-center md:text-start text-sm md:text-base'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, est.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptate est aspernatur eligendi magni qui! Amet minima quaerat voluptates quis!
            </p>
          </div>
          
          <button 
            className='border border-[#6d95fc] text-white px-6 py-3 my-8 rounded-full font-medium text-sm tracking-wider hover:bg-[#6d95fc] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#6d95fc] focus:ring-offset-2 focus:ring-offset-black uppercase'
            aria-label="Contact our creative design agency"
          >
            View all
          </button>
      </motion.div>
      <motion.div 
      initial={{opacity:0, x:50}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:1}}
      className='md:w-1/2 col-span-2 md:mr-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:p-10 '>
           <div
           
           className=' p-4  bg-custom-gradient flex flex-col items-center justify-center text-center rounded-lg'>
            <img src="/mobile_site.svg" alt="" className='w-20' />
            <h1 className='text-lg md:text-xl font-semibold mt-4 tracking-wider text-[#6d95fc]'>Mobile Site</h1>
            <p className='font-extralight '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </div>
           <div className='p-4 bg-custom-gradient  flex flex-col items-center justify-center text-center rounded-lg ' >
            <img src="/website-builder.svg" alt="" className='w-20' />
            <h1 className='text-xl md:text-xl tracking-wider font-semibold mt-4 text-[#6d95fc]'>Website Builder</h1>
            <p className='font-extralight '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </div>
           <div className='p-4  bg-custom-gradient flex flex-col items-center justify-center text-center rounded-lg'>
            <img src="/modern-design.svg" alt="" className='w-20' />
            <h1 className='text-xl md:text-xl tracking-wider font-semibold mt-4 text-[#6d95fc]'>Modern Design</h1>
            <p className='font-extralight '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

           </div>
           <div className=' p-4 bg-custom-gradient flex flex-col items-center justify-center text-center rounded-lg'>
            <img src="/online-learning.svg" alt="" className='w-24' />
            <h1 className='text-xl md:text-xl font-semibold tracking-wider mt-4 text-[#6d95fc]'>Online Learning</h1>
            <p className='font-extralight '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </div>
      </motion.div>
    </div>

  )
}

export default Services

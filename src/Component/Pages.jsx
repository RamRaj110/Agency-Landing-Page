import React from 'react'
import {motion} from 'framer-motion';

function Pages() {
  return (
    <div id='Pages'
    className='  w-full h-full flex justify-center items-center md:items-start bg-black text-white overflow-hidden'>
        <motion.div
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:1}}
        className='relative hidden md:block  overflow-hidden inset-0'>
        <img src="/right-half.png" alt="right-half image" className='w-full overflow-hidden ' />
        <div 
          className='absolute inset-0 bg-gradient-to-r   from-black/95  to-transparent'
          aria-hidden="true"
        />
        </motion.div>
    
      <motion.div 
      initial={{opacity:0, y:-100}}
      transition={{duration:1}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:1}}
      className=' w-full md:w-1/3 flex flex-col justify-center items-center p-8  text-center  '>
    <h1 className='text-3xl md:text-4xl font-bold tracking-widest uppercase'>what our <span className='text-[#6d95fc]'>clients</span> say?</h1>
    <span className='block w-32 mt-2  h-[2px]   bg-[#6d95fc]' aria-hidden="true"></span>
    <p className='uppercase my-2'>testimonials</p>

    <div className='w-full md:w-80  h-full md:h-48 flex flex-col justify-center items-start p-4 md:m-14 border border-blue-500 md:p-8 bg-[#1a1a1a] rounded-lg md:rounded-3xl mt-4 md:mt-28'> 
        <p className='text-sm font-extralight text-left'>Lorem ipsum, dolor sit amet contur adipisicing elit. Recusandae, enim. Nobis doloribus deleniti modi!</p>
        <div className='flex justify-center   items-center mt-4'>
        <img src="/avatar.svg" alt="client image" className='w-16 h-16 border-2 border-blue-400 object-cover rounded-full '/>
        <div className='flex flex-col ml-4 justify-center items-start tracking-wide'>
        <h3 className='text-lg font-bold'>John Doe</h3>
        <h1 className='text-[#6d95fc] font-light text-xs'>@johndoegmail.com</h1>
        </div>
       
        </div>
       
       
    </div>
    <button 
            className='border border-[#6d95fc] text-white px-6 py-3 mt-4 md:mt-0 rounded-full font-medium text-sm tracking-wider hover:bg-[#6d95fc] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#6d95fc] focus:ring-offset-2 focus:ring-offset-black uppercase'
            aria-label="Contact our creative design agency"
          >
            view all testimonials
          </button>
      </motion.div>
      <motion.div
      initial={{opacity:0, x:100}}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:1}}
      className='hidden md:block relative overflow-hidden'>
        <img src="/left-half.png" alt="left-half image" className='object-fill '/>
        
        <div 
          className='absolute inset-0 bg-gradient-to-l  from-black/95  to-transparent'
          aria-hidden="true"
        />
      </motion.div>
    </div>
  )
}

export default Pages

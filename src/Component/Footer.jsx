import React from 'react'
import {motion} from 'framer-motion'

function Footer() {
  return (
    <div  className='bg-black  text-white '>
     <motion.div
      initial={{opacity:0, y:50}}
      transition={{duration:1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:1}}
     className='w-full h-[70vh]  flex flex-col items-center justify-center text-center'>
        <div className='md:w-1/2 flex  flex-col items-center  justify-center text-center   '>
        <div className=' flex flex-col items-center  justify-center'>
        <h1 className='text-3xl   font-bold md:mt-0 mt-6 tracking-wider flex text-center  justify-center  flex-col uppercase text-[#6d95fc]'>
          Creative 
        <p className='text-xs text-white font-normal '>Creative Agency</p>
        </h1>
        <span
          className='block w-20 h-[2px] my-2 md:mt-2 bg-white'
          aria-hidden="true"
        />
        </div>
        <div>
            <ul className='text-[#6d95fc] flex flex-col md:flex-row md:gap-8 p-4 font-semibold tracking-wide cursor-pointer'>
                <a href="#Header">Categories</a>
                <a href="#About">About</a>
                <a href="#Services">Services</a>
                <a href="#Portfolio">Portfolio</a>
                <a href="#Pages">Pages</a>
                <a href="#Contact">Contact</a>
            </ul>
        </div>
            <p className='font-extralight px-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel soluta maxime a delectus molestiae ut!</p>
        <div className='text-[#6d95fc] p-4'>
        <i class="fa-brands fa-facebook p-2"></i>
        <i class="fa-brands fa-instagram p-2"></i>
        <i class="fa-brands fa-whatsapp p-2"></i>
        <i class="fa-brands fa-linkedin p-2"></i>
        <i class="fa-brands fa-pinterest p-2"></i>
        <i class="fa-brands fa-twitter "></i>
        </div>
       
        </div>  
        </motion.div>
        <div className='font-extralight text-xs tracking-wide text-center pb-4 '>
            <p>Copyright <span>©</span>2003-2025 Creatic Agency All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer

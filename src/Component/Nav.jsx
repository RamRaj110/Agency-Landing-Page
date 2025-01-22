import React, { useState,useEffect } from 'react';

function Nav() {
  const [show, setShow] = useState(false);

useEffect(() => {
  if(show){
    document.body.style.overflow = 'hidden';
  }else{
    document.body.style.overflow = 'auto';
  }
  return () => {
    document.body.style.overflow = 'auto';
  }
  }, [show]);

  return (
    <div className='flex absolute top-0 justify-between bg-transparent text-white h-16 items-center w-full px-2 md:px-20    mt-4 z-50'>
      <div>
        <h1 className='text-4xl  text-[#6d95fc] font-semibold uppercase'>Creatic <span className='text-white text-xs font-extralight tracking-widest flex items-center justify-center'>Creative Agency</span></h1>
      </div>
       <ul className=' gap-6 hidden md:flex'>
       <a smooth href="#Header" className='hover:text-gray-400 transition'>Home</a>
        <a smooth href="#About" className='hover:text-gray-400 transition'>About Us</a>
        <a smooth href="#Services" className='hover:text-gray-400 transition'>Services</a>
        <a smooth href="#Portfolio" className='hover:text-gray-400 transition'>Portfolio</a>
        <a smooth href="#Projects" className='hover:text-gray-400 transition'>Projects</a>
        <a smooth href="#Pages" className='hover:text-gray-400 transition'>Pages</a>
        <a  smooth href="#Contact" className='hover:text-gray-400 transition'>Contact Us</a>
       <button className='text-[#6d95fc] '><i class="fa-solid fa-magnifying-glass"></i></button>
       </ul>
       {/* -----------------Burger-menu--------------- */}
       <div onClick={()=>{setShow(true)}} className='text-2xl absolute right-6  pb-4 md:hidden lg:hidden'> <i class="fa-solid fa-bars"></i></div>

       <div className={`md:hidden ${show ? 'fixed w-full' :'h-0 w-0'} text-black lg:hidden  top-0 bottom-0  right-0 bg-white h-screen  overflow-hidden transition-all`}>
        <div onClick={()=>{setShow(false)}} className='text-3xl cursor-pointer px-4 mt-2 flex justify-end md:hidden lg:hidden'>
        <i class="fa-solid fa-xmark"></i>
        </div>
          <ul className='flex flex-col items-center justify-center  text-lg font-medium  mt-4'>
            <a  onClick={()=>{setShow(false)}}  href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
            <a onClick={()=>{setShow(false)}}  href="#About" className='px-4 py-2 rounded-full inline-block'>About Us</a>
            <a onClick={()=>{setShow(false)}}  href="#Services" className='px-4 py-2 rounded-full inline-block'>Services</a>
            <a onClick={()=>{setShow(false)}}  href="#Portfolio" className='px-4 py-2 rounded-full inline-block'>Portfolio</a>
            <a  onClick={()=>{setShow(false)}}  href="#Pages" className='px-4 py-2 rounded-full inline-block'>Pages</a>
            <a onClick={()=>{setShow(false)}}  href="#Contact" className='px-4 py-2 rounded-full inline-block'>Contact Us</a>
          </ul>
       </div>
    </div>
  );
}

export default Nav;

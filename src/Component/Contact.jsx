import React from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e759884b-ef43-460f-ac56-a906f347a01c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message send Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div id='Contact' className='w-full md:flex items-center justify-center  text-center md:text-start overflow-hidden bg-black text-white p-6 md:p-10'>
      <motion.div 
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: 1 }}
      className=' flex flex-col items-center md:items-start justify-center  md:w-1/2 md:p-20'>
        <h1 className='text-2xl md:w-1/2 md:text-3xl font-bold md:mt-0 mt-6 tracking-wider flex text-center md:text-left  justify-center  flex-col md:block uppercase'>
          Get in <span className='text-[#6d95fc]'>touch </span>
        </h1>
        <span
          className='block w-20 h-[2px] my-6 md:mt-4 bg-white'
          aria-hidden="true"
        />
        <p className='font-extralight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quidem vero fuga ex est distinctio vitae voluptatibus tenetur animi in.</p>

        <div>
        <div className='flex items-start justify-start  mt-4' >
          <i class="fa-solid fa-location-dot text-2xl text-[#6d95fc]"></i>
          <div className='flex flex-col items-start justify-start ml-4'>
            <span className='font-bold tracking-wider'>Office Address</span>
            <p className='text-[#6d95fc] text-xs font-light'>98, 5th Avenue, New York</p>
          </div>
        </div>
        <div className='flex items-start justify-start mt-4' >
          <i class="fa-solid fa-phone text-2xl text-[#6d95fc]"></i>
          <div className='flex flex-col items-start ml-4'>
            <span className='font-bold tracking-wider'>Call Us</span>
            <p className='text-[#6d95fc] text-xs font-light'>+1 234 567 890</p>
          </div>
        </div>
        <div className='flex items-start mt-4' >
          <i class="fa-solid fa-envelope text-2xl text-[#6d95fc]"></i>
          <div className='flex flex-col items-start ml-4'>
            <span className='font-bold tracking-wider '>Mail Us</span>
            <p className='text-[#6d95fc] text-xs font-light'>@gmail.com</p>
          </div>
        </div>
      </div>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{opacity:1, x:0}}
      viewport={{ once: 1 }}

      className='w-full md:w-1/2  md:p-10 mt-10 md:mt-0'>
        <div className='border border-[#6d95fc] md:w-96 md:h-full p-10 rounded-xl bg-[#1a1a1a]'>
          <form action="" onSubmit={onSubmit}>
            <p className='text-xs font-extralight tracking-wider mb-2 text-start'>Name</p>
            <input type="text" className='border  border-[#6d95fc] bg-transparent w-full mb-4 py-1 px-2' placeholder='Your name' required/>
            <p className='text-xs font-extralight tracking-wider mb-2 text-start'> Email</p>
            <input type="email" className='border px-2 py-1  border-[#6d95fc] bg-transparent w-full mb-4' placeholder='Your email' required />
            <p className='text-xs font-extralight tracking-wider mb-2 text-start'>Message</p>
            <textarea className='border border-[#6d95fc] bg-transparent w-full h-32 py-1 px-2 resize-none'  placeholder='Your Message...'></textarea>
            <button
              className=' border border-[#6d95fc] text-white px-6 py-3 mt-8 md:ml-14 rounded-full font-medium text-sm tracking-wider hover:bg-[#6d95fc] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#6d95fc] focus:ring-offset-2 focus:ring-offset-black'
              aria-label="Contact our creative design agency"
            >
              {result ? result : "Send Message"}
            </button>
          </form>
        </div>

      </motion.div>     
    </div>
  )
}

export default Contact

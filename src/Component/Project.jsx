import React from 'react';
import '../App.css';
import Slider from "react-slick";
import {motion} from 'framer-motion';

import face from '../assets/face.jpeg';
import face0 from '../assets/face0.jpeg';
import face1 from '../assets/face1.jpeg';
import face2 from '../assets/face2.jpeg';

function Project() {
    const imgData = [
        { id: 1, title: "Project 1", img: face },
        { id: 2, title: "Project 2", img: face0 },
        { id: 3, title: "Project 3", img: face1 },
        { id: 4, title: "Project 4", img: face2 },
    ];

    // Slideshow settings
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div id='Project' className="bg-black text-white w-full min-h-screen pb-16">
            <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1}}
            viewport={{ once: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center pt-16 uppercase">
                <h1 className="text-4xl font-bold md:w-1/3 mx-4 md:mx-auto">
                    Enjoy our <span className="text-[#6d95fc]">latest</span> projects
                </h1>
                <div className="flex justify-center text-center items-center my-4">
                    <span className="block w-20 h-[3px] bg-white" aria-hidden="true"></span>
                    <p className="text-[#6d95fc] tracking-widest px-2">our work</p>
                    <span className="block w-20 h-[3px] bg-white" aria-hidden="true"></span>
                </div>
            </motion.div>
            <div className="max-w-80 md:max-w-5xl mx-auto px-4">
                <Slider {...settings}>
                    {imgData.map((data) => (
                        <div className="px-4" key={data.id}>
                            <div className="flex justify-center items-center">
                                <img
                                    src={data.img}
                                    alt={`Slide showing ${data.title}`}
                                    className="my-6 h-80 md:h-[420px] w-full  object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.5}}
            viewport={{ once: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="block md:flex  justify-center w-full h-80 items-center text-center md:text-start mt-8 ">
                <div className='md:w-1/2  mx-12  md:pl-28 uppercase'>
                    <p className=' tracking-widest px-2 md:px-0 text-lg '>why us?</p>
                    <span className='block w-20  m-auto md:m-0  md:mt-0 h-[4px] md:h-[2px]  bg-[#6d95fc]' aria-hidden="true"></span>
 
                    <h1 className='text-2xl md:text-4xl md:font-bold mt-4 tracking-wider'>25 years of <span className='text-[#6d95fc] '>experience</span> as a creative agency</h1>
                    <button
                        className='border border-[#6d95fc] text-white px-6 py-3 my-2 rounded-full font-medium text-sm tracking-wider hover:bg-[#6d95fc] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#6d95fc] focus:ring-offset-2 focus:ring-offset-black uppercase md:mt-16'
                    >read more</button>
                </div>
                <div className='w-80 md:w-1/2 text-sm md:pr-32 mx-auto '>
                    <p className=' font-extralight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui atque, fuga eos possimus, praesentium animi repellendus quod quasi iure, sit beatae accusantium numquam! </p>
                    <ul className='text-left ml-16 md:ml-0 md:mt-6'>
                        <li  className="mt-2 space-x-2">  <i class="fa-regular fa-circle-check text-[#6d95fc] "></i>
                            <span className='font-extralight'> Happy Customer</span>
                        </li>
                        <li  className="mt-2 space-x-2"><i class="fa-regular fa-circle-check text-[#6d95fc]"></i>
                            <span className='font-extralight'>Experienced Team</span>
                        </li>
                        <li  className="mt-2 space-x-2"><i class="fa-regular fa-circle-check text-[#6d95fc]"></i>
                            <span className='font-extralight'>Modern Technology</span>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}

export default Project;

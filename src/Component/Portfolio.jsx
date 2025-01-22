import React from 'react'
import {motion} from 'framer-motion';

function Portfolio() {
    return (
        
        <div id='Portfolio' className='bg-custom-gradient'>
            <motion.div
            initial={{opacity:0, y:50}}
            transition={{duration:1}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:1}}
            className='grid p-10 mx-auto  text-white md:grid-cols-4 grid-cols-2 gap-10 text-center '>
                <div className='flex flex-col items-center justify-center '>
                    <img src="/Team.svg" alt="" className='w-40 ' />
                    <h2 className='text-3xl font-bold'>50+</h2>
                    <p className='text-sm text-[#6d95fc]'>Team Members</p>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <img src="/Project.svg" alt="" className='w-32' />
                    <h2 className='text-3xl font-bold'>200+</h2>
                    <p className='text-sm text-[#6d95fc]'>Project Done</p>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <img src="/Happy.svg" alt="" className='w-28' />
                    <h2 className='text-3xl font-bold'>500+</h2>
                    <p className='text-sm text-[#6d95fc]'>Happy Clients</p>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <img src="/Award.svg" alt="" className='w-36' />
                    <h2 className='text-3xl font-bold'>75+</h2>
                    <p className='text-sm text-[#6d95fc]'>Award Winning</p>
                </div>
            </motion.div>

        </div>
    )
}

export default Portfolio

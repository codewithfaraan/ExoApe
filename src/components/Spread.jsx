import { motion } from 'motion/react';
import React from 'react';

function Spread() {
  return (
    <div className='w-full bg-white py-20'>
        <div className='max-w-screen-2xl lg:max-w-screen-xl mx-auto px-5 sm:px-10'>
            <div className="flex items-center justify-center gap-2">
                <svg 
                viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path>
                </svg>
                <h1>In the media</h1>
            </div>
            <div className="text mt-10 text-center">
              {["Spread", "the News"].map((item, index) => {
                return (
                  <h1 key={index} className='capitalize text-6xl sm:text-9xl tracking-tighter overflow-hidden'>
                  <motion.span
                    initial={{rotate: 90, y: "40%", opacity: 0}}
                    whileInView={{rotate: 0, y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{ease: [0.22, 1, 0.36, 1], duration: .8}}
                    className='inline-block origin-left'
                  >
                    {item}
                  </motion.span>
                </h1>
                )
              })}
                <p className='w-2/3 mx-auto mt-5 sm:mt-10 text-md text-xl sm:w-1/3'>Find out more about our work on these leading design and technology platforms.</p>
                <a className='border-b-[1px] border-zinc-900 pb-1 mt-5 inline-block' href="#">Browser all news</a>
            </div>
        </div>
    </div>
  );
};

export default Spread;
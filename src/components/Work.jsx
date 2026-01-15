import { motion } from 'motion/react';
import React, { useState } from 'react';

function Work() {
  
  const [elems, setElems] = useState([
    {heading: "Pixelflakes", subHeading: "Architechtural Marketing Agency", video: "https://a.storyblok.com/f/133769/x/833a506717/pixel-flakes-hover.mp4", image: "https://i.pinimg.com/736x/2e/14/d9/2e14d9454e07214edc86c1b11174f3ba.jpg"},
    {heading: "Pixelflakes", subHeading: "Architechtural Marketing Agency", video: "https://a.storyblok.com/f/133769/x/833a506717/pixel-flakes-hover.mp4", image: "https://i.pinimg.com/736x/45/a9/be/45a9bee47ebf676c88b405208093c2c8.jpg"},
    {heading: "Pixelflakes", subHeading: "Architechtural Marketing Agency", video: "https://a.storyblok.com/f/133769/x/833a506717/pixel-flakes-hover.mp4", image: "https://i.pinimg.com/1200x/ba/57/5c/ba575c165fc04e0600d6304e13b1c179.jpg"},
    {heading: "Pixelflakes", subHeading: "Architechtural Marketing Agency", video: "https://a.storyblok.com/f/133769/x/833a506717/pixel-flakes-hover.mp4", image: "https://i.pinimg.com/736x/1c/f3/2d/1cf32d0c7f6a19ef652cc468f576ae25.jpg"}
  ])

  return (
    <div className='w-full relative overflow-hidden'>
       <div className='max-w-screen-2xl lg:max-w-screen-xl mx-auto px-5 py-20 sm:px-10'>
         <div className="featured flex gap-3">
            <svg 
            viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path>
            </svg>
          <h1 className='capitalize'>Featured Projects</h1>
         </div>
         <h1 className='text-6xl sm:text-[13rem] sm:leading-none sm:tracking-tight my-5 overflow-hidden'>
            <motion.span
            initial={{rotate: 90, y: "40%", opacity: 0}}
            whileInView={{rotate: 0, y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{ease: [0.22, 1, 0.36, 1], duration: .8}}
              className='inline-block origin-left'
            >
              Work
            </motion.span>
          </h1>
         <p className=' text-md'>
          Highlights of cases that we passionately built with forward-thinking clients and friends over the years.
         </p>
         <div className='elems mt-10 sm:flex sm:flex-wrap sm:gap-5'>
          {elems.map((item, index) => {
            return <div key={index} className="elem w-full sm:w-[48%] mt-10">
            <div className="video overflow-hidden w-full h-[104vw] sm:h-[50vw] relative">
              <motion.img
                initial={{opacity: 1}}
                whileHover={{opacity: 0}} 
                data-scroll data-scroll-speed="-.5" 
                className='w-full h-full object-cover sm:absolute sm:z-[2] sm:top-0 sm:left-0' 
                src={item.image} alt="" 
              />
              <video autoPlay loop muted className='w-full h-full scale-[1.08] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block z-[1]' src={item.video}></video>
            </div>
            <div className='mt-4'>
              <h3 className='font-semibold'>{item.heading}</h3>
              <p className='capitalize opacity-40'>{item.subHeading}</p>
            </div>
          </div>
          })}
         </div>
       </div>
    </div>
  );
};

export default Work;
import gsap from 'gsap';
import { Power4, ScrollTrigger } from 'gsap/all';
import { marker } from 'motion/react-client';
import React, { useEffect, useRef } from 'react';

function PlayReel() {
  
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 1,
      },
    })
    tl
    .to(videodiv.current, {
      width: "125%",
      height: "125%",
      ease: Power4,
    }, 'a')
    .to(play.current, {
      x: "50%",
      ease: Power4,
    }, 'a')
    .to(reel.current, {
      x: "-50%",
      ease: Power4,
    }, 'a')
  })

  return (
    <div ref={parent} className='w-full h-screen overflow-hidden relative bg-black'>
        <div ref={videodiv} className='w-40 sm:w-96 overflow-hidden aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <video autoPlay loop muted src='https://v1.pinimg.com/videos/iht/720p/d6/b9/1d/d6b91d8b58b935dc153d01a490eaf927.mp4' className='w-full h-full scale-[3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></video>
        </div>
        <div className='overlay w-full absolute h-full text-white flex flex-col justify-between py-20'>
            <div className=' w-fulle gap-3 flex items-center justify-center'>
                <svg 
                viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path>
                </svg>
                <h3 className='text-sm'>Work in motion</h3>
            </div>
            <h1 className='w-full flex items-center justify-center gap-20 sm:gap-80'>
              <div ref={play} className='text-4xl sm:text-8xl font-light'>Play</div>
              <div ref={reel} className='text-4xl sm:text-8xl font-light'>Reel</div>
            </h1>
            <p className='text-center px-10 text-xs'>our work is best experienced in motion. Don't forget to put on your headphones</p>
        </div>
    </div>
  );
};

export default PlayReel;
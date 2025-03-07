import React from 'react';
import Sale from '../components/Sale';
import Reviews from '../components/Reviews';

const AboutPage = () => {
  return (
    <div id="AboutPage" className='bg-[#121411] pt-20'>
        <h1 className='text-white text-7xl text-center my-8'>About <span className='text-[#00FFFF]'>Us</span></h1>

        <section id='About' className='bg-[#161815] relative py-8 flex flex-col justify-center items-center'>
            <img id='AboutLeftElement' src="/img/AboutLeftElement.webp" alt="element" className='h-full absolute left-0 opacity-40 lg:opacity-100'/>
            <img id='AboutRightElement' src="/img/AboutRightElement.webp" alt="element" className='h-full absolute right-0 opacity-40 lg:opacity-100'/>
            <div id="AboutContent" className='w-[70%] p-4' style={{zIndex: "2"}}>
                <h3 id="AboutUpperText" className='text-[#00FFFF] text-sm font-semibold'>&mdash; Welcome to Dirty Dan’s Official Merch Store! 🎮🔥
                &mdash;</h3>
                <h1 id="AboutMiddleText" className='text-3xl text-white mt-8'>
                If you’re a fan of gaming, live streams, and exclusive content, you’re in the right place! This store was created for our amazing community to rep our brand, stay connected, and bring our streaming vibes into everyday life. Whether you’re looking for <span className='text-[#00FFFF]'>high-quality gamer apparel, custom gaming merch, or exclusive limited-edition designs, </span> we’ve got you covered.
                </h1>
                <p className='mt-8 text-gray-300'>Every piece of merch is designed with <span className='text-[#00FFFF]'>comfort, style, and gaming culture </span>in mind—so whether you're <span className='text-[#00FFFF]'>grinding ranked matches, streaming, or just chilling,</span> you’ll always feel like part of the squad. Plus, every purchase helps support the channel, keeping the content flowing and the hype alive!
                </p>
            </div>
        </section>

        <Sale />
        <Reviews />

        <div className='flex justify-center items-center pb-16 border-b border-gray-600'>
          <h1 className='text-2xl text-[#FF56E8] text-center w-[90vw] lg:w-[70vw]'>Join the movement, rep the community, and show off your love for the stream. Shop now and level up your wardrobe!
          </h1>
        </div>
    </div>
  )
}

export default AboutPage
import React from 'react';
import About from '../components/About';
import Sale from '../components/Sale';
import Reviews from '../components/Reviews';

const AboutPage = () => {
  return (
    <div id="AboutPage" className='bg-[#121411] pt-20'>
        <h1 className='text-white text-7xl text-center my-8'>About <span className='text-[#00FFFF]'>Us</span></h1>
        <About/>
        <Sale />
        <Reviews />
    </div>
  )
}

export default AboutPage
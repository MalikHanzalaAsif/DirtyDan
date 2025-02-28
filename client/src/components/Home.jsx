import React from 'react';
import "../styles/Home.css";
import HomeMarquee from './HomeMarquee';

const Home = () => {
    return (
        <div id="Home" className='h-full relative'>
            <img src="/img/home_mouse_element.webp" alt="mouse element" className='w-60 absolute right-0 top-10' style={{ zIndex: "2" }} data-aos="fade-left"/>
            <img src="/img/home_controller_element.webp" alt="controller element" className='w-60 absolute left-0 -bottom-10' style={{ zIndex: "2" }} data-aos="fade-right"/>
            <HomeMarquee text={"BEST GAMING & STREAMING MERCH"} position={"top"} />
            <div id='HomeMainDiv' className='h-full flex flex-col justify-center items-center'>
                <h3 id="HomeUpperText" className='text-[#00FFFF] text-sm text-center font-semibold mt-14'>&mdash; YOUR FAVOURITE MERCH &mdash;</h3>
                <h1 id='HomeMainText' className='text-5xl text-white text-center mt-4'>WEAR WHAT YOU WANT TO BE</h1>
                <h1 id='HomeMainText' className='text-5xl text-white text-center mt-2'>BE DIFFERENT</h1>
                <a href="#About">
                    <button id='HomeButton' className='bg-transparent text-white border-4 border-[#00FFFF] py-1 px-4 mt-8 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:border-none hover:px-5 hover:py-2 from-[#00FFFF] to-[#016e6e] cursor-pointer'>VIEW MORE</button>
                </a>
            </div>
            <HomeMarquee text={"BEST GAMING & STREAMING MERCH"} position={"bottom"} />
            <a href="#About">
                <img src="/img/home_arrow.png" id='HomeArrow' alt="arrow" className='h-10 absolute bottom-6 left-[48.5%]' />
            </a>
        </div>
    )
}

export default Home;
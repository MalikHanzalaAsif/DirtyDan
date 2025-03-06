import React from 'react';
import "../styles/Sale.css";
import { Link } from 'react-router';

const Sale = () => {
    return (
        <section id='Sale' className='relative'>
            <div id='SaleContent' className='lg:w-[60%] p-16 pb-52'>
                <h3 id="HomeUpperText" className='text-[#FF00D0] text-sm font-semibold pt-8'>&mdash; FEATURED PRODUCT &mdash;</h3>
                <h1 id="AboutMiddleText" className='text-5xl text-white mt-4'>
                    <span className='text-[#FF00D0]'>DirtyDan </span>Signature <span className='text-[#FF00D0]'>T-Shirt – Bold Style, </span>Ultimate <span className='text-[#FF00D0]'>Comfort, </span> Street-Ready Anytime!
                </h1>
                <Link to="/shop">
                    <button id='ItemsSectionButton' className='bg-gradient-to-r from-[#FF56E8] to-[#750080] cursor-pointer hover:scale-110 transition-all duration-300 p-2 text-white mt-4 px-6'>SHOP NOW</button>
                </Link>
            </div>
            <div id='SaleShirtsBox' className='flex absolute right-14 bottom-20 lg:bottom-32 lg:right-48' style={{zIndex: "2"}}>
                <img src="/img/Sale_Shirt_1.webp" alt="tshirt" className='SaleShirtsShort lg:h-56 h-40 -mr-12 lg:-mr-16' style={{zIndex :"2"}}/>
                <img src="/img/Sale_Shirt_2.webp" alt="tshirt" className='SaleShirts lg:h-64 h-48' style={{zIndex :"3"}}/>
                <img src="/img/Sale_Shirt_3.webp" alt="tshirt" className='SaleShirtsShort lg:h-56 h-40 -ml-12 lg:-ml-16 ' style={{zIndex :"2"}}/>
            </div>
            <div id='SaleImage' className='absolute bottom-0 right-0'>
                <img src="/img/Sale_Box.webp" alt="cup image" className=' w-[25rem] lg:w-[45rem]' />
            </div>
        </section>
    )
}

export default Sale;
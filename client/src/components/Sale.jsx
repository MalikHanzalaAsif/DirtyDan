import React from 'react';
import "../styles/Sale.css";
import { Link } from 'react-router';

const Sale = () => {
    return (
        <section id='Sale' className='flex flex-col lg:flex-row justify-center items-center'>
            <div id='SaleContent' className='lg:w-[70%] p-16'>
                <h3 id="HomeUpperText" className='text-[#FF00D0] text-sm font-semibold pt-8'>&mdash; FEATURED PRODUCT &mdash;</h3>
                <h1 id="AboutMiddleText" className='text-5xl text-white mt-4'>
                    <span className='text-[#FF00D0]'>DirtyDan </span>Signature <span className='text-[#FF00D0]'>T-Shirt – Bold Style, </span>Ultimate <span className='text-[#FF00D0]'>Comfort, </span> Street-Ready Anytime!
                </h1>
                <Link to="/shop">
                    <button id='ItemsSectionButton' className='bg-gradient-to-r from-[#FF56E8] to-[#750080] cursor-pointer hover:scale-110 transition-all duration-300 p-2 text-white mt-4 px-6'>SHOP NOW</button>
                </Link>
            </div>
            <div id='SaleImage'>
                <img src="/img/Sale_Cup_Img.webp" alt="cup image" className='h-96 w-auto lg:-mb-6' />
            </div>
        </section>
    )
}

export default Sale;
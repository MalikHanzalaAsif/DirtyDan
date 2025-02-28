import React from 'react';
import Items from './Items';
import { Link } from 'react-router';

const ItemsSection = () => {
  return (
    <div id='ItemsSection' className='bg-[#121411] flex flex-col justify-center items-center py-8'>
      <h3 id="ItemsSectionUpperText" className='text-[#00FFFF] text-sm font-semibold pt-16 pb-4'>&mdash; OUR OFFERING &mdash;</h3>
      <h1 className='text-4xl text-white mb-4' style={{
        textShadow: "0px 0px 20px rgba(240, 15, 15, 0.7)"
      }}>KEY GAMING MERCHANDISE</h1>
      <Items />
      <Link to="/shop">
        <button id='ItemsSectionButton' className='bg-gradient-to-r from-[#00FFFF] to-[#016e6e] cursor-pointer hover:scale-110 transition-all duration-300 p-2 mt-8'>EXPLORE SHOP</button>
      </Link>
    </div>
  )
}

export default ItemsSection;
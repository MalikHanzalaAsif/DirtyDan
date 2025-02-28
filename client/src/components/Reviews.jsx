import React from 'react';
import "../styles/Reviews.css"
import ReviewsArray from '../utils/ReviewsArray';
import Marquee from "react-fast-marquee";

const Reviews = () => {
  return (
    <section id='Reviews' className='bg-[#121411] py-12'>
      <h3 id="ReviewsUpperText" className='text-red-600 text-md text-center font-semibold mb-6'>&mdash; TESTIMONIALS &mdash;</h3>
      <h1 id='ReviewsMainText' className='text-5xl font-semibold text-white text-center mb-8'>WHAT OUR PLAYERS SAYS</h1>

      <Marquee pauseOnHover={true} speed={30} gradient={false} className="flex">
        {ReviewsArray.map((review, index) => (
          <div className="SingleReview w-96 m-6 border-2 border-gray-700" key={review.id}>
            <div id="ReviewDetails" className='flex items-center border-b-2 border-gray-700 p-2'>
              <img src="/icons/PersonIcon.webp" alt="person icon" className='h-16 p-2'/>
              <div>
                <p className='text-white text-md'>{review.name}</p>
                <p className='text-gray-700 text-sm'>{review.profession}</p>
              </div>
              <img src="/icons/Reviews_comma.webp" alt="reviews comma" className='h-10 ml-auto mr-6'/>
            </div>
            <div id="ReviewText" className='p-4'>
              <p className='text-gray-400'>{review.review}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  )
}

export default Reviews;
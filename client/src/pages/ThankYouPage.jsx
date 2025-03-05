import React from 'react';
import { Link } from 'react-router';

const ThankYouPage = () => {

  return (
    <section id="ThankYou" className='h-screen bg-[#121411] flex justify-center items-center'>
            <div id="NotFoundContent" className='flex flex-col justify-center items-center'>
            <iframe src="https://lottie.host/embed/211af756-0436-4a9c-bb39-7b0e8421406e/kJms04u1FA.lottie" className='h-80 w-72'></iframe>
                <h1 className='text-white text-5xl text-center'>Order Placed Succesfully.</h1>
                <p className='text-gray-500 max-w-96 text-center mt-4'>Thanks for your Purchase. We will contact you soon. Check your Email for more details.</p>
                <Link to="/">
                    <button className='border py-3 px-6 text-lg text-white bg-[#079b9b] mt-8 hover:text-black hover:bg-white transition-colors'>Go To Home</button>
                </Link>
            </div>
        </section>
  )
}

export default ThankYouPage;
import React from 'react';

const NotFoundPage = () => {
    const goBack = () => {
        window.history.back();
    }
    return (
        <section id="NotFound" className='h-screen bg-[#121411] flex justify-center items-center *:'>
            <div id="NotFoundContent">
                <iframe src="https://lottie.host/embed/6667060c-6fda-4441-b404-1a307fed8af5/u9xE8KoX58.lottie" className='h-52 w-80'></iframe>
                <h1 className='text-white text-5xl'>Can't find This Page.</h1>
                    <button className='border py-3 px-6 text-lg text-white bg-[#079b9b] mt-8 hover:text-black hover:bg-white transition-colors' onClick={goBack}>Go Back</button>
            </div>
        </section>
    )
}

export default NotFoundPage;
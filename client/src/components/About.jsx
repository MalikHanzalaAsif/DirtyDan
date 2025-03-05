import React from 'react';

const About = () => {
    return (
        <section id='About' className='bg-[#161815] relative py-8 flex flex-col justify-center items-center'>
            <img id='AboutLeftElement' src="/img/AboutLeftElement.webp" alt="element" className='h-full absolute left-0 opacity-40 lg:opacity-100'/>
            <img id='AboutRightElement' src="/img/AboutRightElement.webp" alt="element" className='h-full absolute right-0 opacity-40 lg:opacity-100'/>
            <div id="AboutContent" className='w-[70%] p-4' style={{zIndex: "2"}}>
                <h3 id="AboutUpperText" className='text-[#00FFFF] text-sm font-semibold'>&mdash; YOUR FAVOURITE MERCH &mdash;</h3>
                <h1 id="AboutMiddleText" className='text-3xl text-white mt-8'>
                DirtyDan is your go-to <span className='text-[#00FFFF]'>global streetwear brand,</span> delivering <span className='text-[#00FFFF]'>bold, high-quality fashion </span>worldwide. With <span className='text-[#00FFFF]'>fast shipping, premium materials, and exclusive limited-edition drops,</span> we make sure you stand out in style. Our <span className='text-[#00FFFF]'>affordable yet trendy urban wear</span> offers the perfect mix of comfort and attitude. Plus, we’re committed to <span className='text-[#00FFFF]'>sustainable fashion, </span> so you can shop guilt-free. <span className='text-[#00FFFF]'>Join the DirtyDan movement today—where fashion knows no limits!</span>
                </h1>
            </div>
        </section>
    )
}

export default About;
import React from 'react';

const About = () => {
    return (
        <section id='About' className='bg-[#161815] relative py-8 flex flex-col justify-center items-center'>
            <img id='AboutLeftElement' src="/img/AboutLeftElement.webp" alt="element" className='h-full absolute left-0 opacity-40 lg:opacity-100'/>
            <img id='AboutRightElement' src="/img/AboutRightElement.webp" alt="element" className='h-full absolute right-0 opacity-40 lg:opacity-100'/>
            <div id="AboutContent" className='w-[70%] p-4' style={{zIndex: "2"}}>
                <h3 id="AboutUpperText" className='text-[#00FFFF] text-sm font-semibold'>&mdash; YOUR FAVOURITE MERCH &mdash;</h3>
                <h1 id="AboutMiddleText" className='text-3xl text-white mt-8'>
                    Lorem ipsum dolor sit, <span className='text-[#00FFFF]'>amet adipisicing</span> elit. Explicabo nisi sed mollitia nemo possimus. unde illo officia <span className='text-[#00FFFF]'>officiis</span> hjnregwe <span className='text-[#00FFFF]'>nesciunt, neque,</span> iusto necessitatibus optio tenetur.
                </h1>
                <p id="AboutBottomText" className='text-md text-gray-500 mt-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veniam suscipit harum earum modi itaque repellendus tempora enim quas distinctio dolor, sit voluptatibus aut porro omnis sint qui! Natus, perspiciatis.
                </p>
            </div>
        </section>
    )
}

export default About;
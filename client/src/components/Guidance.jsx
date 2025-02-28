import React from 'react';
import { useState } from 'react';
import "../styles/Guidance.css";
import { Link } from 'react-router';

const Guidance = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "What types of products can I order on DirtyDan?",
            answer: "You may order a vast array of goods on DirtyDan, such as t-shirts, sweatshirts, mugs, phone cases, caps, trousers and pants, mousepad, and more. We provide a wide range of products to assist you in making personalized merchandise for events, companies, individuals, or artistic endeavors. Just choose the product you wish to design, add your artwork, and personalize it as you see fit!",
        },
        {
            question: "How long will it take for my order to be delivered?",
            answer: "The things you ordered and your location will affect the delivery time. Production usually takes two to four business days. Shipping typically takes 3–7 business days for domestic purchases and 7–14 days for overseas orders after your order is processed. As soon as your package ships, you will receive a tracking number so you can monitor its progress!",
        },
        {
            question: "Can I return or exchange my merch?",
            answer: "We want your order to be perfect for you! Within 30 days of receiving your order, we provide free returns or exchanges if there is a problem with the goods (such as a defective item or an inappropriate design). Just get in touch with our customer support representatives, and they will walk you through the steps. Please be aware that due to the bespoke nature of each item, we are unable to accept returns for things that have a design you have selected, unless there is a flaw.",
        },
        {
            question: "Do you offer discounts for bulk orders?",
            answer: "Indeed! We provide bulk order savings if you're wanting to place a sizable order for a company, event, or group. The discount increases with the number of things you order. For pricing information, see our bulk order page. Alternatively, feel free to get in touch with our sales staff for a quote tailored to your requirements.",
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we provide international shipping! We ship internationally to the majority of nations, and the cost of shipping is determined by your location. Customs procedures may cause international orders to take longer to arrive, but don't worry—we'll give you tracking information so you can monitor the status of your transaction.",
        },
        {
            question: "What if my order is damaged or incorrect?",
            answer: "Please contact our customer care staff right away if your order arrives damaged or if we sent you the incorrect item. Depending on the circumstances, we will either offer a replacement or a refund. To help you as soon as possible, be sure to attach pictures of the damage or error. Our first goal is client pleasure, and we'll do all in our power to address any problems as soon as they arise.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="Guidance" className='relative flex justify-center flex-col lg:flex-row items-center'>
            <div id="GuidanceContent" className='w-[90%] lg:w-1/2 p-12' style={{ zIndex: "2" }}>
                <h3 id="GuidanceUpperText" className='text-[#FF56E8] text-md font-semibold mb-6 mt-12'>&mdash; FAQ'S &mdash;</h3>
                <h1 className='GuidanceMainText text-6xl text-white'>NEED GUIDANCE?</h1>
                <h1 className='GuidanceMainText text-6xl text-white'>WE'VE PROVIDED</h1>
                <p className='text-gray-300 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa soluta odio rerum dignissimos repellendus dolore expedita voluptatum nam nesciunt minus fugit, totam impedit eligendi nisi ab tempora nihil eaque optio.</p>
                <Link to="/shop">
                    <button id='ItemsSectionButton' className='bg-gradient-to-r from-[#FF56E8] to-[#750080] cursor-pointer hover:scale-110 transition-all duration-300 p-2 text-white mt-4 px-6 mb-22'>SHOP NOW</button>
                </Link>
            </div>
            <div className="accordion-container w-[90%] mb-32 lg:w-[35vw] lg:mb-0 mr-4" data-aos="fade-up" style={{ zIndex: "2" }}>
                {questions.map((item, index) => (
                    <div key={index} className="accordion-item flex flex-col justify-center">
                        <div
                            className={`accordion-question text-center p-2 flex transition-all duration-300 ease-in-out ${activeIndex === index ? "bg-[#444642] text-white" : "bg-[#121411] text-white border border-gray-600"
                                }`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex flex-col w-full">
                                <span
                                    className={`transition-all duration-300 ${activeIndex === index ? "text-[#fc1bde]" : "text-white"
                                        }`}
                                >
                                    {item.question}
                                </span>

                                {/* Smooth height transition */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="accordion-answer text-center text-sm">{item.answer}</div>
                                </div>
                            </div>

                            <img
                                src={`/img/Guidance_${activeIndex === index ? "Up" : "Down"}_Arrow.png`}
                                alt="arrow"
                                className={`ml-auto mr-4 cursor-pointer transition-transform duration-300 ${activeIndex === index ? "rotate-180 w-6 h-6" : "w-4 h-4"
                                    }`}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <img src="/img/Guidance_Mobile_Img.webp" alt="mobile img" className='absolute h-55 bottom-0' />
        </section>
    )
}

export default Guidance
import React from 'react';
import { Link } from 'react-router';
import "../styles/Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    function handleSubmit(e) {
        e.preventDefault();
    };

    return (
        <footer id="footer" style={{zIndex: "-1"}}>
            <div id="upperFooter" className='bg-[#121411] text-gray-400 flex justify-between items-center py-16 relative'>
                <img src="/img/footer_element_left.webp" alt="footer element left" className='absolute h-80 left-0 top-0' style={{zIndex: "0"}}/>
                <img src="/img/footer_element_right.webp" alt="footer element right" className='absolute h-80 right-0 bottom-0' style={{zIndex: "0"}}/>
                <img src="/img/DirtyDanLogo.png" alt="Hell Spawn Logo" className='max-h-64 max-w-64 mb-6 lg:mb-0' style={{zIndex: "1"}}/>
                <ul id="usefullLinks" className='mx-8 mb-6 lg:mb-0' style={{zIndex: "1"}}>
                    <h2 className="text-lg font-semibold mb-8 bg-[#121411]">USEFUL LINKS</h2>
                    <li className="footerLi"><Link to="/">Home</Link></li>
                    <li className="footerLi"><Link to="/about">About</Link></li>
                    <li className="footerLi"><Link to="/shop">Shop</Link></li>
                    <li className="footerLi"><Link to="/shop">Categories</Link></li>
                    <li className="footerLi"><Link to="/contact">Contact</Link></li>
                </ul>
                <ul id="products" style={{zIndex: "1"}}>
                    <h2 className="text-lg font-semibold mb-8 bg-[#121411]">PRODUCTS</h2>
                    <li className="footerLi"><Link to="/shop">Tshirts</Link></li>
                    <li className="footerLi"><Link to="/shop">Trousers</Link></li>
                    <li className="footerLi"><Link to="/shop">Hoodies</Link></li>
                    <li className="footerLi"><Link to="/shop">Sweatshirts</Link></li>
                    <li className="footerLi"><Link to="/shop">Caps</Link></li>
                </ul>
                <ul id="products" className='mt-8 mx-8' style={{zIndex: "1"}}>
                    <li className="footerLi"><Link to="/shop">Keychains</Link></li>
                    <li className="footerLi"><Link to="/shop">NoteBooks</Link></li>
                    <li className="footerLi"><Link to="/shop">MousePads</Link></li>
                    <li className="footerLi"><Link to="/shop">MobileCovers</Link></li>
                    <li className="footerLi"><Link to="/shop">Shorts</Link></li>
                    <li className="footerLi"><Link to="/shop">Mugs</Link></li>
                </ul>
                <ul id="resources" style={{zIndex: "1"}}>
                    <h2 className="text-lg font-semibold mb-8 bg-[#121411]">RESOURCES</h2>
                    <li className="footerLi"><a href="https://uniqueadvertisers.io" target='_blank'>Partnerships</a></li>
                    <li className="footerLi"><Link to="/terms-and-conditions">Terms & conditions</Link></li>
                    <li className="footerLi"><Link to="/privacy-policy">Privacy Policy</Link></li>
                </ul>
                <form id="subscribeToOurNewsLetter" className='flex flex-col mr-4' onSubmit={handleSubmit} style={{zIndex: "1"}}>
                    <h2 className="text-lg font-semibold mb-8 bg-[#121411]">SUBSCRIBE TO OUR NEWSLETTER</h2>
                    <input type="email" name="email" id="footerEmail" placeholder='write your email..' className='mb-4 p-2 pl-4 placeholder:text-xs border-1 border-gray-400 bg-[#121411]' />
                    <button type='Submit' id='footerFormSubmitButton' className='mb-4 w-1/2 bg-cyan-500 text-black p-2 hover:opacity-[0.9] text-sm cursor-pointer'><Link to="/contact">SUBMIT</Link></button>
                    <div className='text-center text-md '>
                        Call Us Now: <a href="tel:+353876545954" className='text-blue-500 underline'>+1 111111111111</a>
                    </div>
                </form>
            </div>
            <div id="lowerFooter" className='flex flex-col justify-center items-center bg-[#0D0D0D] text-white border-t border-gray-600'>
                <p id="lowerFooterRights" className="text-xs my-2">All RIGHTS RESERVED © {currentYear} UNIQUE ADVERTISERS</p>
                <div id="lowerFooterIcons" className='flex my-2'>
                    <a href="#" target='_blank'>
                        <img src="/icons/facebook_icon.png" alt="facebook" className='w-8 mx-1 hover:opacity-75 transition' />
                    </a>
                    <a href="#" target='_blank'>
                        <img src="/icons/instagram_icon.png" alt="instagram" className='w-8 mx-1 hover:opacity-75 transition-all duration-300' />
                    </a>
                    <a href="#" target='_blank'>
                        <img src="/icons/x_icon.png" alt="x" className='w-8 mx-1 hover:opacity-75 transition' />
                    </a>
                    <a href="#" target='_blank'>
                        <img src="/icons/twitch_icon.png" alt="twitch" className='w-8 mx-1 hover:opacity-75 transition' />
                    </a>
                    <a href="#" target='_blank'>
                        <img src="/icons/youtube_icon.png" alt="twitch" className='w-8 mx-1 hover:opacity-75 transition' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
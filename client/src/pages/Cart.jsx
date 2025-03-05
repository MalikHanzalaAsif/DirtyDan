import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router';
import useStore from '../store/store';
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const Cart = () => {
    const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useStore();
    const totalCartPrice = cart.reduce((total, currItem) => {
        return (Number(total) + Number(currItem.price) * currItem.quantity).toFixed(2);
    }, 0);

    const [zoomModalOpen, setZoomModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null)
    return (
        <section className="antialiased bg-gray-900 py-28">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
                {cart.length >= 2 && (
                    <button className='text-white border p-1 mt-8 rounded-md hover:opacity-60' onClick={clearCart}>REMOVE ALL ITEMS</button>
                )}
                {cart.length === 0 ? (
                    <div id="EmptyCart" className='h-screen flex flex-col items-center mt-12'>
                        <iframe src="https://lottie.host/embed/af236b38-973e-4e7d-b3e0-c34eeaea8833/BcemYLjH6k.lottie" className='h-60'></iframe>
                        <h1 className='text-white text-5xl text-center mt-4'>Your Cart is Empty!</h1>
                        <Link to="/shop" className="bg-[#2999da] border py-3 px-6 text-white hover:bg-white hover:text-black transition-colors cursor-pointer mt-8 text-2xl">Shop Now</Link>
                    </div>
                ) : (
                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                {cart.map((item) => (

                                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6" key={item.id}>
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0" key={item.id}>
                                            <a href="#" className="shrink-0 md:order-1 flex">
                                                <img className="hidden h-24 dark:block" src={item.image} alt={item.title} onClick={() => {
                                                    setSelectedItem(item);
                                                    setZoomModalOpen(true);
                                                }} />
                                            </a>
                                            <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                <div className="flex items-center">
                                                    <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" onClick={() => decreaseQuantity(item)}>
                                                        <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                        </svg>
                                                    </button>
                                                    <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={item.quantity} required />
                                                    <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" onClick={() => addToCart(item)}>
                                                        <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">${item.price}</p>
                                                </div>
                                            </div>

                                            <div className="w-full min-w-0 flex-1 space-y-1 md:order-2 md:max-w-md">
                                                <a href="#" className="text-base font-medium text-gray-900 dark:text-white">{item.title}</a>
                                                <p className='text-gray-500 text-sm'><span className='font-semibold'>Color: </span> {item.color}</p>
                                                <p className='text-gray-500 text-sm'><span className='font-semibold'>Size: </span> {item.size}</p>
                                                <div className="flex items-center gap-4">
                                                    <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500 mt-4" onClick={() => removeFromCart(item.id, item.color, item.size)}>
                                                        <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                        </svg>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">${totalCartPrice}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">$0</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd className="text-base font-bold text-green-900 dark:text-green-400">${totalCartPrice}</dd>
                                    </dl>
                                </div>

                                <Link to='/checkout' className="flex w-full items-center justify-center rounded-lg bg-[#079b9b] px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-cyan-800 transition-colors">Proceed to Checkout</Link>

                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                    <Link to="/shop" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-[#079b9b]">
                                        Continue Shopping
                                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div >
                )}
            </div >

            {/* Zoom Modal */}
            <Modal open={zoomModalOpen} onClose={() => setZoomModalOpen(false)}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        maxHeight: "90vh",
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "auto",
                    }}
                    className="w-[90vw] md:w-[50vw] backdrop-blur-3xl"
                >
                    <IconButton
                        onClick={() => setZoomModalOpen(false)}
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            color: "black",
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
                        }}
                    >
                        <CloseIcon fontSize="large" />
                    </IconButton>

                    <img
                        src={selectedItem?.image}
                        alt={selectedItem?.title}
                        className="h-96"
                    />
                </Box>
            </Modal>
        </section >
    )
}

export default Cart
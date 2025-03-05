import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import toastEmitter from '../components/ui/toast';
import { Controller, useForm } from "react-hook-form";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { verifyPaymentApi } from '../api/orderApi';
import useStore from '../store/store';
import { toast } from 'react-toastify';

const ModalStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "32rem",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    maxHeight: "90vh",
};

const CheckoutPage = () => {
    const { cart, clearCart } = useStore();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = async (data) => {
        if (!cart || cart.length === 0) {
            toastEmitter({
                title: "your cart is empty",
                type: "info",
            });
            navigate('/shop');
            return;
        }
        handleOpen();
    };
    const formState = watch();

    const calculatedItemTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    const totalDiscount = "0.00";
    const totalShipping = "0.00";
    const taxAmount = "0.00";

    // Final total calculation
    const calculatedTotal = (
        parseFloat(calculatedItemTotal) +
        parseFloat(totalShipping) -
        parseFloat(totalDiscount) +
        parseFloat(taxAmount)
    ).toFixed(2); // Ensure 2 decimal place
    return (
        <>
            <div className="font-[sans-serif] bg-[#121411] pt-24">
                <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full justify-center">
                    <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
                        <h2 className="text-4xl   xl font-bold text-white">Complete <span className='text-[#00FFFF]'>your</span> order</h2>
                        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <h3 className="text-lg text-white mb-4">Personal Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="px-4 py-3 bg-transparent text-white w-full text-sm"
                                            required
                                            {...register("firstName", {
                                                required: {
                                                    value: true,
                                                    message: "First Name is required!"
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: "name must be at least 3 characters long!"
                                                }
                                            })}
                                        />
                                        {errors.firstName && <span className='text-red-600 mb-4'>{errors.firstName.message}</span>}
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="px-4 py-3 bg-transparent text-white w-full text-sm"
                                            {...register("lastName")}
                                        />
                                        {errors.lastName && <span className='text-red-600 mb-4'>{errors.lastName.message}</span>}
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="px-4 py-3 bg-transparent text-white w-full text-sm"
                                            required
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "email address is required!"
                                                },
                                                pattern: {
                                                    value: emailRegex,
                                                    message: "Please enter a valid email address!"
                                                }
                                            })}
                                        />
                                        {errors.email && <span className='text-red-600 mb-4'>{errors.email.message}</span>}
                                    </div>

                                    <div>
                                        <Controller
                                            name="phone"
                                            control={control}
                                            defaultValue=""
                                            rules={{
                                                required: "Phone number is required!",
                                            }}
                                            render={({ field: { onChange, value } }) => (
                                                <PhoneInput
                                                    className="w-full text-sm border-none outline-none"
                                                    country={"us"} // Default country
                                                    value={value}
                                                    onChange={onChange}
                                                    placeholder="Phone No."
                                                    enableSearch
                                                    containerStyle={{
                                                        width: "100%",
                                                        border: "1px solid gray"
                                                    }}
                                                    inputStyle={{
                                                        fontSize: "1rem",
                                                        backgroundColor: "transparent",
                                                        border: "none",
                                                        outline: "none",
                                                        height: "45px", // Adjust to match your bg height
                                                        paddingLeft: "48px", // Space for flag
                                                        width: "100%",
                                                        color: "white"
                                                    }}
                                                    buttonStyle={{
                                                        backgroundColor: "transparent",
                                                        borderRight: "1px solid gray",
                                                        border: "none",
                                                        height: "45px", // Ensure it matches input height
                                                    }}
                                                />
                                            )}
                                        />
                                        {errors.phone && <span className='text-red-600 mb-4'>{errors.phone.message}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg text-white mb-4">Shipping Address</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Address Line"
                                            className="px-4 py-3 bg-transparent text-white w-full text-sm"
                                            required
                                            {...register("address", {
                                                required: {
                                                    value: true,
                                                    message: "address is required!"
                                                },
                                            })}
                                        />
                                        {errors.address && <span className='text-red-600 mb-4'>{errors.address.message}</span>}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="City"
                                            className="px-4 py-3 bg-transparent text-white w-full text-sm"
                                            required
                                            {...register("city", {
                                                required: {
                                                    value: true,
                                                    message: "city is required!"
                                                },
                                            })}
                                        />
                                        {errors.city && <span className='text-red-600 mb-4'>{errors.city.message}</span>}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="State"
                                            className="px-4 py-3 bg-transparent text-white w-full text-sm"
                                            required
                                            {...register("state", {
                                                required: {
                                                    value: true,
                                                    message: "state is required!"
                                                },
                                            })}
                                        />
                                        {errors.state && <span className='text-red-600 mb-4'>{errors.state.message}</span>}
                                    </div>
                                    <div>
                                        <input
                                            type="number"
                                            placeholder="Zip Code"
                                            className="px-4 py-3 bg-transparent text-white w-full text-sm"
                                            required
                                            {...register("zipCode", {
                                                required: {
                                                    value: true,
                                                    message: "zip code is required!"
                                                },
                                            })}
                                        />
                                        {errors.zipCode && <span className='text-red-600 mb-4'>{errors.zipCode.message}</span>}
                                    </div>
                                </div>

                                <div className="flex gap-4 max-md:flex-col mt-8">
                                    <button type="button" className="px-4 py-2.5 w-full text-sm tracking-wide bg-transparent hover:opacity-70 border border-gray-300 text-white max-md:order-1" onClick={() => {
                                        toastEmitter({
                                            title: "order has been interrupted!",
                                            type: "info",
                                        });
                                        navigate('/')
                                    }}>Cancel</button>
                                    <button type="submit" className="px-4 py-2.5 w-full text-sm tracking-wide bg-[#079b9b] hover:bg-white hover:text-black text-white transition-colors">Continue Purchase</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* PAYMENT MODAL */}
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"

                >
                    <Box sx={ModalStyles} className="backdrop-blur-xl">
                        <IconButton
                            onClick={handleClose}
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
                        <h1 id="modal-modal-title" variant="h4" component="h2" className='text-center text-4xl mb-4 text-white'>
                            PayPal Checkout
                        </h1>
                        <h3 className='text-white text-center text-xl'>Total Amount: <span className='text-[#00FFFF]'>${calculatedTotal}</span></h3>
                        <div>
                            <div className="mt-6">
                                <PayPalButtons
                                    style={{
                                        color: "white", // Options: 'gold', 'blue', 'silver', 'white', 'black'
                                        shape: "rect", // Options: 'rect', 'pill'
                                        label: "checkout",  // Options: 'pay', 'checkout', 'buynow', 'paypal', 'installment'
                                        layout: "vertical", // Options: 'horizontal', 'vertical'
                                        tagline: false, // Options: true, false (to show/hide tagline)
                                        height: 40, // Set button height (optional)
                                    }}
                                    createOrder={(data, actions) => {
                                        const purchase_units = [
                                            {
                                                amount: {
                                                    value: calculatedTotal, // Must equal the sum of all breakdown values
                                                    currency_code: "USD",
                                                    breakdown: {
                                                        item_total: {
                                                            value: calculatedItemTotal, // Total of all items
                                                            currency_code: "USD",
                                                        },
                                                        shipping: {
                                                            value: totalShipping, // Shipping charges
                                                            currency_code: "USD",
                                                        },
                                                        discount: {
                                                            value: `-${totalDiscount}`, // Discount negative
                                                            currency_code: "USD",
                                                        },
                                                        tax_total: {
                                                            value: taxAmount, // Tax
                                                            currency_code: "USD",
                                                        },
                                                    },
                                                },
                                                items: cart.map(item => ({
                                                    name: item.title,
                                                    quantity: item.quantity.toString(), // Quantity as string
                                                    unit_amount: {
                                                        value: item.price, // Price per item, rounded to 2 decimals
                                                        currency_code: "USD",
                                                    },
                                                    description: `Size: ${item.size || "Not specified"}, Color: ${item.color || "Not specified"}`, // Concatenated size and color
                                                })),
                                            },
                                        ];
                                        return actions.order.create({
                                            purchase_units,
                                        });
                                    }}
                                    onApprove={async (data, actions) => {
                                        return toast.promise(
                                            actions.order.capture().then(async (details) => {
                                                const payerName = details?.payer?.name?.given_name || "the buyer";
                                                alert(`Transaction completed by ${payerName}!`);

                                                return verifyPaymentApi(details.id, formState)
                                                    .then((response) => {
                                                        clearCart(); 
                                                        navigate("/thank-you");
                                                        return response;
                                                    });
                                            }),
                                            {
                                                pending: 'Verifying Payment...',
                                                success: 'Payment Verified Successfully!',
                                                error: 'Payment Verification Failed!',
                                            },
                                            {
                                                theme: "dark"
                                            }
                                        );
                                    }}

                                    onCancel={() => {
                                        alert("Payment was cancelled by user.");
                                    }}
                                    onError={(err) => {
                                        console.error("PayPal Error:", err);
                                        alert("An error occurred during the transaction. Please try again.");
                                    }}
                                />
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default CheckoutPage;
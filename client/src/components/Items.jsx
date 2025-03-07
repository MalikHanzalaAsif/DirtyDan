import React, { useState } from "react";
import ItemsArray from "../utils/ItemsArray";
import "../styles/Items.css";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import colors from "../utils/colors";
import useStore from "../store/store";
import toastEmitter from "./ui/toast";
const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#161815',
    border: '1px solid gray',
    boxShadow: 24,
    p: 4,
    color: "white",
    maxHeight: "90vh",
    overflowY: "scroll"
};

const Items = () => {
    const addToCart = useStore((state) => state.addToCart);
    const handleAddToCart = () => {
        addToCart(selectedItem);
        handleClose();
        toastEmitter({
            title: "item added to cart!",
            type: "success"
        });
    }

    // modal state
    const [isModalOpen, setModalOpen] = useState(false);
    const [zoomModalOpen, setZoomModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null)
    const handleOpen = (item) => {
        setModalOpen(true);
        setSelectedItem(item);
    };
    const handleClose = () => setModalOpen(false);

    const [activeTab, setActiveTab] = useState("TSHIRTS");
    const categories = ["TSHIRTS", "TROUSERS", "HOODIES", "SWEATSHIRTS", "SHORTS", "CAPS", "KEYCHAINS", "MOBILECOVERS", "MOUSEPADS", "MUGS", "NOTEBOOKS"];
    const filteredItems = ItemsArray.filter((item) => item.category === activeTab);


    // color state
    const [selectedColor, setSelectedColor] = useState(null);
    const handleColorSelect = (color) => {
        setSelectedColor(color.name);
        setSelectedItem((prev) => ({
            ...prev,
            color: color.name,
            image: `/products/${selectedItem.category}_${color.name}.webp`
        }))
    };

    // size state
    const sizes = ['SM', 'MD', 'LG', 'XL', 'XXL'];
    const [selectedSize, setSelectedSize] = useState(null);
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        setSelectedItem((prev) => ({
            ...prev,
            size: size
        }))

    };
    return (
        <section id="Items">
            {/* Tab Buttons */}
            <div className="ItemsTabs flex flex-wrap justify-center items-center max-w-[60vw] mx-auto">
                {categories.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={`${activeTab === item ? "activeTab" : ""} hover:opacity-60`}
                            onClick={() => setActiveTab(item)}
                        >
                            {item}
                        </button>
                    )
                })}
            </div>

            <h1 className="text-3xl text-white mt-12">{activeTab}</h1>
            {/* Tab Content */}
            <div className="ItemsContent flex justify-center items-center flex-wrap">
                {filteredItems.map((item) => {
                    return (
                        <div className="SingleItem flex flex-col items-center h-80 w-60 py-4 m-4" key={item.id}>
                            <div className="SingleItemImage flex flex-col justify-center items-center border-2 w-full border-gray-600 p-6">
                                <img src={item.image} alt={item.category} className="h-44 cursor-pointer" onClick={() => {
                                    setZoomModalOpen(true)
                                    setSelectedItem(item)
                                }} />
                            </div>
                            <div className="SingleItemDetails flex flex-col justify-center items-center border-2 border-gray-600 w-full p-2">
                                <p className="text-white mr-6">{item.title}</p>
                                <p className="text-gray-500">${item.price}</p>
                            </div>
                            <button className="SingleItemButton text-white bg-[#079b9b] w-full py-2 cursor-pointer hover:bg-white hover:text-black transition duration-300" onClick={() => handleOpen(item)}>ADD TO CART</button>
                        </div>
                    )
                })}
            </div>
            <Modal
                open={isModalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ModalStyle} className="w-[90vw] md:w-[50vw]">
                    <div className="flex justify-center items-center">
                        <img src={selectedItem?.image} alt={selectedItem?.title} className="h-48 hover:scale-105 transition cursor-pointer" onClick={() => setZoomModalOpen(true)} />
                    </div>
                    <div className="flex items-center">
                        <h2 className="text-4xl mt-4">{selectedItem?.title}</h2>
                        <h2 className="text-3xl text-gray-500 my-4 ml-auto">${selectedItem?.price}</h2>
                    </div>
                    <p className="mt-2 text-gray-400">
                        {selectedItem?.description}
                    </p>
                    <div id="ModalOptions">
                        <div id="ColorSelect" className="mt-8">
                            <h3 className="text-2xl mb-2">Color</h3>
                            <div className="flex space-x-3">
                                {colors.map((color) => (
                                    <div
                                        key={color.name}
                                        className={`w-6 h-6 rounded-full cursor-pointer 
                                    ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-800' : ''}`}
                                        style={{
                                            backgroundColor: color.colorCode,
                                            border: color.border ? '1px solid #ddd' : 'none'
                                        }}
                                        onClick={() => handleColorSelect(color)}
                                    ></div>
                                ))}
                            </div>
                            {selectedColor && (
                                <p className="mt-4 text-sm text-white">Selected Color: <span className={`text-md text-[${selectedColor.colorCode}]`}>{selectedColor}</span></p>
                            )}
                        </div>
                        <div id="SizeSelect" className="mt-8">
                            <h3 className="text-2xl mb-2">Size</h3>
                            <div className="flex space-x-2">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`px-3 py-1 border rounded-md 
                        ${selectedSize === size
                                                ? 'border-gray-800 bg-gray-800 text-white'
                                                : 'border-gray-300 hover:bg-gray-100 hover:text-black cursor-pointer'
                                            }`}
                                        onClick={() => handleSizeSelect(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            {selectedSize && (
                                <p className="mt-4 text-sm text-white">Selected Size: <span className="font-medium">{selectedSize}</span></p>
                            )}
                        </div>
                    </div>
                    <div id="ModalButtons" className="mt-12">
                        <button className="border py-2 px-4 mr-8 bg-red-600 transition-colors cursor-pointer" onClick={handleClose}>Close</button>
                        <button className="bg-[#079b9b] border py-2 px-6 hover:bg-white hover:text-black transition-colors cursor-pointer" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </Box>
            </Modal>


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
    );
};

export default Items;

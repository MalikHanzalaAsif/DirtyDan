import React, { useState } from "react";
import ItemsArray from "../utils/ItemsArray";
import "../styles/Items.css";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import colors from "../utils/colors";
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
    const categories = ["TSHIRTS", "TROUSERS", "HOODIES", "SWEATSHIRTS"];
    const filteredItems = ItemsArray.filter((item) => item.category === activeTab);


    const [selectedColor, setSelectedColor] = useState(null);
    const handleSelect = (color) => {
        setSelectedColor(color.name);
    };
    return (
        <section id="Items">
            {/* Tab Buttons */}
            <div className="ItemsTabs flex flex-wrap">
                {categories.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={`${activeTab === item ? "activeTab" : ""} hover:opacity-60 transition`}
                            onClick={() => setActiveTab(item)}
                        >
                            {item}
                        </button>
                    )
                })}
            </div>

            <h1 className="text-3xl text-white mt-8">{activeTab}</h1>
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
                        <img src={selectedItem?.image} alt={selectedItem?.title} className="h-50 hover:scale-105 transition cursor-pointer" onClick={() => setZoomModalOpen(true)} />
                    </div>
                    <h2 className="text-4xl mt-4">{selectedItem?.title}</h2>
                    <h2 className="text-3xl text-gray-500 my-4">${selectedItem?.price}</h2>
                    <div id="ModalOptions">
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
                                    onClick={() => handleSelect(color)}
                                ></div>
                            ))}
                        </div>
                        {selectedColor && (
                            <p className="mt-2 text-sm text-gray-600">Selected: <span className={`text-md text-[${selectedColor.colorCode}]`}>{selectedColor}</span></p>
                        )}
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
                        // bgcolor: "background.paper",
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

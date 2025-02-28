import React, { useState } from "react";
import ItemsArray from "../utils/ItemsArray";
import "../styles/Items.css";

const Items = () => {
    const [activeTab, setActiveTab] = useState("TSHIRTS");

    const categories = ["TSHIRTS", "TROUSERS", "HOODIES", "SWEATSHIRTS"];
    const filteredItems = ItemsArray.filter((item) => item.category === activeTab);

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
                                <img src={item.image} alt={item.category} className="h-44"/>
                            </div>
                            <div className="SingleItemDetails flex flex-col justify-center items-center border-2 border-gray-600 w-full p-2">
                                <p className="text-white mr-6">{item.title}</p>
                                <p className="text-gray-500">${item.price}</p>
                            </div>
                            <button className="SingleItemButton text-white bg-[#079b9b] w-full py-2 cursor-pointer hover:bg-white hover:text-black transition duration-300">ADD TO CART</button>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Items;

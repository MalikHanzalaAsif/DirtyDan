import React from "react";
import "../styles/StarLine.css";
import Marquee from "react-fast-marquee";

const StarLine = () => {
    return (
        <div id="StarLineMarqueeContainer">
            <div className="relative w-full">
                {/* Shadow Div */}
                <div
                    className="absolute top-0 w-2 h-2 bg-transparent rounded-full"
                    style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 2,
                        boxShadow: "0px 0px 80px 120px black",
                        borderRadius: "50%",
                    }}
                ></div>

                {/* Star Image - Centered */}
                <img
                    id="StarLineStar"
                    src="/img/StarLineStar.png"
                    alt="star"
                    className="h-20 absolute top-0"
                    style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 10,
                    }}
                />
            </div>


            <Marquee pauseOnHover={false} direction="right" speed={100} gradient={false} className="flex gap-[50px] text-[3rem]">
                <span>UNLOCK YOUR GAMING POTENTIAL WITH US</span>
                <span>UNLOCK YOUR GAMING POTENTIAL WITH US</span>
                <span>UNLOCK YOUR GAMING POTENTIAL WITH US</span>
                <span>UNLOCK YOUR GAMING POTENTIAL WITH US</span>
                <span>UNLOCK YOUR GAMING POTENTIAL WITH US</span>
            </Marquee>

        </div>
    );
};

export default StarLine;

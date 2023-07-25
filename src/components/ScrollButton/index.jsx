import React, { useState } from "react";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 1000) {
            setVisible(true);
        } else if (scrolled <= 1000) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <>
            <div
                className="z-20 fixed w-full bottom-[180px] left-[90%] mobile:left-[85%]  hover:cursor-pointer"
                onClick={scrollToTop}
                style={{ display: visible ? "inline" : "none" }}
            >
                <img src="../../../imgbtn6.png" alt="" />
            </div>
        </>
    );
};

export default ScrollButton;

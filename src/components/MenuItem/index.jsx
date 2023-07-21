import * as React from "react";
import { motion } from "framer-motion";
import "../styles.css";
import { Link } from "react-router-dom";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const LINK = [
    // { Link: "/", Content: "" },
    { Link: "/education/about", Content: "Về chúng tôi" },
    { Link: "/education/utilities", Content: "Tiện ích" },
    { Link: "/education/contact", Content: "Liên hệ" },
];
export const MenuItem = ({ i }) => {
    return (
        <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <div className="icon-placeholder" style={style} />
            <div className="text-placeholder" style={style}>
                {i ? LINK[i] : i}
            </div>
        </motion.li>
    );
};

import * as React from "react";
import { motion } from "framer-motion";
import "../styles.css";
import { Link, useNavigate } from "react-router-dom";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const LISTvariants = {
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
    { Link: "/healthcare/about", Content: "Về chúng tôi" },
    { Link: "/healthcare/phisical-card", Content: "Thẻ vật lý" },
    { Link: "/healthcare/nonphisical-card", Content: "Thi phi vật lý" },
    { Link: "/healthcare/contact", Content: "Liên hệ" },
];

const navigate = useNavigate();
export const Navigation = (navigate) => (
    <motion.div variants={LISTvariants} className="flex h-full w-full p-6 ">
        <motion.div variants={LISTvariants} className="flex  w-full  flex-col gap-3">
            {LINK.map((link, i) => (
                <motion.div
                    key={i}
                    variants={LISTvariants}
                    className=" h-8 w-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        navigate(link.link);
                    }}
                >
                    <div className="text-placeholder">{link.Content}</div>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
);

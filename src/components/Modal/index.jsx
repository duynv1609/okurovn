import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

function Modal({ showModal, setShowModal }) {
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    className="fixed top-0 left-0 h-full w-full bg-black/[0.5] z-40"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    onClick={() => {
                        setShowModal(true);
                    }}
                ></motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;

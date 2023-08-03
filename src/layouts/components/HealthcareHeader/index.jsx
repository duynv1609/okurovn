import { motion, useCycle } from "framer-motion";
import { Popover } from "@headlessui/react";
import { MenuToggle } from "../../../components/MenuToggle";
import Navigation from "../../../components/Navigation";
import clsx from "clsx";

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LINK = [
    // { Link: "/", Content: "" },
    { Link: "/healthcare/about", Content: "Về chúng tôi" },
    { Link: "/healthcare/phisical-card", Content: "Thẻ vật lý" },
    { Link: "/healthcare/nonphisical-card", Content: "Thẻ phi vật lý" },
    { Link: "/healthcare/contact", Content: "Liên hệ" },
];

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(0px at 30px 40px)",
        x: 1000,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

function HeaderCustomer({ children, showModal, setShowModal }) {
    const navigate = useNavigate();
    const [isOpen, toggleOpen] = useCycle(false, true);
    const [height, setHeight] = useState(200);

    const { pathname } = useLocation();

    return (
        <>
            <div
                id="header"
                className="flex gap-40 justify-around border-2  bg-white min-h-[56px] h-14 w-full select-none items-center  font-medium text-slate-900 mobile:h-[76px]"
            >
                <div className="flex ml-0 pr-0 items-center justify-center mobile:hidden">
                    <Link to="/" className=" ">
                        <img src="../../../LogoHeader.png" alt="" className="w-30 h-6" />
                    </Link>
                </div>
                <div className="flex justify-start  space-x-3 gap-[70px]  mx-20 desk1000:mx-0 mobile:hidden">
                    {LINK.map((tab, index) => (
                        <Link
                            key={index}
                            to={tab.Link}
                            className={clsx(
                                "text-okuro-body-color  font-roboto items-center justify-center text-base font-light hover:cursor-pointer",
                                {
                                    " text-okuro-primary !text-lg !font-black ": pathname == tab.Link,
                                }
                            )}
                        >
                            {tab.Content}
                            <div
                                id="br"
                                className={clsx("w-[20px] h-[4px] rounded-[63px] bg-okuro-orange", {
                                    " hidden ": pathname != tab.Link,
                                })}
                            ></div>
                        </Link>
                    ))}
                </div>
                <div className="notmobile:hidden flex justify-center items-center py-5 px-[18px] h-full w-full">
                    <div
                        className="h-8 w-8 "
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        {" "}
                        <img src="../../../ButtonHeaderMobile.png" alt="" />
                    </div>
                    <div className="flex justify-center items-center grow h-full ">
                        <span className="text-okuro-color-text text-center font-roboto text-[24px] font-black leading-8">
                            {children}
                        </span>
                    </div>
                    <motion.div
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        className=" flex justify-center items-center h-9 w-9 "
                    >
                        <MenuToggle
                            toggle={() => {
                                toggleOpen();
                                setShowModal(!isOpen);
                            }}
                            isOpen={isOpen}
                        />
                    </motion.div>
                    {isOpen ? (
                        <motion.nav
                            className="z-30 absolute top-15  h-20 w-full "
                            initial={false}
                            animate={isOpen ? "open" : "closed"}
                        >
                            <motion.div
                                className="z-40 absolute top-0  h-full bg-black opacity-60"
                                variants={sidebar}
                                initial={false}
                                animate={isOpen ? "open" : "closed"}
                            ></motion.div>
                            <motion.div
                                className="z-40 absolute top-0   h-[400px] bg-white opacity-90"
                                variants={sidebar}
                                initial={false}
                                animate={isOpen ? "open" : "closed"}
                            ></motion.div>

                            <div className="z-50 bg-white">
                                <Navigation
                                    LINK={LINK}
                                    navigate={navigate}
                                    setShowModal={setShowModal}
                                    toggleOpen={toggleOpen}
                                />
                            </div>
                        </motion.nav>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    );
}

export default HeaderCustomer;

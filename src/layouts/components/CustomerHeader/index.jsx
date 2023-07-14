import { Popover } from "@headlessui/react";

import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LINK = [
    // { Link: "/", Content: "" },
    { Link: "/about", Content: "Về chúng tôi" },
    { Link: "/utilities", Content: "Tiện ích" },
    { Link: "/contact", Content: "Liên hệ" },
];

function HeaderCustomer({ children }) {
    const navigate = useNavigate();

    const { pathname } = useLocation();
    console.log(pathname);

    return (
        <header
            id="header"
            className="flex gap-40 justify-around border-2  bg-white min-h-[56px] h-14 w-full select-none items-center  font-medium text-slate-900"
        >
            <div className="flex ml-0 pr-0 items-center justify-center">
                <Link to="/" className=" ">
                    <img src="../../../LogoHeader.png" alt="" className="w-30 h-6" />
                </Link>
            </div>

            <div className="flex justify-start  space-x-3 gap-[70px]  mx-20">
                {LINK.map((tab, index) => (
                    <Link
                        to={tab.Link}
                        className={clsx(
                            "text-okuro-body-color  font-roboto items-center justify-center   !text-base font-light hover:cursor-pointer",
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
        </header>
    );
}

export default HeaderCustomer;

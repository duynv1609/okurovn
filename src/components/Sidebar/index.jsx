import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
const groupMenus = [
    {
        main: {
            iconClassname: "fa-solid fa-clipboard",
            text: "Danh sách bệnh viện",
            link: "/",
        },
        children: [
            {
                iconClassname: "fa-solid fa-list",
                text: "BV Bệnh Nhiệt đới",
                link: "/",
            },
            {
                iconClassname: "fa-solid fa-circle-plus",
                text: "BV Lê Văn Thịnh",
                link: "/",
            },
            {
                iconClassname: "fa-solid fa-circle-plus",
                text: "BV Tân Phú",
                link: "/",
            },
            {
                iconClassname: "fa-solid fa-table",
                text: "BV Nhân Dân 115",
                link: "/",
            },
            // {
            //     iconClassname: "fa-solid fa-table",
            //     text: "BV Nhi Đồng 2",
            //     link: "/",
            // },
        ],
    },
    {
        main: {
            iconClassname: "fa-solid fa-box-open",
            text: "Ngân hàng liên kết",
            link: "/",
        },
        children: [
            {
                iconClassname: "fa-solid fa-list",
                text: "SaigonBank",
                link: "/",
            },
        ],
    },
];

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);
    const [map, setMap] = useState(3);

    const [isSeleccted, setIsSelected] = useState(0);
    const [isSeleccted2, setIsSelected2] = useState(6);

    return (
        <div className="flex h-auto min-w-[240px] flex-col font-roboto ">
            <div className="flex select-none flex-col space-y-0.5  " style={{ overflowY: "overlay" }}>
                <div className="flex flex-col">
                    <div
                        className={clsx(
                            "flex cursor-pointer  select-none  h-20  items-center rounded-[12px] justify-between  bg-okuro-primary px-4 py-3  bg  hover:bg-blue-400",
                            {
                                "rounded-b-none": isOpen,
                            }
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="flex grow flex-col items-start leading-[26px]">
                            <span className="select-none text-white  text-[16px] font-light  ">
                                {groupMenus[0].main.text}
                            </span>
                            <span className="select-none text-white text-[20px] font-semibold l ">
                                {groupMenus[0].children[isSeleccted]?.text}
                            </span>
                        </div>
                        {groupMenus[0].children && (
                            <span
                                className={clsx("transition text-white ", {
                                    "rotate-90": isOpen,
                                })}
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </span>
                        )}
                    </div>
                    {groupMenus[0].children && isOpen && (
                        <div className="flex justify-start  items-start  w-full z-30 shadow-[0_4px_20px_0px_rgba(0,0,0,0.05)] ">
                            <div className="flex  z-40 flex-col w-full">
                                {groupMenus[0].children.map((item, index) => (
                                    <div className="flex gap-[16px] items-center w-full">
                                        <div className="flex h-full justify-center items-center rounded-[6px]">
                                            <div
                                                className={clsx("w-1 h-[37px] rounded-[6px]", {
                                                    "bg-okuro-orange": isSeleccted == index,
                                                })}
                                            >
                                                {" "}
                                            </div>
                                        </div>

                                        <div
                                            key={index}
                                            onClick={() => {
                                                setIsSelected(index);
                                            }}
                                            className={clsx(
                                                "flex  items-center  hover:cursor-pointer text-center w-full h-[72px]",
                                                {
                                                    "font-semibold bg-okuro-orange text-white": isSeleccted == index,
                                                }
                                            )}
                                        >
                                            <span className=" m-6 ">{item.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col">
                    <div
                        className={clsx(
                            "flex cursor-pointer select-none h-20 items-center rounded-[12px] justify-between  bg-okuro-primary px-4 py-3  bg  hover:bg-blue-400",
                            {
                                "rounded-b-none": isOpen2,
                            }
                        )}
                        onClick={() => setIsOpen2(!isOpen2)}
                    >
                        <div className="flex flex-col items-center leading-[26px]">
                            <span className="select-none text-white  text-[16px] font-light  ">
                                {groupMenus[1].main.text}
                            </span>
                            <span className="select-none text-white text-[20px] font-semibold l ">
                                {groupMenus[1].children[isSeleccted - 6]?.text}
                            </span>
                        </div>
                        {groupMenus[1].children && (
                            <span
                                className={clsx("transition text-white ", {
                                    "rotate-90": isOpen2,
                                })}
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </span>
                        )}
                    </div>
                    {groupMenus[1].children && isOpen2 && (
                        <div className="flex justify-start  items-start  w-full z-30 shadow-[0_4px_20px_0px_rgba(0,0,0,0.05)] ">
                            <div className="flex  z-40 flex-col w-full">
                                {groupMenus[1].children.map((item, index) => (
                                    <div className="flex gap-[16px] items-center w-full">
                                        <div className="flex h-full justify-center items-center rounded-[6px]">
                                            <div
                                                className={clsx("w-1 h-[37px] rounded-[6px]", {
                                                    "bg-okuro-orange": isSeleccted == index + 6,
                                                })}
                                            >
                                                {" "}
                                            </div>
                                        </div>

                                        <div
                                            key={index}
                                            onClick={() => {
                                                setIsSelected(index + 6);
                                            }}
                                            className={clsx(
                                                "flex  items-center  hover:cursor-pointer text-center w-full h-[72px]",
                                                {
                                                    "font-semibold bg-okuro-orange text-white":
                                                        isSeleccted == index + 6,
                                                }
                                            )}
                                        >
                                            <span className=" m-6 ">{item.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

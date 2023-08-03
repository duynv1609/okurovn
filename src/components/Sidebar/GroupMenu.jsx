import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useContext } from "react";
import { LangContext } from "../../langContext";

function GroupMenu({ groupMenu }) {
    const [isOpen, setIsOpen] = useState(false);
    let MainComp = "div";
    if (!groupMenu.children) {
        MainComp = Link;
    }
    const [isSeleccted, setIsSelected] = useState(1);

    return (
        <div className="flex flex-col">
            <MainComp
                className={clsx(
                    "flex cursor-pointer select-none  items-center rounded-[12px] justify-between bg-okuro-primary  px-4 py-3  bg  hover:bg-blue-400",
                    {
                        "bg-blue-400": isSeleccted === 2,
                        "rounded-b-none": isOpen,
                    }
                )}
                onClick={() => setIsOpen(!isOpen)}
                to={!groupMenu.children ? groupMenu.main?.link : undefined}
            >
                <div className="flex items-center">
                    <span className="pr-2">
                        <i className={groupMenu.main.iconClassname}></i>
                    </span>
                    <span className="select-none font-medium ">{groupMenu.main.text}</span>
                </div>
                {groupMenu.children && (
                    <span className={clsx("transition", { "rotate-90": isOpen })}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </span>
                )}
            </MainComp>
            {groupMenu.children && isOpen && (
                <div className="flex justify-start  items-start  w-full z-30 border-b-[12px] shadow-[0_4px_20px_0px_rgba(0,0,0,0.05)] ">
                    <div className="flex  z-40 flex-col">
                        {groupMenu.children.map((item, index) => (
                            <div className="flex gap-[16px]">
                                <div className="flex h-full justify-center items-center rounded-[6px]">
                                    <div
                                        className={clsx("w-1 h-[37px] rounded-[6px]", {
                                            "bg-okuro-orange": index == 2,
                                        })}
                                    >
                                        {" "}
                                    </div>
                                </div>

                                <div
                                    key={index}
                                    className={({ isActive }) =>
                                        clsx(
                                            "flex w-full h-full text-white bg-orange-500 hover:bg-green-200 hover:underline",
                                            {
                                                "font-semibold underline": isActive,
                                            }
                                        )
                                    }
                                >
                                    <span>{item.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default GroupMenu;

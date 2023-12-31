import { Popover } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { animate, motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import clsx from "clsx";
import { useContext } from "react";
import { LangContext } from "../../LangContext";
import { useTranslation } from "react-i18next";
const LANGUAGE = [
    { id: 0, logo: "logoVN_circle.svg", content: "Tiếng Việt" },
    { id: 1, logo: "logoEN_circle.svg", content: "Tiếng Anh" },
];

function LandingPage() {
    const { t } = useTranslation();
    const langcontext = useContext(LangContext);
    const isDeskTop = useMediaQuery("(min-width:1900px)");
    const variants = { initial: { scale: 0 }, animate: { scale: 1 } };
    return (
        <motion.div>
            <div className="flex flex-col justify-between  w-full h-screen   mobile:items-center mobile:bg-okuro-background  ">
                <motion.div
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col h-screen justify-between mobile:justify-items-start bg-okuro-background  z-20 select-none mobile:justify-between mobile:items-start mobile:h-[671px] mobile:mx-4 mobile:mt-[34px]  "
                >
                    <div className="z-20 absolute select-none h-[245px] w-[540px] right-0 top-0   bg-[url('../../../topright.png')] desktop:h-[220px] desktop:w-[486px] pc:h-[286px] pc:w-[530px]      mobile:hidden"></div>
                    <div className="z-20 absolute select-none h-[245px] w-[540px] left-[-139px] bottom-[125px]    bg-[url('../../../bottomleft.png')]  desktop:h-[220px] desktop:w-[486px] pc:h-[286px] pc:w-[530px]    desktop:bottom-[125px] desktop:left-[-225px]  mobile:hidden"></div>
                    <div
                        id="content"
                        className="z-20 flex  space-x-[200px] justify-center items-center  h-[860px] w-full  px-[275px] pb-8  desktop:h-[600px] pc:h-[700px] desktop:w-full desktop:space-x-2 mobile:h-[179px] mobile:mb-9 mobile:p-0 mobile:m-0 mobile: mobile:space-x-[2px] "
                    >
                        <div className="flex justify-between mobile:w-[343px] mobile:flex-col  mobile:h-[179px] mobile:z-50 ">
                            <div
                                className="w-full h-10 hidden justify-end sm:hidden md:h-9 md:w-0 "
                                onClick={() => {
                                    langcontext.toggleLang();
                                }}
                            >
                                <div className="flex gap-0 w-12 h-[18px]">
                                    <div
                                        className={clsx(
                                            "bg-[url('../../../logoVN.svg')] bg-center w-6 h-[18px] rounded-l-[20px] opacity-100",
                                            {
                                                "opacity-20": langcontext.lang?.id == 1,
                                            }
                                        )}
                                    ></div>
                                    <div
                                        className={clsx(
                                            "bg-[url('../../../logoEN.svg')]  bg-center w-6 h-[18px] rounded-r-[20px] opacity-100",
                                            {
                                                "opacity-20": langcontext.lang?.id == 0,
                                            }
                                        )}
                                    ></div>
                                </div>
                            </div>
                            <div className="z-30 flex-col items-center  w-[550px] desktop:w-[400px] mobile:w-[343px] mobile:h-[161px]">
                                <img src="../../../LogoLandingPage.png" alt="" className="mobile:hidden" />

                                <div className="flex flex-col items-start gap-4 my-8  mobile:mb-4 mobile:my-0 mobile:gap-0">
                                    <div className="text-5xl  font-roboto  font-bold text-okuro-color-text desktop:text-3xl mobile:text-3xl">
                                        {t("content.Giải Pháp Số Hóa")}
                                    </div>
                                    <div
                                        className={clsx("flex  justify-center gap-x-1 mobile:space-x-0", {
                                            "flex justify-start items-end  space-x-0 desktop:flex-col desktop:items-start":
                                                langcontext.lang?.id == 1,
                                            "items-end": langcontext.lang?.id == 0,
                                        })}
                                    >
                                        <div className="text-7xl  font-bold whitespace-nowrap text-okuro-orange desktop:text-5xl  mobile:text-3xl">
                                            {t("content.Y Tế")}
                                        </div>
                                        <div className="text-5xl font-bold text-okuro-color-text desktop:text-3xl  mobile:text-2xl">
                                            {t("content.và")}
                                        </div>
                                        <div className="z-30 text-7xl font-bold text-okuro-primary  whitespace-nowrap desktop:text-5xl  mobile:text-3xl">
                                            {t("content.Giáo Dục")}
                                        </div>
                                    </div>
                                    <div
                                        style={{ whiteSpace: "pre-wrap" }}
                                        className=" text-slate-500 text-xl font-light leading-9 desktop:text-xl mobile:text-base mobile:leading-6"
                                    >
                                        {t("content.Liên kết hệ thống bệnh viện và trường học")} {"\n"}
                                        {t("content.Ứng dụng mạng xã hội chuyên biệt")}
                                    </div>
                                </div>
                                <div id="br" className="w-[82px] h-[6px] rounded-[63px] bg-okuro-color-text"></div>
                            </div>
                        </div>

                        <div className="z-30 flex  flex-col items-center w-[700px]  mobile:w-[343px] mobile:h-[40px] mobile:items-start  mobile:hidden ">
                            <div id="language" className="z-30 hidden justify-end w-full min-h-[140px] ">
                                <Popover className=" flex select-none z-30 w-40 translate-y-3 space-y-3">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button className="flex absolute items-center rounded-lg z-50 bg-okuro-background   outline-none ">
                                                <img src="../../../globe.svg" className="mr-4" />
                                                <div
                                                    className={clsx(
                                                        "whitespace-nowrap text-xl font-normal leading-[30px] text-okuro-web-text",
                                                        {
                                                            underline: open,
                                                        }
                                                    )}
                                                >
                                                    {langcontext.lang.content}
                                                </div>

                                                {open ? (
                                                    <img src="../../../ArrowUp.svg" alt="" />
                                                ) : (
                                                    <img src="../../../ArrowDown.svg" alt="" />
                                                )}
                                            </Popover.Button>

                                            <Popover.Panel className="absolute flex  flex-col top-10 z-50 p-4 items-start gap-4 rounded-xl  bg-white shadow-md">
                                                {LANGUAGE.map((l, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center  gap-4 justify-stretch hover:cursor-pointer"
                                                    >
                                                        <div className="flex gap-2 items-center">
                                                            <img
                                                                className="rounded-[30px] h-[20px]"
                                                                src={"../../../" + l.logo}
                                                                alt=""
                                                            />
                                                            <div
                                                                onClick={() => {
                                                                    if (l != LangContext.lang) langcontext.toggleLang();
                                                                }}
                                                                className={clsx(
                                                                    "text-base font-light leading-[30px] whitespace-nowrap text-okuro-body-color",
                                                                    {
                                                                        "text-okuro-web-text font-medium":
                                                                            l.content == langcontext.lang.content,
                                                                    }
                                                                )}
                                                            >
                                                                {l.content}
                                                            </div>
                                                        </div>
                                                        {l.content == langcontext.lang.content ? (
                                                            <img
                                                                className="rounded-[30px]"
                                                                src={"../../../Vector.svg"}
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                ))}
                                            </Popover.Panel>
                                        </>
                                    )}
                                </Popover>
                            </div>
                            <div
                                id="frame"
                                className="z-20 w-[700px] h-[492px] desktop:w-[490px] desktop:h-[343px] pc:h-[450px] mobile:hidden "
                            >
                                <img src="../../../Frame.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="z-20 flex justify-center  items-end gap1050:gap-[12px] gap-[42px] w-full lg:bottom-[10%]  lg:absolute lg:top-[850px] desktop:top-[600px] desk1000:top-[650px] pc:top-[800px]     pc:bottom-[7%] mobile:flex-col mobile:relative    mobile:items-center mobile:justify-center mobile:gap-6  mobile:h-[456px] ">
                        <Link to="/healthcare/about">
                            <motion.div
                                variants={variants}
                                initial={variants.initial}
                                animate={variants.animate}
                                className="z-20 flex justify-center items-center w-[452px] h-[180px] rounded-2xl   bg-cover bg-[url('../../../yte.png')]  hover:cursor-pointer desktop:w-[316px] desktop:h-[126px] desktop:bg-contain mobile:w-[343px] mobile:h-[136px]"
                            >
                                <div className="flex flex-col items-start justify-center  w-[332px] h-[69px] text-5xl font-extrabold text-white desktop:text-3xl desktop:w-[222px] mobile:w-[260px] mobile:text-4xl ">
                                    {t("content.Y Tế")}
                                </div>
                            </motion.div>{" "}
                        </Link>
                        <Link to="/education/about">
                            <motion.div
                                variants={variants}
                                initial={variants.initial}
                                animate={variants.animate}
                                className="z-20 flex justify-center items-center w-[452px] h-[180px] rounded-2xl  bg-cover bg-[url('../../../giaoduc.png')] hover:cursor-pointer desktop:w-[316px] desktop:h-[126px] desktop:bg-contain mobile:w-[343px] mobile:h-[136px]"
                            >
                                <div className="flex flex-col items-start  justify-center w-[332px] h-[69px] text-5xl font-extrabold text-white desktop:text-3xl desktop:w-[222px] mobile:w-[260px] mobile:text-4xl">
                                    {t("content.Giáo Dục")}
                                </div>
                            </motion.div>
                        </Link>
                        <Link to="/EMR">
                            <motion.div
                                variants={variants}
                                initial={variants.initial}
                                animate={variants.animate}
                                className="z-20 flex justify-center items-center w-[452px] h-[180px] rounded-2xl bg-cover bg-[url('../../../frameEMR.png')] hover:cursor-pointer desktop:w-[316px] desktop:h-[126px] desktop:bg-contain mobile:w-[343px] mobile:h-[136px]"
                            >
                                <div>
                                    <img src="../../../EMR.svg" alt="" className="w-[50px] h-[47px] mx-1" />
                                </div>
                                <div className=" flex flex-col items-start justify-center w-[332px] h-[69px] text-5xl font-extrabold text-white desktop:text-3xl  desktop:w-[220px] mobile:w-[260px] mobile:text-4xl">
                                    {t("content.EMR")}
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>

                <div
                    id="footer"
                    className="z-10 h-[163px]    bg-[url('../../../footerImage.png')]  opacity-20 mobile:bg-cover mobile:absolute  mobile:bottom-[-1px] mobile:h-[95px] mobile:w-[375px] "
                ></div>
            </div>
        </motion.div>
    );
}

export default LandingPage;

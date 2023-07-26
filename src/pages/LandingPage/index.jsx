import { Popover } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { animate, motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import clsx from "clsx";
const LANGUAGE = [
    { id: 0, logo: "logoVN_circle.svg", content: "Tiếng Việt" },
    { id: 1, logo: "logoEN_circle.svg", content: "Tiếng Anh" },
];
const CONTENT = [
    [
        "Giải Pháp Số Hóa",
        "Y Tế",
        ` \xa0và\xa0    `,
        "Giáo Dục",
        "Liên kết hệ thống bệnh viện và trường học",
        "Ứng dụng mạng xã hội chuyên biệt",
        "Y tế",
        "Giáo dục",
        "EMR",
    ],
    [
        "Digital Solutions",
        "Healthcare ",
        "\xa0&\xa0",
        "Education",
        "Connecting hospital and school systems",
        "Specialized social networking application",
        "Healthcare",
        "Education",
        "EMR",
    ],
];

function LandingPage() {
    const isDeskTop = useMediaQuery("(min-width:1900px)");
    const variants = { initial: { scale: 0 }, animate: { scale: 1 } };
    const [isLanguage, setIsLanguage] = useState(LANGUAGE[0]);
    const [isContent, setIsContent] = useState(CONTENT[0]);
    const [toggle, setToggle] = useState(false);
    function switchLanguage() {
        if (!toggle) {
            setIsContent(CONTENT[0]);
            setIsLanguage(LANGUAGE[0]);
        } else {
            setIsContent(CONTENT[1]);
            setIsLanguage(LANGUAGE[1]);
        }
    }
    useEffect(() => {
        switchLanguage();
    }, [toggle]);

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
                                className="w-full h-10 flex justify-end sm:hidden md:h-9 md:w-0 "
                                onClick={() => {
                                    setToggle(!toggle);
                                }}
                            >
                                <div className="flex gap-0 w-12 h-[18px]">
                                    <div
                                        className={clsx(
                                            "bg-[url('../../../logoVN.svg')] bg-center w-6 h-[18px] rounded-l-[20px] opacity-100",
                                            {
                                                "opacity-20": toggle,
                                            }
                                        )}
                                    ></div>
                                    <div
                                        className={clsx(
                                            "bg-[url('../../../logoEN.svg')]  bg-center w-6 h-[18px] rounded-r-[20px] opacity-100",
                                            {
                                                "opacity-20": !toggle,
                                            }
                                        )}
                                    ></div>
                                </div>
                            </div>
                            <div className="z-30 flex-col items-center  w-[550px] desktop:w-[400px] mobile:w-[343px] mobile:h-[161px]">
                                <img src="../../../LogoLandingPage.png" alt="" className="mobile:hidden" />

                                <div className="flex flex-col items-start gap-4 my-8  mobile:mb-4 mobile:my-0 mobile:gap-0">
                                    <div className="text-5xl  font-roboto  font-bold text-okuro-color-text desktop:text-3xl mobile:text-3xl">
                                        {isContent[0]}
                                    </div>
                                    <div
                                        className={clsx("flex  justify-center mobile:space-x-0", {
                                            "flex justify-start items-end  space-x-0 desktop:flex-col desktop:items-start":
                                                isLanguage.id == 1,
                                            "items-end": isLanguage.id == 0,
                                        })}
                                    >
                                        <div className="text-7xl  font-bold whitespace-nowrap text-okuro-orange desktop:text-5xl  mobile:text-3xl">
                                            {isContent[1]}
                                        </div>
                                        <div className="text-5xl font-bold text-okuro-color-text desktop:text-3xl  mobile:text-2xl">
                                            {isContent[2]}
                                        </div>
                                        <div className="z-30 text-7xl font-bold text-okuro-primary  whitespace-nowrap desktop:text-5xl  mobile:text-3xl">
                                            {isContent[3]}
                                        </div>
                                    </div>
                                    <div
                                        style={{ whiteSpace: "pre-wrap" }}
                                        className=" text-slate-500 text-xl font-light leading-9 desktop:text-xl mobile:text-base mobile:leading-6"
                                    >
                                        {isContent[4]} {"\n"}
                                        {isContent[5]}
                                    </div>
                                </div>
                                <div id="br" className="w-[82px] h-[6px] rounded-[63px] bg-okuro-color-text"></div>
                            </div>
                        </div>

                        <div className="z-30 flex  flex-col items-center w-[700px]  mobile:w-[343px] mobile:h-[40px] mobile:items-start  mobile:hidden ">
                            <div id="language" className="z-30 flex justify-end w-full min-h-[140px] ">
                                <Popover className="flex select-none z-30 w-40 translate-y-3 space-y-3">
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
                                                    {isLanguage.content}
                                                </div>

                                                {open ? (
                                                    <img src="../../../ArrowUp.svg" alt="" />
                                                ) : (
                                                    <img src="../../../ArrowDown.svg" alt="" />
                                                )}
                                            </Popover.Button>

                                            <Popover.Panel className="absolute flex  flex-col top-10 z-50 p-4 items-start gap-4 rounded-xl  bg-white shadow-md">
                                                {LANGUAGE.map((lang, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center  gap-4 justify-stretch hover:cursor-pointer"
                                                    >
                                                        <div className="flex gap-2 items-center">
                                                            <img
                                                                className="rounded-[30px] h-[20px]"
                                                                src={"../../../" + lang.logo}
                                                                alt=""
                                                            />
                                                            <div
                                                                onClick={() => {
                                                                    setIsLanguage(lang);
                                                                    setIsContent(CONTENT[lang.id]);
                                                                }}
                                                                className={clsx(
                                                                    "text-base font-light leading-[30px] whitespace-nowrap text-okuro-body-color",
                                                                    {
                                                                        "text-okuro-web-text font-medium":
                                                                            lang.content == isLanguage.content,
                                                                    }
                                                                )}
                                                            >
                                                                {lang.content}
                                                            </div>
                                                        </div>
                                                        {lang.content == isLanguage.content ? (
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
                    <div className="z-20 flex justify-center  items-end gap-[42px] w-full lg:bottom-[10%]  lg:absolute  desktop:top-[530px]   pc:bottom-[7%] mobile:flex-col mobile:relative    mobile:items-center mobile:justify-center mobile:gap-6  mobile:h-[456px] ">
                        <Link to="/healthcare/about">
                            <motion.div
                                variants={variants}
                                initial={variants.initial}
                                animate={variants.animate}
                                className="z-20 flex justify-center items-center w-[452px] h-[180px] rounded-2xl   bg-cover bg-[url('../../../yte.png')]  hover:cursor-pointer desktop:w-[316px] desktop:h-[126px] desktop:bg-contain mobile:w-[343px] mobile:h-[136px]"
                            >
                                <div className="flex flex-col items-start justify-center  w-[332px] h-[69px] text-5xl font-extrabold text-white desktop:text-3xl desktop:w-[222px] mobile:w-[260px] mobile:text-4xl ">
                                    {isContent[6]}
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
                                    {isContent[7]}
                                </div>
                            </motion.div>
                        </Link>
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
                                {isContent[8]}
                            </div>
                        </motion.div>
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

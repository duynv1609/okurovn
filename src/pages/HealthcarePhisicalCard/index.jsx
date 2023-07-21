import Contact from "../../components/CustomerContact";
import Footer from "../../components/HealthcareFooter";
import { Carousel, IconButton, tabs } from "@material-tailwind/react";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import PaginationPhisical from "../../components/PaginationPhisical";
import Sidebar from "../../components/Sidebar";
import { animate, motion, useCycle, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const LANGUAGE = [
    { id: 0, logo: "logoVN_circle.svg", content: "Tiếng Việt" },
    { id: 1, logo: "logoEN_circle.svg", content: "Tiếng Anh" },
];
const CONTENT = [
    [
        "Giải Pháp Số Hóa",
        "Y Tế ",
        "và ",
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
        "and ",
        "Education",
        "Connecting hospital and school systems",
        "Specialized social networking application",
        "Healthcare",
        "Education",
        "EMR",
    ],
];
const TABS = [
    [
        {
            title: "Mạng xã hội",
        },
        {
            title: "Tuyển sinh",
        },
        {
            title: "Thông tin học sinh",
        },
        {
            title: "Thời khóa biểu",
        },
        {
            title: "Điểm danh xe bus",
        },
        {
            title: "Giáo viên",
        },
        {
            title: "Thực đơn",
        },

        {
            title: "Nhật ký hoạt động",
        },
        {
            title: "Điểm danh",
        },
        {
            title: "Lời nhắn",
        },
        {
            title: "Kết quả học tập",
        },
        {
            title: "Thanh toán",
        },
    ],
    [
        "Mạng xã hội",
        "Tuyển sinh",
        "Thông tin học sinh",
        "Thời khóa biểu",
        "Điểm danh xe bus",
        "Giáo viên",
        "Thực đơn",
        "Nhật ký hoạt động",
        `absolute  top-4 left-1/2 bg-red-200  -translate-x-1/2 z-50 flex  gap-[50px]`,
    ],
];

const imgVariant = {
    hidden: {
        opacity: 0,
        scale: 0.5,
        x: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { delay: 0.4 },
    },
    trans: { delay: 2, duration: 20 },
    exit: { scale: 0.5, opacity: 0, x: 0, transition: { delay: 0.1 } },
};

const containerVariant = {
    initial: (index) => {
        return { x: -100, opacity: 1, scale: 1 };
    },
    animate: (index) => {
        switch (index.now) {
            case 1:
                if (index.prev == 3) {
                    return {
                        x: 0,
                        scale: [0.5, 1],
                        transition: {
                            opacity: [1, 0, 0, 0, 0, 1],
                            scale: { duration: 0.3 },
                        },
                    };
                }
                return { x: 0, opacity: 1, scale: 1 };
            case 2:
                return { x: 412 };
            case 3:
                if (index.prev == 1) {
                    return {
                        x: 825,
                        scale: [0.5, 1],
                        transition: {
                            opacity: [1, 0, 0, 0, 0, 1],
                            scale: { duration: 0.3 },
                        },
                    };
                }
                return { x: 825, opacity: 1, scale: 1 };
        }
    },
    animate2: (index) => {
        switch (index.now) {
            case 1:
                return { x: 0 };
            case 2:
                if (index.prev == 3) {
                    return {
                        x: 412,
                        scale: [0.5, 1],
                        transition: {
                            opacity: [1, 0, 0, 0, 0, 1],
                            scale: { duration: 0.3 },
                        },
                    };
                }
                return { x: 412, opacity: 1, scale: 1 };
            case 3:
                if (index.prev == 2) {
                    return {
                        x: -412,
                        scale: [0.5, 1],
                        transition: {
                            opacity: [1, 0, 0, 0, 0, 1],
                            scale: { duration: 0.3 },
                        },
                    };
                }
                return { x: -412, opacity: 1, scale: 1 };
        }
    },
    animate3: (index) => {
        switch (index.now) {
            case 1:
                if (index.prev == 1) {
                    return {
                        x: 0,
                        scale: [0.5, 1],
                        transition: {
                            opacity: [1, 0, 0, 0, 0, 1],
                            scale: { duration: 0.3 },
                        },
                    };
                }
                return { x: 0, opacity: 1, scale: 1 };
            case 2:
                if (index.prev == 1) {
                    return {
                        x: -825,
                        scale: [0.5, 1],
                        transition: {
                            opacity: [1, 0, 0, 0, 0, 1],
                            scale: { duration: 0.3 },
                        },
                    };
                }
                return { x: -825, opacity: 1, scale: 1 };
            case 3:
                return { x: -412 };
        }
    },
    hover: {
        scale: 1.24,
        textShadow: "0px 0px 8px rbg(225,225,225)",
        boxShadow: "0px 0px 8px rbg(225,225,225)",
    },
    transition: { duration: 10 },
    exit: {
        x: 100,
    },
};

function PhisicalCard() {
    const [signup, setSignup] = useState(true);
    const [phisical1, setPhisical1] = useState(1);
    const [phisical2, setPhisical2] = useState(1);
    const [phisical3, setPhisical3] = useState(1);

    const [isLanguage, setIsLanguage] = useState(LANGUAGE[0]);
    const [isContent, setIsContent] = useState(CONTENT[0]);
    const [toggle, setToggle] = useState(false);
    function switchLanguage() {
        if (isContent == CONTENT[1]) {
            setIsContent(CONTENT[0]);
        } else {
            setIsContent(CONTENT[1]);
        }
    }
    const [bus, setBus] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between h-full"
        >
            <div id="Slider" className="flex justify-center h-full">
                <div
                    id="background"
                    className="absolute h-[60%] w-full bg-okuro-background desktop:h-[90%] pc:h-[65%] myscreen:h-[55%] overflow-x-hidden"
                >
                    <div className="h-[305px] w-[305px]  rotate-45  rounded-[60px] left-[0px] absolute -translate-x-[80%] top-[53%] -translate-y-1/2 bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                    <div className="h-[305px] w-[305px]  rotate-45  rounded-[60px] right-[0px] absolute translate-x-[80%] top-[53%] -translate-y-1/2 bg-gradient-to-l from-okuro-color-text to-okuro-primary"></div>
                </div>
                <Carousel
                    className="rounded-xl w-[1200px] h-[700px] mb-20"
                    loop={true}
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handlePrev}
                            className=" bg-white text-okuro-color-text  hover:bg-okuro-primary rounded-[100%]  !absolute top-2/4 -translate-y-2/4 left-0 "
                        >
                            <span>
                                <i className="fa fa-angle-left fa-2xl"></i>
                            </span>
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handleNext}
                            className=" bg-white text-okuro-color-text hover:bg-okuro-primary rounded-[100%] !absolute top-2/4 -translate-y-2/4 !right-0"
                        >
                            <span>
                                <i className="fa fa-angle-right fa-2xl"></i>
                            </span>
                        </IconButton>
                    )}
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all  ${
                                        activeIndex === i ? "bg-red-800 w-[32px]" : "bg-okuro-pagination w-4"
                                    }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                >
                    <PaginationPhisical></PaginationPhisical>
                    <PaginationPhisical></PaginationPhisical>
                    <PaginationPhisical></PaginationPhisical>
                    <PaginationPhisical></PaginationPhisical>
                    <PaginationPhisical></PaginationPhisical>
                </Carousel>
            </div>
            <div className="flex flex-col justify-between items-center  w-full h-auto mobile:hidden">
                <div className="flex flex-col  justify-center  items-center h-auto w-full">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px] text-okuro-color-text ">
                            Các loại <span className="text-okuro-orange"> thẻ vật lý </span> của Okuro
                        </span>
                    </div>
                    <div id="Phisical1" className="flex justify-center items-center  h-full w-full ">
                        <div className="z-20 flex  rounded-xl w-[1178px] h-[581px]  items-center justify-center overflow-y-hidden">
                            <div className="flex w-[1178px] gap-[52px] h-[450px] overflow-y-hidden">
                                <div className="">
                                    <AnimatePresence>
                                        {phisical1 == 1 && (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../phisical11.png"
                                                alt=""
                                                className="min-w-[666px] w-[666x] h-[443px] overflow-y-hidden hover:cursor-pointer"
                                            />
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {phisical1 == 2 && (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../phisical12.png"
                                                alt=""
                                                className="min-w-[666px] w-[666x] h-[443px] overflow-y-hidden hover:cursor-pointer"
                                            />
                                        )}{" "}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {phisical1 == 3 && (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../phisical13.png"
                                                alt=""
                                                className="min-w-[666px] w-[666x] h-[443px]  hover:cursor-pointer"
                                            />
                                        )}{" "}
                                    </AnimatePresence>
                                </div>
                                <div className="flex flex-col gap-4 justify-center items-start  w-[460px] h-auto ">
                                    <div className="flex justify-start items-center">
                                        <p className="font-roboto text-[30px] font-bold leading-[48px]">
                                            <span className="text-okuro-name">OKURO</span>
                                            <span className="text-okuro-bank"> x VietinBank</span>
                                        </p>
                                    </div>
                                    <div className="flex gap-[30px] h-[52px] w-full ">
                                        <div
                                            className={clsx(
                                                "flex      w-[52px] h-[52px] bg-no-repeat  items-center justify-center cursor-pointer rounded-lg transition-all",
                                                {
                                                    " bg-[url('../../../phisicalxanh11.png')]": phisical1 == 1,
                                                    " bg-[url('../../../phisicaltrang11.png')]": phisical1 != 1,
                                                }
                                            )}
                                            onClick={() => {
                                                setPhisical1(1);
                                            }}
                                        ></div>

                                        <div
                                            className={clsx(
                                                "flex   bg-contain w-[52px] h-[52px] bg-no-repeat  opacity-100   items-center justify-center cursor-pointer rounded-lg transition-all",
                                                {
                                                    " bg-[url('../../../phisicalxanh12.png')]": phisical1 == 2,
                                                    " bg-[url('../../../phisicaltrang12.png')]": phisical1 != 2,
                                                }
                                            )}
                                            onClick={() => {
                                                setPhisical1(2);
                                            }}
                                        ></div>
                                        <div
                                            className={clsx(
                                                "flex   bg-contain w-[52px] h-[52px] bg-no-repeat  opacity-100   items-center justify-center cursor-pointer rounded-lg transition-all",
                                                {
                                                    " bg-[url('../../../phisicalxanh13.png')]": phisical1 == 3,
                                                    " bg-[url('../../../phisicaltrang13.png')]": phisical1 != 3,
                                                }
                                            )}
                                            onClick={() => {
                                                setPhisical1(3);
                                            }}
                                        ></div>
                                    </div>
                                    {phisical1 == 1 && (
                                        <div className="flex flex-col gap-3 w-full h-[164px] font-roboto text-[18px] font-normal leading-8 text-okuro-body-color">
                                            <p>
                                                Ngân hàng liên kết: <span className="font-extrabold">VietinBank</span>
                                            </p>
                                            <p>
                                                Nơi áp dụng thẻ:
                                                <span className="font-extrabold">Bệnh viện Bệnh Nhiệt Đới</span>
                                            </p>
                                            <p>
                                                Quyền lợi:{" "}
                                                <span className="font-extrabold">
                                                    Miễn phí cho lần cấp thẻ đầu tiên
                                                </span>
                                            </p>
                                        </div>
                                    )}
                                    {phisical1 == 2 && (
                                        <div className="flex flex-col gap-3 w-full h-[164px] font-roboto text-[18px] font-normal leading-8 text-okuro-body-color">
                                            <p>1. Chip điện tử</p>
                                            <p>
                                                2. Số thẻ: <span className="font-extrabold">1234 5678 9012 3456</span>
                                            </p>
                                            <p>
                                                3. Ngày bắt đầu hiệu lực thẻ:
                                                <span className="font-extrabold">21/10</span>
                                            </p>
                                            <p>
                                                4. Ngày kết thúc hiệu lực thẻ:{" "}
                                                <span className="font-extrabold">06/30</span>
                                            </p>
                                        </div>
                                    )}
                                    {phisical1 == 3 && (
                                        <div className="flex flex-col gap-3 w-full h-[164px] font-roboto text-[18px] font-normal leading-8 text-okuro-body-color">
                                            <p>1. Chữ ký của chủ thẻ</p>
                                            <p>2. Mã QR hướng dẫn sử dụng thẻ</p>
                                            <p>3. Giá trị khi sử dụng thẻ</p>
                                            <p>4. Thông tin liên hệ</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Phisical2" className="flex justify-center items-center  h-full w-full ">
                        <div className="z-20 flex  rounded-xl w-[1178px] h-[581px]  items-center justify-center overflow-y-hidden">
                            <div className="flex w-[1178px] gap-[52px] h-[450px] overflow-y-hidden">
                                <div className="flex flex-col gap-4 justify-center items-start  w-[460px] h-auto ">
                                    <div className="flex justify-start items-center">
                                        <p className="font-roboto text-[30px] font-bold leading-[48px]">
                                            <span className="text-okuro-name">OKURO</span>
                                            <span className="text-okuro-bank"> x VietinBank</span>
                                        </p>
                                    </div>
                                    <div className="flex gap-[30px] h-[52px] w-full ">
                                        <div
                                            className={clsx(
                                                "flex      w-[52px] h-[52px] bg-no-repeat  items-center justify-center cursor-pointer rounded-lg transition-all",
                                                {
                                                    " bg-[url('../../../phisicalxanh11.png')]": phisical2 == 1,
                                                    " bg-[url('../../../phisicaltrang11.png')]": phisical2 != 1,
                                                }
                                            )}
                                            onClick={() => {
                                                setPhisical2(1);
                                            }}
                                        ></div>

                                        <div
                                            className={clsx(
                                                "flex   bg-contain w-[52px] h-[52px] bg-no-repeat  opacity-100   items-center justify-center cursor-pointer rounded-lg transition-all",
                                                {
                                                    " bg-[url('../../../phisicalxanh12.png')]": phisical2 == 2,
                                                    " bg-[url('../../../phisicaltrang12.png')]": phisical2 != 2,
                                                }
                                            )}
                                            onClick={() => {
                                                setPhisical2(2);
                                            }}
                                        ></div>
                                        <div
                                            className={clsx(
                                                "flex   bg-contain w-[52px] h-[52px] bg-no-repeat  opacity-100   items-center justify-center cursor-pointer rounded-lg transition-all",
                                                {
                                                    " bg-[url('../../../phisicalxanh13.png')]": phisical2 == 3,
                                                    " bg-[url('../../../phisicaltrang13.png')]": phisical2 != 3,
                                                }
                                            )}
                                            onClick={() => {
                                                setPhisical2(3);
                                            }}
                                        ></div>
                                    </div>
                                    {phisical2 == 1 && (
                                        <div className="flex flex-col gap-3 w-full h-[164px] font-roboto text-[18px] font-normal leading-8 text-okuro-body-color">
                                            <p>
                                                Ngân hàng liên kết: <span className="font-extrabold">SaigonBank</span>
                                            </p>
                                            <p>
                                                Nơi áp dụng thẻ:
                                                <span className="font-extrabold">Bệnh viện Lê Văn Thịnh</span>
                                            </p>
                                            <p>
                                                Quyền lợi:{" "}
                                                <span className="font-extrabold">
                                                    Miễn phí cho lần cấp thẻ đầu tiên
                                                </span>
                                            </p>
                                        </div>
                                    )}
                                    {phisical2 == 2 && (
                                        <div className="flex flex-col gap-3 w-full h-[164px] font-roboto text-[18px] font-normal leading-8 text-okuro-body-color">
                                            <p>1. Chip điện tử</p>
                                            <p>
                                                2. Số thẻ: <span className="font-extrabold">7907 5221 0001</span>
                                            </p>
                                            <p>
                                                3. Ngày bắt đầu hiệu lực thẻ:
                                                <span className="font-extrabold"> 06/30</span>
                                            </p>
                                        </div>
                                    )}
                                    {phisical2 == 3 && (
                                        <div className="flex flex-col gap-3 w-full h-[164px] font-roboto text-[18px] font-normal leading-8 text-okuro-body-color">
                                            <p>1. Chữ ký của chủ thẻ</p>
                                            <p>2. Mã QR hướng dẫn sử dụng thẻ</p>
                                            <p>3. Giá trị khi sử dụng thẻ</p>
                                            <p>4. Thông tin liên hệ</p>
                                        </div>
                                    )}
                                </div>{" "}
                                <div className=" overflow-hidden">
                                    <AnimatePresence>
                                        {phisical2 == 1 && (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../phisical21.png"
                                                alt=""
                                                className="min-w-[666px] w-[666x] h-[443px] overflow-hidden hover:cursor-pointer"
                                            />
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {phisical2 == 2 && (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../phisical22.png"
                                                alt=""
                                                className="min-w-[666px] w-[666x] h-[443px] overflow-hidden hover:cursor-pointer"
                                            />
                                        )}{" "}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {phisical2 == 3 && (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../phisical23.png"
                                                alt=""
                                                className="min-w-[666px] w-[666x] h-[443px]  overflow-hidden hover:cursor-pointer"
                                            />
                                        )}{" "}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-[50px] gap-[72px] items-center  w-full h-auto ">
                <div className="flex flex-col gap-[40px] justify-center  items-center h-full w-full">
                    <div className="flex w-[1390px] h-auto gap-[70px] justify-center  items-center ">
                        <div className="flex flex-col items-center justify-center w-[578px] h-[520px]">
                            <img src="../../../phisical31.png" className="object-contain w-[578px] h-[520px]" alt="" />
                        </div>
                        <div className="flex flex-col  w-[600px] gap-4 h-[410px]">
                            <div className="flex w-[580px] ">
                                <span className="text-[36px] w-full font-roboto font-semibold  leading-[44px]  text-okuro-orange">
                                    Giá trị <span className="text-okuro-color-text">của thẻ vật lý Okuro</span>
                                </span>
                            </div>
                            <div className=" min-w-[108px] w-[108px] min-h-[6px] bg-okuro-orange rounded-lg"></div>

                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <p className="text-okuro-body-color font-roboto text-[18px]  font-normal leading-[30px]">
                                        <span className="font-extrabold">Tiện lợi: </span>
                                        Thẻ có thể sử dụng tại mọi bệnh viện ứng dụng hệ thống công nghệ số hóa Okuro
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <p className="text-okuro-body-color font-roboto text-[18px]  font-normal leading-[30px]">
                                        <span className="font-extrabold"> Dễ dàng: </span>
                                        Mở / Nạp / Hủy thẻ tại bệnh viện hoặc ngân hàng liên kết
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <p className="text-okuro-body-color font-roboto text-[18px]  font-normal leading-[30px]">
                                        <span className="font-extrabold"> Bảo mật: </span>
                                        Đảm bảo thông tin được bảo mật và lưu giữ lâu dài
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <p className="text-okuro-body-color font-roboto text-[18px]  font-normal leading-[30px]">
                                        <span className="font-extrabold"> Linh hoạt: </span>
                                        Thanh toán hóa mọi chi phí khám chữa bệnh an toàn, tiết kiệm thời gian
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-[50px] gap-[72px] items-center  w-full h-auto ">
                <div className="flex flex-col gap-[40px] justify-center  items-center h-full w-full">
                    <div className="flex w-[1390px] h-auto gap-[70px] justify-center  items-center ">
                        <div className="flex flex-col items-center justify-center w-[578px] h-[520px]">
                            <img src="../../../phisical31.png" className="object-contain w-[578px] h-[520px]" alt="" />
                        </div>
                        <div className="flex flex-col  w-[600px] gap-4 h-[410px]">
                            <div className="flex w-[580px] ">
                                <span className="text-[36px] w-full font-roboto font-semibold  leading-[44px]  text-okuro-orange">
                                    Giá trị <span className="text-okuro-color-text">của thẻ vật lý Okuro</span>
                                </span>
                            </div>
                            <div className=" min-w-[108px] w-[108px] min-h-[6px] bg-okuro-orange rounded-lg"></div>

                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <p className="text-okuro-body-color font-roboto text-[18px]  font-normal leading-[30px]">
                                        <span className="font-extrabold">Tiện lợi: </span>
                                        Thẻ có thể sử dụng tại mọi bệnh viện ứng dụng hệ thống công nghệ số hóa Okuro
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <p className="text-okuro-body-color font-roboto text-[18px]  font-normal leading-[30px]">
                                        <span className="font-extrabold"> Dễ dàng: </span>
                                        Mở / Nạp / Hủy thẻ tại bệnh viện hoặc ngân hàng liên kết
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <p className="text-okuro-body-color font-roboto text-[18px]  font-normal leading-[30px]">
                                        <span className="font-extrabold"> Bảo mật: </span>
                                        Đảm bảo thông tin được bảo mật và lưu giữ lâu dài
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <p className="text-okuro-body-color font-roboto text-[18px]  font-normal leading-[30px]">
                                        <span className="font-extrabold"> Linh hoạt: </span>
                                        Thanh toán hóa mọi chi phí khám chữa bệnh an toàn, tiết kiệm thời gian
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Contact />
            <Footer />
        </motion.div>
    );
}

export default PhisicalCard;

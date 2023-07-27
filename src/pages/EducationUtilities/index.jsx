import Contact from "../../components/CustomerContact";
import Footer from "../../components/CustomerFooter";
import { Carousel, IconButton, tabs } from "@material-tailwind/react";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Pagination from "../../components/Pagination";
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
        scale: 0,
        transition: { delay: 2 },
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { delay: 0.5 },
    },
    trans: { delay: 2, duration: 20 },
    exit: { scale: 0.5, opacity: 0, transition: { delay: 0.2 } },
};

function Utilities() {
    const minMobile = useMediaQuery("(min-width:200px)");
    const maxMobile = useMediaQuery("(max-width:1000px)");
    let isMobile = false;
    minMobile && maxMobile ? (isMobile = true) : (isMobile = false);

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

    const [isSelectedTab, setIsSelectedTab] = useState(1);
    return (
        <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between h-full"
        >
            <div
                id="Slider"
                className="z-20 flex justify-center mb-10 h-auto w-full mobile:px-4 mobile:py-4 mobile:overflow-hidden mobile:bg-okuro-background"
            >
                <div
                    id="background"
                    className="absolute h-[600px] w-full bg-okuro-background desktop:h-[550px] pc:h-[600px] myscreen:h-[650px] mobile:hidden overflow-x-hidden"
                >
                    <div className="h-[305px] w-[305px]  rotate-45  rounded-[60px] left-[0px] absolute -translate-x-[80%] top-[53%] -translate-y-1/2 bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                    <div className="h-[305px] w-[305px]  rotate-45  rounded-[60px] right-[0px] absolute translate-x-[80%] top-[53%] -translate-y-1/2 bg-gradient-to-l from-okuro-color-text to-okuro-primary"></div>
                </div>
                {isMobile ? (
                    <Pagination></Pagination>
                ) : (
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
                        <Pagination></Pagination>
                        <Pagination></Pagination>
                        <Pagination></Pagination>
                        <Pagination></Pagination>
                        <Pagination></Pagination>
                    </Carousel>
                )}
            </div>

            <div className="h-[1000px] w-full  mobile:h-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex h-[70px]  w-full items-center justify-center">
                        <p className="text-okuro-color-text capitalize text-center font-roboto text-[24px] font-[900] leading-[32px]">
                            <span className="text-okuro-orange">Tính năng </span>
                            ứng dụng Okuro
                        </p>
                    </div>
                    {isMobile ? (
                        <div className="flex flex-col gap-6 h-full w-full px-4">
                            <div className="flex flex-wrap h-auto w-auto items-center justify-center gap-y-4 gap-x-1">
                                {TABS[isLanguage.id].map((tab, i) => (
                                    <div
                                        className={clsx(
                                            "flex flex-col items-center justify-start  w-[110px] h-[128px] bg-okuro-background-contact rounded-[20px] hover:cursor-pointer",
                                            {
                                                " border-okuro-orange border-2": isSelectedTab == i,
                                            }
                                        )}
                                        onClick={() => setIsSelectedTab(i)}
                                    >
                                        <div className="flex flex-col  w-[110px] gap-[10px] h-[128px] items-center justify-start py-3">
                                            <img
                                                src={`../../../tab${i + 1}.png`}
                                                className="h-[60px] w-[60px] "
                                                alt=""
                                            />
                                            <span
                                                className={clsx(
                                                    "text-[14px] font-light font-roboto px-[8px]  text-center text-okuro-body-color leading-tight",
                                                    {
                                                        "font-medium text-okuro-web-text": isSelectedTab == i,
                                                    }
                                                )}
                                            >
                                                {console.log("day la ", i, tab)}
                                                {tab.title}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <AnimatePresence>
                                {isSelectedTab == 0 && (
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        exit="exit"
                                        className="flex justify-center h-auto mobile:py-6"
                                    >
                                        <div className="flex w-full   h-auto p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-8 mobile:">
                                            <div className="flex flex-col items-center justify-center w-auto h-auto gap-8">
                                                <div
                                                    id="tabtitle1"
                                                    className="flex items-center justify-center w-[340px] min-w-[340px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle1.png')] bg-contain bg-no-repeat "
                                                >
                                                    <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                        Mạng xã hội chuyên biệt
                                                    </p>
                                                </div>
                                                <img
                                                    src="../../../imgtab1.png"
                                                    className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-col gap-4 justify-start items-start h-auto w-full px-3">
                                                <div id="tabcontent1" className="h-full w-full">
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Mạng lưới kết nối{" "}
                                                            <span className="text-okuro-web-text">
                                                                thông tin giá trị và
                                                            </span>{" "}
                                                            tương tác đa chiều
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Rút ngắn khoảng cách{" "}
                                                            <span className="text-okuro-web-text">
                                                                giữa nhà trường với phụ huynh qua các chia sẻ giá trị,
                                                                thông tin quan trọng
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Không gian chia sẻ{" "}
                                                            <span className="text-okuro-web-text">
                                                                giữa phụ huynh trong hành trình nuôi dạy con khỏe mạnh
                                                                thông minh
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Lưu giữ những khoảnh khắc{" "}
                                                            <span className="text-okuro-web-text">
                                                                quý giá trong hành trình phát triển toàn diện của học
                                                                sinh
                                                            </span>
                                                        </span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {isSelectedTab == 1 && (
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        exit="exit"
                                        className="flex justify-center h-auto mobile:py-6"
                                    >
                                        <div className="flex w-full   h-auto p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-8 mobile:">
                                            <div className="flex flex-col items-center justify-center w-auto h-auto gap-8">
                                                <div
                                                    id="tabtitle1"
                                                    className="flex items-center justify-center w-[315px] min-w-[315px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle2.png')] bg-contain bg-no-repeat "
                                                >
                                                    <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                        Tuyển sinh trực tuyến
                                                    </p>
                                                </div>
                                                <img
                                                    src="../../../imgtab2.png"
                                                    className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-col gap-4 justify-start items-start h-auto w-full px-3">
                                                <div id="tabcontent1" className="h-full w-full">
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Tối ưu hóa{" "}
                                                            <span className="text-okuro-web-text">
                                                                hoạt động tuyển sinh thông qua ứng dụng Okuro
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Hệ thống lưu trữ{" "}
                                                            <span className="text-okuro-web-text">
                                                                thông tin và quản lý hồ sơ hiện đại
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Đảm bảo an toàn{" "}
                                                            <span className="text-okuro-web-text">
                                                                thông tin, bảo mật dữ liệu lưu hành trong hệ thống
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Lưu giữ những khoảnh khắc{" "}
                                                            <span className="text-okuro-web-text">
                                                                quý giá trong hành trình phát triển toàn diện của học
                                                                sinh
                                                            </span>
                                                        </span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {isSelectedTab == 2 && (
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        exit="exit"
                                        className="flex justify-center h-auto mobile:py-6"
                                    >
                                        <div className="flex w-full   h-auto p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-8 mobile:">
                                            <div className="flex flex-col items-center justify-center w-auto h-auto gap-8">
                                                <div
                                                    id="tabtitle1"
                                                    className="flex items-center justify-center w-[280px] min-w-[280px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle3.png')] bg-contain bg-no-repeat "
                                                >
                                                    <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                        Thông tin học sinh
                                                    </p>
                                                </div>
                                                <img
                                                    src="../../../imgtab3.png"
                                                    className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-col gap-4 justify-start items-start h-auto w-full px-3">
                                                <div id="tabcontent1" className="h-full w-full">
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Hệ thống lưu trữ{" "}
                                                            <span className="text-okuro-web-text">
                                                                thông tin và quản lý hồ sơ hiện đại
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Tổng hợp và sắp xếp{" "}
                                                            <span className="text-okuro-web-text">
                                                                các trường thông tin tối ưu
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Đảm bảo an toàn{" "}
                                                            <span className="text-okuro-web-text">
                                                                thông tin, bảo mật dữ liệu lưu hành trong hệ thống
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li></li>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {isSelectedTab == 3 && (
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        exit="exit"
                                        className="flex justify-center h-auto py-6"
                                    >
                                        <div className="flex w-full   h-auto p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-8 mobile:">
                                            <div className="flex flex-col items-center justify-center w-auto h-auto gap-8">
                                                <div
                                                    id="tabtitle1"
                                                    className="flex items-center justify-center w-[241px] min-w-[241px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle4.png')] bg-contain bg-no-repeat "
                                                >
                                                    <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                        Thời khóa biểu
                                                    </p>
                                                </div>
                                                <img
                                                    src="../../../imgtab4.png"
                                                    className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-col gap-4 justify-start items-start h-auto w-full px-3">
                                                <div id="tabcontent1" className="h-full w-full">
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Quản lý và cập nhật{" "}
                                                            <span className="text-okuro-web-text">
                                                                liên tục nội dung chương trình học theo từng giai đoạn
                                                                cụ thể
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Hệ thống thông báo tự động{" "}
                                                            <span className="text-okuro-web-text">thông minh</span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Giao diện hiển thị{" "}
                                                            <span className="text-okuro-web-text">
                                                                thân thiện với người dùng (phụ huynh - học sinh - nhà
                                                                trường)
                                                            </span>
                                                        </span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {isSelectedTab == 4 && (
                                    <Carousel
                                        className="h-auto py-6 pt-[98px] overflow-hidden"
                                        prevArrow={({ handlePrev, activeIndex }) => (
                                            <IconButton
                                                variant="text"
                                                color="white"
                                                size="lg"
                                                onClick={handlePrev}
                                                className={clsx(
                                                    "bg-okuro-primary hover:bg-okuro-primary rounded-[100%]  !absolute top-8 -translate-y-2/4 !left-3",
                                                    {
                                                        hidden: activeIndex == 0,
                                                    }
                                                )}
                                            >
                                                <span>
                                                    <i className="fa fa-angle-left"></i>
                                                </span>
                                            </IconButton>
                                        )}
                                        nextArrow={({ handleNext, activeIndex }) => (
                                            <IconButton
                                                variant="text"
                                                color="white"
                                                size="lg"
                                                onClick={handleNext}
                                                className={clsx(
                                                    "bg-okuro-primary hover:bg-okuro-primary rounded-[100%] !absolute top-8 -translate-y-2/4 !right-3",
                                                    {
                                                        hidden: activeIndex == 1,
                                                    }
                                                )}
                                            >
                                                <span>
                                                    <i className="fa fa-angle-right"></i>
                                                </span>
                                            </IconButton>
                                        )}
                                        navigation={({ setActiveIndex, activeIndex, length }) => (
                                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                                {new Array(length).fill("").map((_, i) => (
                                                    <span
                                                        key={i}
                                                        className={`block h-1 cursor-pointer rounded-2xl  bg-okuro-primary transition-all  ${
                                                            activeIndex === i ? " w-8" : " w-4"
                                                        }`}
                                                        onClick={() => setActiveIndex(0)}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    >
                                        <div className="flex justify-center   h-auto w-full ">
                                            <div className="flex flex-col w-full h-auto">
                                                <div className="flex flex-col items-center justify-center w-auto h-auto gap-8">
                                                    <div
                                                        id="tabtitle1"
                                                        className="flex items-center justify-center w-[280px] min-w-[280px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle5.png')] bg-contain bg-no-repeat "
                                                    >
                                                        <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                            Điểm danh xe bus
                                                        </p>
                                                    </div>
                                                    <img
                                                        src="../../../imgtab5.png"
                                                        className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-4 justify-center items-center h-full w-full px-3">
                                                    <div id="tabcontent1" className="h-full w-full">
                                                        <li>
                                                            <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                                Triển khai và quản lý{" "}
                                                                <span className="text-okuro-web-text">
                                                                    thông tin xuyên suốt hành trình đưa đón học sinh
                                                                </span>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                                Hệ thống định vị{" "}
                                                                <span className="text-okuro-web-text">
                                                                    lộ trình di chuyển theo thời gian thực
                                                                </span>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                                Hệ thống lưu trữ{" "}
                                                                <span className="text-okuro-web-text">
                                                                    thông tin và quản lý hồ sơ hiện đại
                                                                </span>
                                                            </span>
                                                        </li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center   h-auto w-full ">
                                            <div className="flex flex-col w-full h-auto">
                                                <div className="flex flex-col items-center justify-center w-auto h-auto gap-8">
                                                    <div
                                                        id="tabtitle1"
                                                        className="flex items-center justify-center w-[344px] min-w-[344px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle52.png')] bg-contain bg-no-repeat "
                                                    >
                                                        <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                            Thiết bị điểm danh xe bus
                                                        </p>
                                                    </div>
                                                    <img
                                                        src="../../../imgtab52.png"
                                                        className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-4 justify-center items-center h-full w-full px-3">
                                                    <div id="tabcontent1" className="h-full w-full">
                                                        <li>
                                                            <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                                <span className="text-okuro-web-text">
                                                                    Điểm danh qua phương thức{" "}
                                                                </span>
                                                                chạm thẻ thông minh Okuro
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                                Triển khai lắp đặt{" "}
                                                                <span className="text-okuro-web-text">
                                                                    trên mọi phương tiện đưa đón học sinh
                                                                </span>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                                Hệ thống quản lý và thông báo tự động theo thời gian
                                                                thực{" "}
                                                                <span className="text-okuro-web-text">
                                                                    qua ứng dụng Okuro
                                                                </span>
                                                            </span>
                                                        </li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel>
                                )}
                            </AnimatePresence>{" "}
                            <AnimatePresence>
                                {isSelectedTab == 5 && (
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        exit="exit"
                                        className="flex justify-center h-auto mobile:py-6"
                                    >
                                        <div className="flex w-full   h-auto p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-8 mobile:">
                                            <div className="flex flex-col items-center justify-center w-auto h-auto gap-8">
                                                <div
                                                    id="tabtitle1"
                                                    className="flex items-center justify-center w-[196px] min-w-[196px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle6.png')] bg-contain bg-no-repeat "
                                                >
                                                    <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                        Giáo viên
                                                    </p>
                                                </div>
                                                <img
                                                    src="../../../imgtab6.png"
                                                    className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-col gap-4 justify-start items-start h-auto w-full px-3">
                                                <div id="tabcontent1" className="h-full w-full">
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Đảm bảo thông tin{" "}
                                                            <span className="text-okuro-web-text">
                                                                của giáo viên minh bạch trong phạm vi nhà trường
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Đảm bảo an toàn{" "}
                                                            <span className="text-okuro-web-text">
                                                                thông tin, bảo mật dữ liệu lưu hành trong hệ thống
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Thuận tiện kết nối{" "}
                                                            <span className="text-okuro-web-text">
                                                                liên lạc giữa phụ huynh với giáo viên, nhà trường
                                                            </span>
                                                        </span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {isSelectedTab == 6 && (
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        exit="exit"
                                        className="flex justify-center h-auto mobile:py-6"
                                    >
                                        <div className="flex w-full   h-auto p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-8 mobile:">
                                            <div className="flex flex-col items-center justify-center w-auto h-auto gap-8">
                                                <div
                                                    id="tabtitle1"
                                                    className="flex items-center justify-center w-[185px] min-w-[185px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle7.png')] bg-contain bg-no-repeat "
                                                >
                                                    <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                        Thực đơn
                                                    </p>
                                                </div>
                                                <img
                                                    src="../../../imgtab7.png"
                                                    className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-col gap-4 justify-start items-start h-auto w-full px-3">
                                                <div id="tabcontent1" className="h-full w-full">
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Cập nhật thông tin{" "}
                                                            <span className="text-okuro-web-text">
                                                                thời gian và chất lượng bữa ăn hàng ngày: bữa sáng, bữa
                                                                trưa và bữa phụ
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Hệ thống hiển thị{" "}
                                                            <span className="text-okuro-web-text">
                                                                thông tin bao gồm hình ảnh thực tế
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Thuận tiện kết nối{" "}
                                                            <span className="text-okuro-web-text">
                                                                liên lạc giữa phụ huynh với giáo viên, nhà trường
                                                            </span>
                                                        </span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {isSelectedTab == 7 && (
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        exit="exit"
                                        className="flex justify-center h-auto mobile:py-6"
                                    >
                                        <div className="flex w-full   h-auto p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-8 mobile:">
                                            <div className="flex flex-col items-center justify-center w-auto h-auto gap-8">
                                                <div
                                                    id="tabtitle1"
                                                    className="flex items-center justify-center w-[286px] min-w-[286px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle8.png')] bg-contain bg-no-repeat "
                                                >
                                                    <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                        Nhật ký hoạt động
                                                    </p>
                                                </div>
                                                <img
                                                    src="../../../imgtab8.png"
                                                    className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-col gap-4 justify-start items-start h-auto w-full px-3">
                                                <div id="tabcontent1" className="h-full w-full">
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Cập nhật hoạt động{" "}
                                                            <span className="text-okuro-web-text">
                                                                theo thời gian thực của học sinh trong suốt quá trình
                                                                sinh hoạt tại trường
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Cá nhân hóa{" "}
                                                            <span className="text-okuro-web-text">
                                                                thông tin hiển thị
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Phân loại thông tin{" "}
                                                            <span className="text-okuro-web-text">
                                                                theo hoạt động cần chú trọng
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Lưu giữ những khoảnh khắc{" "}
                                                            <span className="text-okuro-web-text">
                                                                quý giá trong hành trình phát triển toàn diện của học
                                                                sinh
                                                            </span>
                                                        </span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {isSelectedTab == 8 && (
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        exit="exit"
                                        className="flex justify-center h-auto mobile:py-6"
                                    >
                                        <div className="flex w-full   h-auto p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-8 mobile:">
                                            <div className="flex flex-col items-center justify-center w-auto h-auto gap-8">
                                                <div
                                                    id="tabtitle1"
                                                    className="flex items-center justify-center w-[286px] min-w-[286px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle9.png')] bg-contain bg-no-repeat "
                                                >
                                                    <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                        Điểm danh lớp học
                                                    </p>
                                                </div>
                                                <img
                                                    src="../../../imgtab9.png"
                                                    className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-col gap-4 justify-start items-start h-auto w-full px-3">
                                                <div id="tabcontent1" className="h-full w-full">
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Giao diện hiển thị{" "}
                                                            <span className="text-okuro-web-text">
                                                                {" "}
                                                                dưới định dạng lịch cụ thể
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Hệ thống{" "}
                                                            <span className="text-okuro-web-text">
                                                                quản lý, thống kê và đánh giá tình hình hoạt động của
                                                                các lớp học
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Chủ động cập nhật{" "}
                                                            <span className="text-okuro-web-text">
                                                                và theo dõi số ngày nghỉ, đi học muộn, ...
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Tiết kiệm thời gian{" "}
                                                            <span className="text-okuro-web-text">
                                                                cho giáo viên và phụ huynh trong việc quản lý quá trình
                                                                học tập của học sinh
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Hệ thống thông báo tự động theo thời gian thực{" "}
                                                            <span className="text-okuro-web-text">
                                                                qua ứng dụng Okuro
                                                            </span>
                                                        </span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {isSelectedTab == 9 && (
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        exit="exit"
                                        className="flex justify-center h-auto mobile:py-6"
                                    >
                                        <div className="flex w-full   h-auto p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-8 mobile:">
                                            <div className="flex flex-col items-center justify-center w-auto h-auto gap-8">
                                                <div
                                                    id="tabtitle1"
                                                    className="flex items-center justify-center w-[177px] min-w-[177px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle10.png')] bg-contain bg-no-repeat "
                                                >
                                                    <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                        Lời nhắn
                                                    </p>
                                                </div>
                                                <img
                                                    src="../../../imgtab10.png"
                                                    className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-col gap-4 justify-start items-start h-auto w-full px-3">
                                                <div id="tabcontent1" className="h-full w-full ">
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Giao diện hiển thị{" "}
                                                            <span className="text-okuro-web-text">
                                                                {" "}
                                                                dưới dạng To-Do-List
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Rút ngắn khoảng cách{" "}
                                                            <span className="text-okuro-web-text">
                                                                giữa nhà trường với phụ huynh qua các thông tin quan
                                                                trọng
                                                            </span>
                                                        </span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {isSelectedTab == 10 && (
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        exit="exit"
                                        className="flex justify-center h-auto mobile:py-6"
                                    >
                                        <div className="flex w-full   h-auto p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-8 mobile:">
                                            <div className="flex flex-col items-center justify-center w-auto h-auto gap-8">
                                                <div
                                                    id="tabtitle1"
                                                    className="flex items-center justify-center w-[242px] min-w-[242px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle11.png')] bg-contain bg-no-repeat "
                                                >
                                                    <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                        Kết quả học tập
                                                    </p>
                                                </div>
                                                <img
                                                    src="../../../imgtab11.png"
                                                    className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-col gap-4 justify-start items-start h-auto w-full px-3">
                                                <div id="tabcontent1" className="h-full w-full ">
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Quản lý và tra cứu{" "}
                                                            <span className="text-okuro-web-text">
                                                                thông tin kết quả xuyên suốt quá trình học tập
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Hệ thống lưu trữ{" "}
                                                            <span className="text-okuro-web-text">
                                                                thông tin và quản lý hồ sơ chi tiết
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Ghi nhận và cập nhật{" "}
                                                            <span className="text-okuro-web-text">
                                                                liên tục kết quả học tập, rèn luyện
                                                            </span>
                                                        </span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {isSelectedTab == 11 && (
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        exit="exit"
                                        className="flex justify-center h-auto mobile:py-6"
                                    >
                                        <div className="flex w-full   h-auto p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-8 mobile:">
                                            <div className="flex flex-col items-center justify-center w-auto h-auto gap-8">
                                                <div
                                                    id="tabtitle1"
                                                    className="flex items-center justify-center w-[205px] min-w-[205px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle12.png')] bg-contain bg-no-repeat "
                                                >
                                                    <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                        Thanh toán
                                                    </p>
                                                </div>
                                                <img
                                                    src="../../../imgtab12.png"
                                                    className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-col gap-4 justify-start items-start h-auto w-full px-3">
                                                <div id="tabcontent1" className="h-full w-full ">
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Cập nhật và thông báo tự động{" "}
                                                            <span className="text-okuro-web-text">
                                                                đầy đủ thông tin học phí và các chi phí khác
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Kết nối thông tin hai chiều{" "}
                                                            <span className="text-okuro-web-text">
                                                                xuyên suốt giữa nhà trường với phụ huynh
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            <span className="text-okuro-web-text">
                                                                Hệ thống lưu trữ{" "}
                                                            </span>{" "}
                                                            hóa đơn điện tử
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            <span className="text-okuro-web-text">
                                                                Thanh toán trực tuyến qua hoặc kiosk tại trường với thẻ{" "}
                                                            </span>
                                                            ứng dụng Okuro{" "}
                                                            <span className="text-okuro-web-text">
                                                                hoặc kiosk tại trường với thẻ{" "}
                                                            </span>
                                                            vật lý Okuro
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-base font-roboto font-normal leading-7 text-okuro-orange">
                                                            Giảm áp lực{" "}
                                                            <span className="text-okuro-web-text">
                                                                phòng tài chính, tiết kiệm thời gian và chi phí tối ưu
                                                            </span>
                                                        </span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <Carousel
                            className="rounded-xl w-[1500px]  h-[1000px] mb-20"
                            loop={true}
                            prevArrow={({ handlePrev }) => (
                                <IconButton
                                    variant="text"
                                    color="white"
                                    size="lg"
                                    onClick={handlePrev}
                                    className=" z-50 bg-okuro-primary rounded-[100%] !absolute top-[10%] hover:bg-okuro-primary -translate-y-2/4 left-[10px] "
                                >
                                    <span>
                                        <i className="fa fa-angle-left"></i>
                                    </span>
                                </IconButton>
                            )}
                            nextArrow={({ handleNext }) => (
                                <IconButton
                                    variant="text"
                                    color="white"
                                    size="lg"
                                    onClick={handleNext}
                                    className=" z-50 bg-okuro-primary  rounded-[100%] !absolute top-[10%] hover:bg-okuro-primary -translate-y-2/4 !right-2"
                                >
                                    <span>
                                        <i className="fa fa-angle-right"></i>
                                    </span>
                                </IconButton>
                            )}
                            navigation={({ setActiveIndex, activeIndex, length }) => (
                                <div className="absolute flex items-center justify-center left-[50%]  -translate-x-[50%] overflow-hidden w-[1271px] h-[200px] bg-white ">
                                    <div
                                        className={clsx(
                                            "absolute   left-1/2 bg-white  -translate-x-[50%] z-50 flex w-[1271px] gap-[24px]",
                                            {
                                                "-translate-x-[64.55%]": activeIndex == 7,
                                                "-translate-x-[79.11%]": activeIndex == 8,
                                                "-translate-x-[93.66%]": activeIndex == 9,
                                                "-translate-x-[1375px]": activeIndex == 10,
                                                "-translate-x-[1560px]": activeIndex == 11,
                                            }
                                        )}
                                    >
                                        {TABS[isLanguage.id].map((tab, i) => (
                                            <div
                                                className={clsx(
                                                    "flex flex-col items-center justify-between  w-[161px] h-[182px] bg-okuro-background-contact rounded-[20px] hover:cursor-pointer",
                                                    {
                                                        " border-okuro-orange border-2": activeIndex == i,
                                                    }
                                                )}
                                                onClick={() => setActiveIndex(i)}
                                            >
                                                <div className="flex flex-col min-w-[100px] w-[161px] items-center  my-3 desktop:my-2 pc:my-2  justify-center">
                                                    <img
                                                        src={`../../../tab${i + 1}.png`}
                                                        className="h-[100px] w-[100px] "
                                                        alt=""
                                                    />
                                                    <span
                                                        className={clsx(
                                                            "text-lg font-light font-roboto w-[70%]   text-center text-okuro-body-color",
                                                            {
                                                                "font-medium text-okuro-web-text": activeIndex == i,
                                                            }
                                                        )}
                                                    >
                                                        {console.log("day la ", i, tab)}
                                                        {tab.title}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        >
                            <div className="flex justify-center   h-[900px] pt-[200px]  ">
                                <div className="flex w-full   h-[642px] p-20 gap-20 mobile:p-0 mobile:gap-0 mobile:">
                                    <div className="flex flex-col items-center jautocenter w-[400px] h-[482px]">
                                        <img
                                            src="../../../imgtab1.png"
                                            className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                        <div
                                            id="tabtitle1"
                                            className="flex items-center justify-center w-[340px] min-w-[340px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle1.png')] bg-contain bg-no-repeat "
                                        >
                                            <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                Mạng xã hội chuyên biệt
                                            </p>
                                        </div>
                                        <div
                                            id="tabcontent1"
                                            className="h-full w-full bg-[url('../../../bgtab1.png')]  bg-right-bottom bg-no-repeat"
                                        >
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Mạng lưới kết nối{" "}
                                                    <span className="text-okuro-web-text">thông tin giá trị và</span>{" "}
                                                    tương tác đa chiều
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Rút ngắn khoảng cách{" "}
                                                    <span className="text-okuro-web-text">
                                                        giữa nhà trường với phụ huynh qua các chia sẻ giá trị, thông tin
                                                        quan trọng
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Không gian chia sẻ{" "}
                                                    <span className="text-okuro-web-text">
                                                        giữa phụ huynh trong hành trình nuôi dạy con khỏe mạnh thông
                                                        minh
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Lưu giữ những khoảnh khắc{" "}
                                                    <span className="text-okuro-web-text">
                                                        quý giá trong hành trình phát triển toàn diện của học sinh
                                                    </span>
                                                </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center h-[900px] pt-[200px] mobile:pt-6">
                                <div className="flex w-full   h-[642px] p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-0 mobile:">
                                    <div className="flex flex-col items-center justify-center w-auto h-[482px]">
                                        <img
                                            src="../../../imgtab2.png"
                                            className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                        <div
                                            id="tabtitle1"
                                            className="flex items-center justify-center w-[315px] min-w-[315px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle2.png')] bg-contain bg-no-repeat "
                                        >
                                            <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                Tuyển sinh trực tuyến
                                            </p>
                                        </div>
                                        <div
                                            id="tabcontent1"
                                            className="h-full w-full bg-[url('../../../bgtab2.png')]  bg-right-bottom bg-no-repeat"
                                        >
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Tối ưu hóa{" "}
                                                    <span className="text-okuro-web-text">
                                                        hoạt động tuyển sinh thông qua ứng dụng Okuro
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Hệ thống lưu trữ{" "}
                                                    <span className="text-okuro-web-text">
                                                        thông tin và quản lý hồ sơ hiện đại
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Đảm bảo an toàn{" "}
                                                    <span className="text-okuro-web-text">
                                                        thông tin, bảo mật dữ liệu lưu hành trong hệ thống
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Lưu giữ những khoảnh khắc{" "}
                                                    <span className="text-okuro-web-text">
                                                        quý giá trong hành trình phát triển toàn diện của học sinh
                                                    </span>
                                                </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center h-[900px] pt-[200px] mobile:pt-6">
                                <div className="flex w-full   h-[642px] p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-0 mobile:">
                                    <div className="flex flex-col items-center justify-center w-auto h-[482px]">
                                        <img
                                            src="../../../imgtab3.png"
                                            className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                        <div
                                            id="tabtitle1"
                                            className="flex items-center justify-center w-[280px] min-w-[280px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle3.png')] bg-contain bg-no-repeat "
                                        >
                                            <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                Thông tin học sinh
                                            </p>
                                        </div>
                                        <div
                                            id="tabcontent1"
                                            className="h-full w-full bg-[url('../../../bgtab3.png')]  bg-right-bottom bg-no-repeat"
                                        >
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Hệ thống lưu trữ{" "}
                                                    <span className="text-okuro-web-text">
                                                        thông tin và quản lý hồ sơ hiện đại
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Tổng hợp và sắp xếp{" "}
                                                    <span className="text-okuro-web-text">
                                                        các trường thông tin tối ưu
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Đảm bảo an toàn{" "}
                                                    <span className="text-okuro-web-text">
                                                        thông tin, bảo mật dữ liệu lưu hành trong hệ thống
                                                    </span>
                                                </span>
                                            </li>
                                            <li></li>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center h-[900px] pt-[200px] mobile:pt-6">
                                <div className="flex w-full   h-[642px] p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-0 mobile:">
                                    <div className="flex flex-col items-center justify-center w-auto h-[482px]">
                                        <img
                                            src="../../../imgtab4.png"
                                            className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                        <div
                                            id="tabtitle1"
                                            className="flex items-center justify-center w-[241px] min-w-[241px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle4.png')] bg-contain bg-no-repeat "
                                        >
                                            <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                Thời khóa biểu
                                            </p>
                                        </div>
                                        <div
                                            id="tabcontent1"
                                            className="h-full w-full bg-[url('../../../bgtab4.png')]  bg-right-bottom bg-no-repeat"
                                        >
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Quản lý và cập nhật{" "}
                                                    <span className="text-okuro-web-text">
                                                        liên tục nội dung chương trình học theo từng giai đoạn cụ thể
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Hệ thống thông báo tự động{" "}
                                                    <span className="text-okuro-web-text">thông minh</span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Giao diện hiển thị{" "}
                                                    <span className="text-okuro-web-text">
                                                        thân thiện với người dùng (phụ huynh - học sinh - nhà trường)
                                                    </span>
                                                </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Carousel
                                className="rounded-xl h-[900px] pt-[200px] overflow-hidden"
                                prevArrow={({ handlePrev, activeIndex }) => (
                                    <IconButton
                                        variant="text"
                                        color="white"
                                        size="lg"
                                        onClick={handlePrev}
                                        className={clsx(
                                            "bg-okuro-primary hover:bg-okuro-primary rounded-[100%]  !absolute top-2/4 -translate-y-2/4 !left-3",
                                            {
                                                hidden: activeIndex == 0,
                                            }
                                        )}
                                    >
                                        <span>
                                            <i className="fa fa-angle-left"></i>
                                        </span>
                                    </IconButton>
                                )}
                                nextArrow={({ handleNext, activeIndex }) => (
                                    <IconButton
                                        variant="text"
                                        color="white"
                                        size="lg"
                                        onClick={handleNext}
                                        className={clsx(
                                            "bg-okuro-primary hover:bg-okuro-primary rounded-[100%] !absolute top-2/4 -translate-y-2/4 !right-3",
                                            {
                                                hidden: activeIndex == 1,
                                            }
                                        )}
                                    >
                                        <span>
                                            <i className="fa fa-angle-right"></i>
                                        </span>
                                    </IconButton>
                                )}
                                navigation={({ setActiveIndex, activeIndex, length }) => (
                                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                        {new Array(length).fill("").map((_, i) => (
                                            <span
                                                key={i}
                                                className={`block h-1 cursor-pointer rounded-2xl  bg-okuro-primary transition-all  ${
                                                    activeIndex === i ? " w-8" : " w-4"
                                                }`}
                                                onClick={() => setActiveIndex(0)}
                                            />
                                        ))}
                                    </div>
                                )}
                            >
                                <div className="flex justify-center   h-[900px] ">
                                    <div className="flex w-full   h-[642px] p-20 gap-20 mobile:p-0 mobile:gap-0 mobile:">
                                        <div className="flex flex-col items-center jautocenter w-[400px] h-[482px]">
                                            <img
                                                src="../../../imgtab5.png"
                                                className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                            <div
                                                id="tabtitle1"
                                                className="flex items-center justify-center w-[280px] min-w-[280px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle5.png')] bg-contain bg-no-repeat "
                                            >
                                                <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                    Điểm danh xe bus
                                                </p>
                                            </div>
                                            <div
                                                id="tabcontent1"
                                                className="h-full w-full bg-[url('../../../bgtab5.png')]  bg-right-bottom bg-no-repeat"
                                            >
                                                <li>
                                                    <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                        Triển khai và quản lý{" "}
                                                        <span className="text-okuro-web-text">
                                                            thông tin xuyên suốt hành trình đưa đón học sinh
                                                        </span>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                        Hệ thống định vị{" "}
                                                        <span className="text-okuro-web-text">
                                                            lộ trình di chuyển theo thời gian thực
                                                        </span>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                        Hệ thống lưu trữ{" "}
                                                        <span className="text-okuro-web-text">
                                                            thông tin và quản lý hồ sơ hiện đại
                                                        </span>
                                                    </span>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center   h-[900px] ">
                                    <div className="flex w-full   h-[642px] p-20 gap-20 mobile:p-0 mobile:gap-0 mobile:">
                                        <div className="flex flex-col items-center jautocenter w-[400px] h-[482px]">
                                            <img
                                                src="../../../imgtab52.png"
                                                className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                            <div
                                                id="tabtitle1"
                                                className="flex items-center justify-center w-[344px] min-w-[344px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle52.png')] bg-contain bg-no-repeat "
                                            >
                                                <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                    Thiết bị điểm danh xe bus
                                                </p>
                                            </div>
                                            <div
                                                id="tabcontent1"
                                                className="h-full w-full bg-[url('../../../bgtab5.png')]  bg-right-bottom bg-no-repeat"
                                            >
                                                <li>
                                                    <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                        <span className="text-okuro-web-text">
                                                            Điểm danh qua phương thức{" "}
                                                        </span>
                                                        chạm thẻ thông minh Okuro
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                        Triển khai lắp đặt{" "}
                                                        <span className="text-okuro-web-text">
                                                            trên mọi phương tiện đưa đón học sinh
                                                        </span>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                        Hệ thống quản lý và thông báo tự động theo thời gian thực{" "}
                                                        <span className="text-okuro-web-text">qua ứng dụng Okuro</span>
                                                    </span>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>

                            <div className="flex justify-center h-[900px] pt-[200px] mobile:pt-6">
                                <div className="flex w-full   h-[642px] p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-0 mobile:">
                                    <div className="flex flex-col items-center justify-center w-auto h-[482px]">
                                        <img
                                            src="../../../imgtab6.png"
                                            className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                        <div
                                            id="tabtitle1"
                                            className="flex items-center justify-center w-[196px] min-w-[196px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle6.png')] bg-contain bg-no-repeat "
                                        >
                                            <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                Giáo viên
                                            </p>
                                        </div>
                                        <div
                                            id="tabcontent1"
                                            className="h-full w-full bg-[url('../../../bgtab6.png')]  bg-right-bottom bg-no-repeat"
                                        >
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Đảm bảo thông tin{" "}
                                                    <span className="text-okuro-web-text">
                                                        của giáo viên minh bạch trong phạm vi nhà trường
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Đảm bảo an toàn{" "}
                                                    <span className="text-okuro-web-text">
                                                        thông tin, bảo mật dữ liệu lưu hành trong hệ thống
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Thuận tiện kết nối{" "}
                                                    <span className="text-okuro-web-text">
                                                        liên lạc giữa phụ huynh với giáo viên, nhà trường
                                                    </span>
                                                </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center h-[900px] pt-[200px] mobile:pt-6">
                                <div className="flex w-full   h-[642px] p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-0 mobile:">
                                    <div className="flex flex-col items-center justify-center w-auto h-[482px]">
                                        <img
                                            src="../../../imgtab7.png"
                                            className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                        <div
                                            id="tabtitle1"
                                            className="flex items-center justify-center w-[185px] min-w-[185px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle7.png')] bg-contain bg-no-repeat "
                                        >
                                            <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                Thực đơn
                                            </p>
                                        </div>
                                        <div
                                            id="tabcontent1"
                                            className="h-full w-full bg-[url('../../../bgtab7.png')]  bg-right-bottom bg-no-repeat"
                                        >
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Cập nhật thông tin{" "}
                                                    <span className="text-okuro-web-text">
                                                        thời gian và chất lượng bữa ăn hàng ngày: bữa sáng, bữa trưa và
                                                        bữa phụ
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Hệ thống hiển thị{" "}
                                                    <span className="text-okuro-web-text">
                                                        thông tin bao gồm hình ảnh thực tế
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Thuận tiện kết nối{" "}
                                                    <span className="text-okuro-web-text">
                                                        liên lạc giữa phụ huynh với giáo viên, nhà trường
                                                    </span>
                                                </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center h-[900px] pt-[200px] mobile:pt-6">
                                <div className="flex w-full   h-[642px] p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-0 mobile:">
                                    <div className="flex flex-col items-center justify-center w-auto h-[482px]">
                                        <img
                                            src="../../../imgtab8.png"
                                            className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                        <div
                                            id="tabtitle1"
                                            className="flex items-center justify-center w-[286px] min-w-[286px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle8.png')] bg-contain bg-no-repeat "
                                        >
                                            <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                Nhật ký hoạt động
                                            </p>
                                        </div>
                                        <div
                                            id="tabcontent1"
                                            className="h-full w-full bg-[url('../../../bgtab8.png')]  bg-right-bottom bg-no-repeat"
                                        >
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Cập nhật hoạt động{" "}
                                                    <span className="text-okuro-web-text">
                                                        theo thời gian thực của học sinh trong suốt quá trình sinh hoạt
                                                        tại trường
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Cá nhân hóa{" "}
                                                    <span className="text-okuro-web-text">thông tin hiển thị</span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Phân loại thông tin{" "}
                                                    <span className="text-okuro-web-text">
                                                        theo hoạt động cần chú trọng
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Lưu giữ những khoảnh khắc{" "}
                                                    <span className="text-okuro-web-text">
                                                        quý giá trong hành trình phát triển toàn diện của học sinh
                                                    </span>
                                                </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center h-[900px] pt-[200px] mobile:pt-6">
                                <div className="flex w-full   h-[642px] p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-0 mobile:">
                                    <div className="flex flex-col items-center justify-center w-auto h-[482px]">
                                        <img
                                            src="../../../imgtab9.png"
                                            className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                        <div
                                            id="tabtitle1"
                                            className="flex items-center justify-center w-[286px] min-w-[286px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle9.png')] bg-contain bg-no-repeat "
                                        >
                                            <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                Điểm danh lớp học
                                            </p>
                                        </div>
                                        <div
                                            id="tabcontent1"
                                            className="h-full w-full bg-[url('../../../bgtab9.png')]  bg-right-bottom bg-no-repeat"
                                        >
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Giao diện hiển thị{" "}
                                                    <span className="text-okuro-web-text">
                                                        {" "}
                                                        dưới định dạng lịch cụ thể
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Hệ thống{" "}
                                                    <span className="text-okuro-web-text">
                                                        quản lý, thống kê và đánh giá tình hình hoạt động của các lớp
                                                        học
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Chủ động cập nhật{" "}
                                                    <span className="text-okuro-web-text">
                                                        và theo dõi số ngày nghỉ, đi học muộn, ...
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Tiết kiệm thời gian{" "}
                                                    <span className="text-okuro-web-text">
                                                        cho giáo viên và phụ huynh trong việc quản lý quá trình học tập
                                                        của học sinh
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Hệ thống thông báo tự động theo thời gian thực{" "}
                                                    <span className="text-okuro-web-text">qua ứng dụng Okuro</span>
                                                </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center h-[900px] pt-[200px] mobile:pt-6">
                                <div className="flex w-full   h-[642px] p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-0 mobile:">
                                    <div className="flex flex-col items-center justify-center w-auto h-[482px]">
                                        <img
                                            src="../../../imgtab10.png"
                                            className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                        <div
                                            id="tabtitle1"
                                            className="flex items-center justify-center w-[177px] min-w-[177px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle10.png')] bg-contain bg-no-repeat "
                                        >
                                            <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                Lời nhắn
                                            </p>
                                        </div>
                                        <div
                                            id="tabcontent1"
                                            className="h-full w-full bg-[url('../../../bgtab10.png')]  bg-right-bottom bg-no-repeat"
                                        >
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Giao diện hiển thị{" "}
                                                    <span className="text-okuro-web-text"> dưới dạng To-Do-List</span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Rút ngắn khoảng cách{" "}
                                                    <span className="text-okuro-web-text">
                                                        giữa nhà trường với phụ huynh qua các thông tin quan trọng
                                                    </span>
                                                </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center h-[900px] pt-[200px] mobile:pt-6">
                                <div className="flex w-full   h-[642px] p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-0 mobile:">
                                    <div className="flex flex-col items-center justify-center w-auto h-[482px]">
                                        <img
                                            src="../../../imgtab11.png"
                                            className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                        <div
                                            id="tabtitle1"
                                            className="flex items-center justify-center w-[242px] min-w-[242px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle11.png')] bg-contain bg-no-repeat "
                                        >
                                            <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                Kết quả học tập
                                            </p>
                                        </div>
                                        <div
                                            id="tabcontent1"
                                            className="h-full w-full bg-[url('../../../bgtab11.png')]  bg-right-bottom bg-no-repeat"
                                        >
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Quản lý và tra cứu{" "}
                                                    <span className="text-okuro-web-text">
                                                        thông tin kết quả xuyên suốt quá trình học tập
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Hệ thống lưu trữ{" "}
                                                    <span className="text-okuro-web-text">
                                                        thông tin và quản lý hồ sơ chi tiết
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Ghi nhận và cập nhật{" "}
                                                    <span className="text-okuro-web-text">
                                                        liên tục kết quả học tập, rèn luyện
                                                    </span>
                                                </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center h-[900px] pt-[200px] mobile:pt-6">
                                <div className="flex w-full   h-[642px] p-20 gap-20 mobile:flex-col mobile:p-0 mobile:gap-0 mobile:">
                                    <div className="flex flex-col items-center justify-center w-auto h-[482px]">
                                        <img
                                            src="../../../imgtab12.png"
                                            className="object-contain min-w-[400px] w-[400px] h-full mobile:w-[250px] mobile:h-[351px]"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                        <div
                                            id="tabtitle1"
                                            className="flex items-center justify-center w-[205px] min-w-[205px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle12.png')] bg-contain bg-no-repeat "
                                        >
                                            <p className="text-[24px] font-black align-middle h-[32px]  font-roboto text-white ">
                                                Thanh toán
                                            </p>
                                        </div>
                                        <div
                                            id="tabcontent1"
                                            className="h-full w-full bg-[url('../../../bgtab12.png')]  bg-right-bottom bg-no-repeat"
                                        >
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Cập nhật và thông báo tự động{" "}
                                                    <span className="text-okuro-web-text">
                                                        đầy đủ thông tin học phí và các chi phí khác
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Kết nối thông tin hai chiều{" "}
                                                    <span className="text-okuro-web-text">
                                                        xuyên suốt giữa nhà trường với phụ huynh
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    <span className="text-okuro-web-text">Hệ thống lưu trữ </span> hóa
                                                    đơn điện tử
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    <span className="text-okuro-web-text">
                                                        Thanh toán trực tuyến qua hoặc kiosk tại trường với thẻ{" "}
                                                    </span>
                                                    ứng dụng Okuro{" "}
                                                    <span className="text-okuro-web-text">
                                                        hoặc kiosk tại trường với thẻ{" "}
                                                    </span>
                                                    vật lý Okuro
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                    Giảm áp lực{" "}
                                                    <span className="text-okuro-web-text">
                                                        phòng tài chính, tiết kiệm thời gian và chi phí tối ưu
                                                    </span>
                                                </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    )}
                </div>
            </div>

            <Contact />
            <Footer />
        </motion.div>
    );
}

export default Utilities;

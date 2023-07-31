import Contact from "../../components/CustomerContact";
import Footer from "../../components/CustomerFooter";
import { Carousel, IconButton, tabs } from "@material-tailwind/react";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";
import AboutPagination from "../../components/AboutPagination";
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

const imgVariant = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        transition: { delay: 2 },
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { delay: 0.2, duration: 0.5 },
    },
    trans: { delay: 2, duration: 20 },
    exit: { scale: 0.9, opacity: 0, transition: { delay: 0, duration: 1 } },
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
        scale: 1.1,
        textShadow: "0px 0px 8px rbg(225,225,225)",
        boxShadow: "0px 0px 8px rbg(225,225,225)",
    },
    transition: { duration: 10 },
    exit: {
        x: 100,
    },
};

function AboutUs() {
    const minMobile = useMediaQuery("(min-width:200px)");
    const maxMobile = useMediaQuery("(max-width:1000px)");
    let isMobile = false;
    minMobile && maxMobile ? (isMobile = true) : (isMobile = false);

    const [isLanguage, setIsLanguage] = useState(LANGUAGE[0]);
    const [isContent, setIsContent] = useState(CONTENT[0]);
    const [toggle, setToggle] = useState(false);
    const [signup, setSignup] = useState(true);
    const [showTitle, setShowTitle] = useState(1);
    const [index, setIndex] = useState({ now: 1, prev: 1 });
    function switchLanguage() {
        if (isContent == CONTENT[1]) {
            setIsContent(CONTENT[0]);
        } else {
            setIsContent(CONTENT[1]);
        }
    }
    function nextStep() {
        if (index.now < 3) {
            setIndex({ now: index.now + 1, prev: index.now });
        } else setIndex({ now: 1, prev: index.now });
    }
    function prevStep() {
        if (index.now > 1) {
            setIndex({ now: index.now - 1, prev: index.now });
        } else setIndex({ now: 3, prev: index.now });
    }
    function nextTitle() {
        if (showTitle < 5) {
            setShowTitle(showTitle + 1);
        }
    }
    function prevTitle() {
        if (showTitle > 1) {
            setShowTitle(showTitle - 1);
        }
    }

    function setStep1() {
        if (index.now == 2) {
            prevStep();
        } else if (index.now == 3) {
            nextStep();
        }
    }
    function setStep2() {
        if (index.now == 1) {
            nextStep();
        } else if (index.now == 3) {
            prevStep();
        }
    }
    function setStep3() {
        if (index.now == 2) {
            nextStep();
        } else if (index.now == 1) {
            prevStep();
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
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
                ></div>

                {isMobile ? (
                    <AboutPagination></AboutPagination>
                ) : (
                    <Carousel
                        className="rounded-xl w-[1200px] h-[700px] mb-20 "
                        loop={true}
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handlePrev}
                                className=" bg-white text-okuro-color-text hover:bg-okuro-primary rounded-[100%]   "
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
                                className=" bg-white text-okuro-color-text hover:bg-okuro-primary rounded-[100%] "
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
                                            activeIndex === i ? "bg-okuro-orange w-[32px]" : "bg-okuro-pagination w-4"
                                        }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    >
                        <AboutPagination></AboutPagination>
                        <AboutPagination></AboutPagination>
                        <AboutPagination></AboutPagination>
                        <AboutPagination></AboutPagination>
                        <AboutPagination></AboutPagination>
                    </Carousel>
                )}
            </div>
            <div className="flex flex-col items-center justify-center gap-10 p-20 h-auto w-full   mobile:p-0 mobile:px-4">
                <div className="flex items-center justify-center gap-[60px] h-full w-full mobile:flex-col mobile:gap-[24px] mobile:h-auto mobile:w-auto">
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab rounded-[20px] mobile:gap-6 mobile:p-0 mobile:h-auto mobile:w-auto mobile:max-w-[572px]">
                        <div className=" flex items-cennter justify-center h-auto w-full ">
                            <img
                                src="../../../AboutIcon1.png"
                                className="h-20 w-20 mobile:w-[62px] mobile:h-[62px]"
                                alt=""
                            />
                        </div>
                        <div className="h-[182px] w-full mobile:px-4  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange mobile:text-[20px] mobile:leading-[28px]">
                                    Cập nhật{" "}
                                    <span className="text-okuro-color-text">
                                        lịch báo giảng,{<br />}danh bạ giáo viên
                                    </span>
                                </span>
                            </div>
                            <div className="flex">
                                <p className="text-okuro-color-text-li text-center  font-roboto text-base px-2 font-light leading-[27px]">
                                    Dễ dàng cập nhật tình hình học tập, rèn luyện của học sinh, thuận tiện kết nối liên
                                    lạc giữa phụ huynh với giáo viên, nhà trường
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab rounded-[20px] mobile:gap-6 mobile:p-0 mobile:h-auto mobile:w-auto mobile:max-w-[572px]">
                        <div className=" flex items-cennter justify-center h-auto w-full ">
                            <img
                                src="../../../AboutIcon2.png"
                                className="h-20 w-20 mobile:w-[62px] mobile:h-[62px]"
                                alt=""
                            />
                        </div>
                        <div className="h-[182px] w-full mobile:px-4  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange mobile:text-[20px] mobile:leading-[28px]">
                                    Thanh toán{" "}
                                    <span className="text-okuro-color-text">
                                        {" "}
                                        học phí <br /> trực tuyến
                                    </span>
                                </span>
                            </div>
                            <div className="flex">
                                <p className="text-okuro-color-text-li text-center  font-roboto text-base px-2 font-light leading-[27px]">
                                    Cập nhật nhanh chóng thông tin học phí đến phụ huynh, dễ dàng thanh toán mọi lúc mọi
                                    nơi, lưu trữ hóa đơn điện tử
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab rounded-[20px] mobile:gap-6 mobile:p-0 mobile:h-auto mobile:w-auto mobile:max-w-[572px]">
                        <div className=" flex items-cennter justify-center h-auto w-full ">
                            <img
                                src="../../../AboutIcon3.png"
                                className="h-20 w-20 mobile:w-[62px] mobile:h-[62px]"
                                alt=""
                            />
                        </div>
                        <div className="h-[182px] w-full mobile:px-4  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange mobile:text-[20px] mobile:leading-[28px]">
                                    Kết nối{" "}
                                    <span className="text-okuro-color-text">nhà trường với,{<br />} phụ huynh</span>
                                </span>
                            </div>
                            <div className="flex">
                                <p className="text-okuro-color-text-li text-center  font-roboto text-base px-2 font-light leading-[27px]">
                                    Cập nhật nhanh chóng các thông báo quan trọng và thông tin xuyên suốt quá trình học
                                    tập của học sinh
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab rounded-[20px] mobile:gap-6 mobile:p-0 mobile:h-auto mobile:w-auto mobile:max-w-[572px]">
                        <div className=" flex items-cennter justify-center h-auto w-full ">
                            <img
                                src="../../../AboutIcon4.png"
                                className="h-20 w-20 mobile:w-[62px] mobile:h-[62px]"
                                alt=""
                            />
                        </div>
                        <div className="h-[182px] w-full mobile:px-4  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange mobile:text-[20px] mobile:leading-[28px]">
                                    Nộp hồ sơ{" "}
                                    <span className="text-okuro-color-text">tuyển sinh{<br />} trực tuyến</span>
                                </span>
                            </div>
                            <div className="flex">
                                <p className="text-okuro-color-text-li text-center  font-roboto text-base px-2 font-light leading-[27px]">
                                    Dễ dàng đăng ký, nộp hồ sơ nhập học trực tuyến tại các trường thông qua ứng dụng chỉ
                                    với kết nối Internet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[60px] h-full w-full mobile:flex-col">
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab rounded-[20px] mobile:gap-6 mobile:p-0 mobile:h-auto mobile:w-auto mobile:max-w-[572px]">
                        <div className=" flex items-cennter justify-center h-auto w-full ">
                            <img
                                src="../../../AboutIcon1.png"
                                className="h-20 w-20 mobile:w-[62px] mobile:h-[62px]"
                                alt=""
                            />
                        </div>
                        <div className="h-[182px] w-full mobile:px-4  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange mobile:text-[20px] mobile:leading-[28px]">
                                    Theo dõi{" "}
                                    <span className="text-okuro-color-text">nội dung{<br />} thời khóa biểu</span>
                                </span>
                            </div>
                            <div className="flex">
                                <p className="text-okuro-color-text-li text-center  font-roboto text-base px-2 font-light leading-[27px]">
                                    Quản lý và cập nhật liên tục nội dung chương trình học theo từng giai đoạn cụ thể.
                                    Nhận thông báo ngay khi có thay đổi
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab rounded-[20px] mobile:gap-6 mobile:p-0 mobile:h-auto mobile:w-auto mobile:max-w-[572px]">
                        <div className=" flex items-cennter justify-center h-auto w-full ">
                            <img
                                src="../../../AboutIcon2.png"
                                className="h-20 w-20 mobile:w-[62px] mobile:h-[62px]"
                                alt=""
                            />
                        </div>
                        <div className="h-[182px] w-full mobile:px-4  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange mobile:text-[20px] mobile:leading-[28px]">
                                    Theo dõi{" "}
                                    <span className="text-okuro-color-text">
                                        điểm danh trên{<br />} xe đưa đón học sinh
                                    </span>
                                </span>
                            </div>
                            <div className="flex">
                                <p className="text-okuro-color-text-li text-center  font-roboto text-base px-2 font-light leading-[27px]">
                                    Quản lý và cập nhật chi tiết thông tin xuyên suốt quá trình đưa đón học sinh
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab rounded-[20px] mobile:gap-6 mobile:p-0 mobile:h-auto mobile:w-auto mobile:max-w-[572px]">
                        <div className=" flex items-cennter justify-center h-auto w-full ">
                            <img
                                src="../../../AboutIcon3.png"
                                className="h-20 w-20 mobile:w-[62px] mobile:h-[62px]"
                                alt=""
                            />
                        </div>
                        <div className="h-[182px] w-full mobile:px-4  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange mobile:text-[20px] mobile:leading-[28px]">
                                    Theo dõi <span className="text-okuro-color-text">thực đơn{<br />} hằng ngày</span>
                                </span>
                            </div>
                            <div className="flex">
                                <p className="text-okuro-color-text-li text-center  font-roboto text-base px-2 font-light leading-[27px]">
                                    Cập nhật thông tin thời gian và chất lượng bữa ăn hàng ngày tại trường của học sinh
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab rounded-[20px] mobile:gap-6 mobile:p-0 mobile:h-auto mobile:w-auto mobile:max-w-[572px]">
                        <div className=" flex items-cennter justify-center h-auto w-full ">
                            <img
                                src="../../../AboutIcon4.png"
                                className="h-20 w-20 mobile:w-[62px] mobile:h-[62px]"
                                alt=""
                            />
                        </div>
                        <div className="h-[182px] w-full mobile:px-4  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange mobile:text-[20px] mobile:leading-[28px]">
                                    Bảo mật <span className="text-okuro-color-text">thông tin</span>
                                </span>
                            </div>
                            <div className="flex">
                                <p className="text-okuro-color-text-li text-center  font-roboto text-base px-2 font-light leading-[27px]">
                                    Cơ chế mã hóa thông tin theo nguyên tắc mã hóa phân tầng dữ liệu giúp thông tin luôn
                                    được bảo mật với trạng thái tốt nhất
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-w-[60px] min-h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
            </div>
            <div className="flex justify-center items-center  w-full h-auto ">
                <div className="flex flex-col gap-[40px] justify-center  items-center h-full w-full mobile:flex-col mobile:gap-5 mobile:max-w-[558px]">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange">
                            Chức năng <span className="text-okuro-color-text">nổi bật</span>
                        </span>
                    </div>
                    <div className="flex w-[1390px] h-[450px] py-10 gap-[70px] justify-center mobile:flex-col-reverse mobile:w-auto mobile:h-auto mobile:px-4">
                        <div className="flex flex-col justify-center w-[600px] gap-3 h-[410px] mobile:w-full mobile:h-auto">
                            <div className="flex w-[580px] mobile:w-auto mobile:h-auto ">
                                <span className="text-[36px]  w-full font-roboto font-semibold  leading-[44px] text-okuro-orange  mobile:text-[20px] mobile:leading-normal">
                                    Kết nối{" "}
                                    <span className="text-okuro-color-text">
                                        thông tin giữa nhà trường với phụ huynh học sinh
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <span className="text-okuro-color-text font-roboto text-2xl font-normal leading-[30px] mobile:text-[16px] mobile:leading-normal">
                                    Dễ dàng cập nhật thông tin quá trình học tập, rèn luyện
                                </span>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                        Quản lý và cập nhật nhanh chóng thông tin của trường theo năm học: Tổng số giáo
                                        viên / học sinh, tình hình học tập, rèn luyện của học sinh, tình hình thu học
                                        phí, sử dụng thư viện, thiết bị…
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                        Cập nhật và quản lý chất lượng bữa ăn của học sinh
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                        Triển khai và quản lý chi tiết hành trình đưa đón học sinh
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                        Chủ động giúp học sinh chuẩn bị bài tốt hơn thông qua thời khóa biểu được cập
                                        nhật liên tục
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[481px] h-[387px] mobile:w-[300px] mobile:h-[235px]">
                            <img
                                src="../../../AboutOutstandingImg.png"
                                className="object-contain w-[481px] h-[387px] mobile:w-[300px] mobile:h-[235px]"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex w-[1390px] h-[450px] py-10 gap-[70px] justify-center mobile:flex-col mobile:w-auto mobile:h-auto mobile:px-4">
                        <div className="flex flex-col items-center justify-center w-[481px] h-[387px] mobile:w-[300px] mobile:h-[276px]">
                            <img
                                src="../../../AboutOutstandingImg2.png"
                                className="object-contain w-[481px] h-[387px] mobile:w-[300px] mobile:h-[276px]"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col justify-center w-[600px] gap-3 h-[410px] mobile:w-full mobile:h-auto">
                            <div className="flex w-[580px] mobile:w-auto mobile:h-auto ">
                                <span className="text-[36px]  w-full font-roboto font-semibold  leading-[44px] text-okuro-orange  mobile:text-[20px] mobile:leading-normal">
                                    Quản Lý <span className="text-okuro-color-text">Thanh Toán trực tuyến</span>
                                </span>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <span className="text-okuro-color-text font-roboto text-2xl font-normal leading-[30px] mobile:text-[16px] mobile:leading-normal">
                                    Cập nhật thông báo và trạng thái học phí
                                </span>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                        Cập nhật đầy đủ thông tin học phí và các chi phí khác
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                        Thanh toán trực tuyến mọi lúc mọi nơi và lưu trữ hóa đơn điện tử tiện lợi
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                        Kết nối thông tin hai chiều xuyên suốt giữa nhà trường với phụ huynh
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-[1390px] h-[450px] py-10 gap-[70px] justify-center mobile:flex-col-reverse mobile:w-auto mobile:h-auto mobile:px-4">
                        <div className="flex flex-col justify-center w-[600px] gap-3 h-[410px] mobile:w-full mobile:h-auto">
                            <div className="flex w-[580px] mobile:w-auto mobile:h-auto ">
                                <span className="text-[36px]  w-full font-roboto font-semibold  leading-[44px] text-okuro-orange  mobile:text-[20px] mobile:leading-normal">
                                    Mạng xã hội <span className="text-okuro-color-text">giáo dục</span>
                                </span>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <span className="text-okuro-color-text font-roboto text-2xl font-normal leading-[30px] mobile:text-[16px] mobile:leading-normal">
                                    Mạng lưới kết nối thông tin giá trị và tương tác đa chiều
                                </span>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                        Rút ngắn khoảng cách giữa nhà trường với phụ huynh qua các chia sẻ giá trị,
                                        thông tin quan trọng
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                        Không gian chia sẻ giữa phụ huynh trong hành trình nuôi dạy con khỏe mạnh thông
                                        minh
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                        Lưu giữ những khoảnh khắc quý giá trong hành trình phát triển toàn diện của học
                                        sinh
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                        Chủ động giúp học sinh chuẩn bị bài tốt hơn thông qua thời khóa biểu được cập
                                        nhật liên tục
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[481px] h-[387px] mobile:w-[300px] mobile:h-[235px]">
                            <img
                                src="../../../AboutOutstandingImg.png"
                                className="object-contain w-[481px] h-[387px] mobile:w-[300px] mobile:h-[235px]"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="min-w-[60px] mt-5 mb-20 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                </div>
            </div>
            <div className="flex justify-center items-center  w-full max-h-[765px] h-auto px-4">
                <div className="select-none flex flex-col gap-[40px] mobile:gap-[24px] justify-center  items-center h-full w-full">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange mobile:text-[24px] mobile:leading-normal">
                            <span className="text-okuro-color-text">Ý kiến</span> người dùng
                        </span>
                    </div>
                    <div className="flex max-w-[900px] w-full justify-between items-center min-h-[66px] mobile:h-8 mobile:min-h-[32px] mobile:mb-3">
                        <div className="w-[74px] h-[32px] " onClick={prevStep}>
                            <motion.img
                                animate="anime"
                                whileHover={{ scale: 1.2 }}
                                src="../../../AboutArrowLeft.png"
                                className="w-[74px] h-[32px] hover:cursor-pointer"
                                alt=""
                            />
                        </div>
                        <div className="w-[74px] h-[32px] " onClick={nextStep}>
                            <motion.img
                                whileHover={{ scale: 1.2 }}
                                src="../../../AboutArrowRight.png"
                                className="w-[74px] h-[32px] hover:cursor-pointer"
                                alt=""
                            />
                        </div>
                    </div>
                    {isMobile ? (
                        <div className="h-full">
                            {index.now == 1 ? (
                                <AnimatePresence>
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        className="flex h-min hover:cursor-pointer"
                                    >
                                        <div className="z-30 absolute h-[42px] w-[54px]   -translate-y-[50%]  ">
                                            {" "}
                                            <img src="../../../icon.png" className="w-full h-full" alt="" />
                                        </div>
                                        <div className="z-10 flex flex-col w-[313px]  justify items-center gap-7 rounded-[24px] border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)] px-9 py-[50px]">
                                            <div
                                                id="img"
                                                className=" flex justify-center items-center w-[72px] h-[72px]"
                                            >
                                                <img src="../../../HealthcareUser1.png" alt="" />
                                            </div>
                                            <div className="flex">
                                                <span className="text-[16px] w-full font-roboto font-black text-center leading-[23px]  text-okuro-name-text-user ">
                                                    Người dùng Phương Bùi
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                                    Nhờ Okuro tôi thấy việc đặt kịch khám dễ dàng hơn bao giờ hết
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            ) : (
                                <></>
                            )}
                            {index.now == 2 ? (
                                <AnimatePresence>
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        className="flex h-min hover:cursor-pointer"
                                    >
                                        <div className="z-30 absolute h-[42px] w-[54px] -translate-y-[50%] ">
                                            {" "}
                                            <img src="../../../icon.png" className="w-full h-full" alt="" />
                                        </div>
                                        <div className="z-10 flex flex-col w-[313px]  justify items-center gap-7 rounded-[24px] border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)] px-9 py-[50px]">
                                            <div
                                                id="img"
                                                className=" flex justify-center items-center w-[72px] h-[72px]"
                                            >
                                                <img src="../../../HealthcareUser2.png" alt="" />
                                            </div>
                                            <div className="flex">
                                                <span className="text-[16px] w-full font-roboto font-black text-center leading-[23px]  text-okuro-name-text-user ">
                                                    Người dùng Thuha Hatran
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                                    Okuro giúp việc thanh toán viện phí của tôi trở nên nhanh gọn, rất
                                                    hữu ích
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            ) : (
                                <></>
                            )}
                            {index.now == 3 ? (
                                <AnimatePresence>
                                    <motion.div
                                        variants={imgVariant}
                                        initial="hidden"
                                        animate="visible"
                                        transition="trans"
                                        className="flex h-min hover:cursor-pointer"
                                    >
                                        <div className="z-30 absolute h-[42px] w-[54px]   -translate-y-[50%] ">
                                            {" "}
                                            <img src="../../../icon.png" className="w-full h-full" alt="" />
                                        </div>
                                        <div className="z-10 flex flex-col w-[313px]  justify items-center gap-7 rounded-[24px] border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)] px-9 py-[50px]">
                                            <div
                                                id="img"
                                                className=" flex justify-center items-center w-[72px] h-[72px]"
                                            >
                                                <img src="../../../HealthcareUser3.png" alt="" />
                                            </div>
                                            <div className="flex">
                                                <span className="text-[16px] w-full font-roboto font-black text-center leading-[23px]  text-okuro-name-text-user ">
                                                    Người dùng Hieu Hang
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                                    Có tính năng hồ sơ điện tử của Okuro tôi không cần phải lưu giữ giấy
                                                    tờ theo cách truyền thống nữa. Rất tiện lợi và hữu dụng
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            ) : (
                                <></>
                            )}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-between w-full h-[394px] gap-[28px] desk1000:gap-[0px]  ">
                            <div className="flex gap-[100px] ">
                                <motion.div
                                    custom={index}
                                    whileHover="hover"
                                    onClick={setStep2}
                                    variants={containerVariant}
                                    initial="initial"
                                    animate="animate"
                                    transition="transition"
                                    className="flex h-min hover:cursor-pointer"
                                >
                                    <div className="z-30 absolute h-[42px] w-[54px]   -translate-y-[50%]  ">
                                        {" "}
                                        <img src="../../../icon.png" className="w-full h-full" alt="" />
                                    </div>
                                    <div className="z-10 flex flex-col w-[313px]  justify items-center gap-7 rounded-[24px] border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)] px-9 py-[50px]">
                                        <div id="img" className=" flex justify-center items-center w-[72px] h-[72px]">
                                            <img src="../../../HealthcareUser1.png" alt="" />
                                        </div>
                                        <div className="flex">
                                            <span className="text-[16px] w-full font-roboto font-black text-center leading-[23px]  text-okuro-name-text-user ">
                                                Người dùng Phương Bùi
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                                Nhờ Okuro tôi thấy việc đặt kịch khám dễ dàng hơn bao giờ hết
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    custom={index}
                                    whileHover="hover"
                                    onClick={setStep1}
                                    variants={containerVariant}
                                    initial="initial"
                                    animate="animate2"
                                    transition="transition"
                                    className="flex h-min hover:cursor-pointer"
                                >
                                    <div className="z-30 absolute h-[42px] w-[54px] -translate-y-[50%] ">
                                        {" "}
                                        <img src="../../../icon.png" className="w-full h-full" alt="" />
                                    </div>
                                    <div className="z-10 flex flex-col w-[313px]  justify items-center gap-7 rounded-[24px] border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)] px-9 py-[50px]">
                                        <div id="img" className=" flex justify-center items-center w-[72px] h-[72px]">
                                            <img src="../../../HealthcareUser2.png" alt="" />
                                        </div>
                                        <div className="flex">
                                            <span className="text-[16px] w-full font-roboto font-black text-center leading-[23px]  text-okuro-name-text-user ">
                                                Người dùng Thuha Hatran
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                                Okuro giúp việc thanh toán viện phí của tôi trở nên nhanh gọn, rất hữu
                                                ích
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    custom={index}
                                    whileHover="hover"
                                    onClick={setStep3}
                                    variants={containerVariant}
                                    initial="initial"
                                    animate="animate3"
                                    transition="transition"
                                    className="flex h-min hover:cursor-pointer"
                                >
                                    <div className="z-30 absolute h-[42px] w-[54px]   -translate-y-[50%] ">
                                        {" "}
                                        <img src="../../../icon.png" className="w-full h-full" alt="" />
                                    </div>
                                    <div className="z-10 flex flex-col w-[313px]  justify items-center gap-7 rounded-[24px] border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)] px-9 py-[50px]">
                                        <div id="img" className=" flex justify-center items-center w-[72px] h-[72px]">
                                            <img src="../../../HealthcareUser3.png" alt="" />
                                        </div>
                                        <div className="flex">
                                            <span className="text-[16px] w-full font-roboto font-black text-center leading-[23px]  text-okuro-name-text-user ">
                                                Người dùng Hieu Hang
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                                Có tính năng hồ sơ điện tử của Okuro tôi không cần phải lưu giữ giấy tờ
                                                theo cách truyền thống nữa. Rất tiện lợi và hữu dụng
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    )}

                    <div className="min-w-[60px] mt-5 mb-20 mobile:mb-10 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                </div>
            </div>
            <div className="flex justify-center items-center  w-auto h-auto overflow-hidden">
                <div className="flex flex-col gap-[40px] justify-center  items-center h-auto w-full">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange mobile:text-[24px] mobile:leading-normal">
                            <span className="text-okuro-color-text">Tổng quan</span> giao diện
                        </span>
                    </div>
                    <div className="flex items-center justify-center w-full h-[916px] mobile:h-auto gap-[70px] bg-gradient-to-bl from-okuro-linear-from3 to-okuro-linear-to3   overflow-hidden ">
                        <img
                            src="../../../PhoneUI.png"
                            className=" z-30 object-contain w-[1390x] h-[916px] mobile:h-auto mobile:w-auto"
                            alt=""
                        />
                        <div className="absolute w-full h-[636px] bg-cyan-200 opacity-20 mobile:h-[174px] "></div>
                        <div className="z-20 absolute w-[300px] h-[300px] desk1000:w-[250px] desk1000:h-[250px] mobile:w-[100px] mobile:h-[100px] bg-gradient-to-b from-okuro-linear-from4 to-okuro-primary rotate-[33deg] rounded-[38px]"></div>
                    </div>

                    <div className="min-w-[60px] mt-5 mb-20 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center  w-full h-auto">
                <div className="flex flex-col  justify-center  items-center h-auto w-full">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange mobile:text-[24px] mobile:leading-normal">
                            Trở thành<span className="text-okuro-color-text"> người dùng của OKURO</span>
                        </span>
                    </div>
                    <div id="Utilities" className="flex justify-center items-center  h-auto w-full">
                        <div className="z-20 flex  rounded-xl w-[1309px] h-auto  items-center justify-center overflow-y-hidden">
                            <div className="flex mobile:flex-col mobile:gap-6 w-[1021px] h-auto ">
                                <div className="absolute flex max-w-[1350px] mt-[275px] -ml-[150px] mobile:max-w-full mobile:mt-20 mobile:ml-0 mobile:px-1 w-full  ">
                                    <div className="h-auto w-auto " onClick={prevTitle}>
                                        {showTitle > 1 ? (
                                            <IconButton
                                                variant="text"
                                                color="white"
                                                size="lg"
                                                onClick={prevTitle}
                                                className=" bg-okuro-btn-navigate mobile:h-6 mobile:w-6 text-white  hover:bg-okuro-primary rounded-[100%]   "
                                            >
                                                <span>
                                                    <i
                                                        className={clsx("fa fa-angle-left ", {
                                                            "fa-xs": isMobile,
                                                            "fa-2xl": !isMobile,
                                                        })}
                                                    ></i>
                                                </span>
                                            </IconButton>
                                        ) : (
                                            <div
                                                variant="text"
                                                color="white"
                                                size="lg"
                                                className="  mobile:h-6 mobile:w-6   "
                                            ></div>
                                        )}
                                    </div>
                                    <div className="h-auto w-auto " onClick={nextTitle}>
                                        {showTitle < 5 ? (
                                            <IconButton
                                                variant="text"
                                                color="white"
                                                size="lg"
                                                onClick={nextTitle}
                                                className=" bg-okuro-btn-navigate mobile:h-6 mobile:w-6 text-white hover:bg-okuro-primary rounded-[100%] !absolute top-2/4 -translate-y-2/4 !right-0"
                                            >
                                                <span>
                                                    <i
                                                        className={clsx("fa fa-angle-right ", {
                                                            "fa-xs": isMobile,
                                                            "fa-2xl": !isMobile,
                                                        })}
                                                    ></i>
                                                </span>
                                            </IconButton>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <AnimatePresence>
                                        {signup && showTitle == 1 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../AboutSignUp1.png"
                                                alt=""
                                                className="min-w-[432px] w-[432px] h-[581px] mobile:min-w-[200px] mobile:w-[200px] mobile:h-[269px]  hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {signup && (showTitle == 2) == 1 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../AboutSignUp2.png"
                                                alt=""
                                                className="min-w-[432px] w-[432px] h-[581px] mobile:min-w-[200px] mobile:w-[200px] mobile:h-[269px]  hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {signup && showTitle == 3 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../AboutSignUp3.png"
                                                alt=""
                                                className="min-w-[432px] w-[432px] h-[581px] mobile:min-w-[200px] mobile:w-[200px] mobile:h-[269px]  hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {signup && showTitle == 4 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../AboutSignUp4.png"
                                                alt=""
                                                className="min-w-[432px] w-[432px] h-[581px] mobile:min-w-[200px] mobile:w-[200px] mobile:h-[269px]  hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {signup && showTitle == 5 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../AboutSignUp5.png"
                                                alt=""
                                                className="min-w-[432px] w-[432px] h-[581px] mobile:min-w-[200px] mobile:w-[200px] mobile:h-[269px]  hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {!signup && showTitle == 1 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../AboutSignIn1.png"
                                                alt=""
                                                className="min-w-[432px] w-[432px] h-[581px] mobile:min-w-[200px] mobile:w-[200px] mobile:h-[269px]  hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {!signup && showTitle == 2 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../AboutSignIn2.png"
                                                alt=""
                                                className="min-w-[432px] w-[432px] h-[581px] mobile:min-w-[200px] mobile:w-[200px] mobile:h-[269px]  hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {!signup && showTitle == 3 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../AboutSignIn3.png"
                                                alt=""
                                                className="min-w-[432px] w-[432px] h-[581px] mobile:min-w-[200px] mobile:w-[200px] mobile:h-[269px]  hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {!signup && showTitle == 4 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../AboutSignIn4.png"
                                                alt=""
                                                className="min-w-[432px] w-[432px] h-[581px] mobile:min-w-[200px] mobile:w-[200px] mobile:h-[269px]  hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {!signup && showTitle == 5 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../AboutSignIn5.png"
                                                alt=""
                                                className="min-w-[432px] w-[432px] h-[581px] mobile:min-w-[200px] mobile:w-[200px] mobile:h-[269px]  hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <div className="flex flex-col gap-4 justify-center items-center h-auto w-full ">
                                    <div className="flex  h-[100px] w-full mobile:justify-center mobile:h-11">
                                        <div
                                            className={clsx(
                                                "flex  w-[234px] h-11 items-center justify-center cursor-pointer rounded-lg transition-all mobile:w-[147px]",
                                                {
                                                    "opacity-100 bg-[url('../../../btnNavigate.png')] mobile:bg-[url('../../../btnNavigate1Mobile.png')]":
                                                        signup,
                                                    "opacity-60 bg-okuro-btn-navigate": !signup,
                                                }
                                            )}
                                            onClick={() => {
                                                setSignup(true);
                                                setShowTitle(1);
                                            }}
                                        >
                                            <span className="font-roboto text-[24px] font-black text-white leading-[133%] mobile:text-[14px] mobile:leading-[32px]">
                                                Tải và đăng ký
                                            </span>
                                        </div>

                                        <div
                                            className={clsx(
                                                "flex bg-cover w-[324px] h-[44px]    items-center justify-center cursor-pointer rounded-lg transition-all mobile:w-[147px]",
                                                {
                                                    "opacity-100 bg-[url('../../../btn2.png')] mobile:bg-[url('../../../btnNavigate2Mobile.png')]":
                                                        !signup,
                                                    "opacity-60 bg-okuro-btn-navigate": signup,
                                                }
                                            )}
                                            onClick={() => {
                                                setSignup(false);
                                                setShowTitle(1);
                                            }}
                                        >
                                            <span className="font-roboto text-[24px] font-black text-white leading-[133%] mobile:text-[14px] text-center mobile:leading-tight">
                                                Chọn trường và sử dụng
                                            </span>
                                        </div>
                                    </div>

                                    <div id="tabcontent1" className="flex flex-col gap-8 h-auto py-2 px-4 w-full ">
                                        <div
                                            className="flex gap-8"
                                            onClick={() => {
                                                setShowTitle(1);
                                            }}
                                        >
                                            <div className="flex items-center justify-center min-h-[36px] min-w-[36px] w-[36px] h-[36px] pt-1">
                                                <motion.img
                                                    src="../../../xanh1.png"
                                                    alt=""
                                                    className="hover:cursor-pointer"
                                                    whileHover={{ scale: 1.1 }}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="hover:cursor-pointer">
                                                    <AnimatePresence>
                                                        {signup && (
                                                            <motion.div
                                                                initial={{}}
                                                                animate={{}}
                                                                className={clsx(
                                                                    "text-xl font-roboto font-normal text-okuro-web-text  leading-[170%] mobile:text-[16px]",
                                                                    {
                                                                        "!text-okuro-orange font-semibold ":
                                                                            showTitle >= 1,
                                                                    }
                                                                )}
                                                            >
                                                                Tải ứng dụng{" "}
                                                                <span
                                                                    className={clsx({
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 1,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    Okuro
                                                                </span>
                                                            </motion.div>
                                                        )}
                                                        {!signup && (
                                                            <span
                                                                className={clsx(
                                                                    "text-xl font-roboto font-normal text-okuro-web-text  leading-[170%] mobile:text-[16px]",
                                                                    {
                                                                        "!text-okuro-orange font-semibold ":
                                                                            showTitle >= 1,
                                                                    }
                                                                )}
                                                            >
                                                                Đăng nhập{" "}
                                                                <span
                                                                    className={clsx({
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 1,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    ứng dụng Okuro
                                                                </span>
                                                            </span>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                                <AnimatePresence>
                                                    {signup && showTitle == 1 && (
                                                        <motion.div
                                                            className="flex gap-4 mobile:flex-col"
                                                            initial={{ opacity: 0, y: 0 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <span className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                Tải ứng dụng miễn phí bằng cách tìm kiếm từ khóa "Okuro"
                                                                trên App Store hoặc Google Play Store. Hoặc quét mã QR
                                                                để tải Okuro:
                                                            </span>

                                                            <div className="flex h-auto w-auto gap-[24px] items-center">
                                                                <img
                                                                    src="../../../QR.png"
                                                                    className="h-[73px] min-w-[73px]"
                                                                    alt=""
                                                                />
                                                                {isMobile ? (
                                                                    <div className="h-8 px-6 font-roboto bg-okuro-orange rounded-lg shadow flex justify-center items-center ">
                                                                        <div className="text-center text-white text-xs font-black ">
                                                                            Tải Okuro Ngay!
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                                <AnimatePresence>
                                                    {!signup && showTitle == 1 && (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -3 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <span className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                Nhập số điện thoại và mật khẩu để đăng nhập tài khoản
                                                                Okuro. Nếu không nhớ mật khẩu, chọn "Quên mật khẩu?" để
                                                                lấy lại mật khẩu
                                                            </span>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>

                                        <div
                                            className="flex gap-8"
                                            onClick={() => {
                                                setShowTitle(2);
                                            }}
                                        >
                                            <div className="flex items-center justify-center min-h-[36px] min-w-[36px] w-[36px] h-[36px] pt-1">
                                                <AnimatePresence>
                                                    {showTitle < 2 ? (
                                                        <motion.img
                                                            src="../../../trang2.png"
                                                            alt=""
                                                            className="hover:cursor-pointer"
                                                            whileHover={{ scale: 1.1 }}
                                                        />
                                                    ) : (
                                                        <motion.img
                                                            src="../../../xanh2.png"
                                                            alt=""
                                                            className="hover:cursor-pointer"
                                                            whileHover={{ scale: 1.1 }}
                                                        />
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="hover:cursor-pointer">
                                                    <AnimatePresence>
                                                        {signup && (
                                                            <span
                                                                className={clsx(
                                                                    "text-xl font-roboto font-normal text-okuro-web-text  leading-[170%] mobile:text-[16px]",
                                                                    {
                                                                        "!text-okuro-orange font-semibold ":
                                                                            showTitle >= 2,
                                                                    }
                                                                )}
                                                            >
                                                                Đăng ký{" "}
                                                                <span
                                                                    className={clsx({
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 2,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    tài khoản
                                                                </span>
                                                            </span>
                                                        )}
                                                        {!signup && (
                                                            <span
                                                                className={clsx(
                                                                    "text-xl font-roboto font-normal text-okuro-web-text  leading-[170%] mobile:text-[16px]",
                                                                    {
                                                                        "!text-okuro-orange font-semibold ":
                                                                            showTitle >= 2,
                                                                    }
                                                                )}
                                                            >
                                                                Chọn mảng{" "}
                                                                <span
                                                                    className={clsx({
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 2,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    Giáo dục{" "}
                                                                </span>
                                                            </span>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                                <AnimatePresence>
                                                    {signup && showTitle == 2 && (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -3 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <span className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                Mở ứng dụng và chọn đăng ký
                                                            </span>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                                <AnimatePresence>
                                                    {!signup && showTitle == 2 && (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -3 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <span className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                Vuốt màn hình xuống dưới phần mở rộng của ứng dụng rồi
                                                                chọn "Giáo dục"
                                                            </span>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>

                                        <div
                                            className="flex gap-8"
                                            onClick={() => {
                                                setShowTitle(3);
                                            }}
                                        >
                                            <div className="flex items-center justify-center min-h-[36px] min-w-[36px] w-[36px] h-[36px] pt-1">
                                                <AnimatePresence>
                                                    {showTitle < 3 ? (
                                                        <motion.img
                                                            src="../../../trang3.png"
                                                            alt=""
                                                            className="hover:cursor-pointer"
                                                            whileHover={{ scale: 1.1 }}
                                                        />
                                                    ) : (
                                                        <motion.img
                                                            src="../../../xanh3.png"
                                                            alt=""
                                                            className="hover:cursor-pointer"
                                                            whileHover={{ scale: 1.1 }}
                                                        />
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="hover:cursor-pointer">
                                                    <AnimatePresence>
                                                        {signup && (
                                                            <span
                                                                className={clsx(
                                                                    "text-xl font-roboto font-normal text-okuro-web-text  leading-[170%] mobile:text-[16px]",
                                                                    {
                                                                        "!text-okuro-orange font-semibold ":
                                                                            showTitle >= 3,
                                                                    }
                                                                )}
                                                            >
                                                                Nhập{" "}
                                                                <span
                                                                    className={clsx({
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 3,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    số điện thoại
                                                                </span>
                                                            </span>
                                                        )}
                                                        {!signup && (
                                                            <span
                                                                className={clsx(
                                                                    "text-xl font-roboto font-normal text-okuro-web-text  leading-[170%] mobile:text-[16px]",
                                                                    {
                                                                        "!text-okuro-orange font-semibold ":
                                                                            showTitle >= 3,
                                                                    }
                                                                )}
                                                            >
                                                                Chọn{" "}
                                                                <span
                                                                    className={clsx({
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 3,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    Trường học
                                                                </span>
                                                            </span>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                                <AnimatePresence>
                                                    {signup && showTitle == 3 && (
                                                        <motion.div
                                                            className="flex flex-col gap-4"
                                                            initial={{ opacity: 0, y: -3 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <div className="w-full h-full">
                                                                <p className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                    Thiết lập mật khẩu để bảo vệ tài khoản và bấm "Đăng
                                                                    ký"
                                                                </p>
                                                                <p className="text-okuro-color-text font-roboto text-[15px]  leading-[25px] font-light">
                                                                    Lưu ý: Mật khẩu ở 02 ô phải hoàn toàn giống nhau
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                                <AnimatePresence>
                                                    {!signup && showTitle == 3 && (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -3 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <p className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                Chọn trường đang theo học
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>

                                        <div
                                            className="flex gap-8"
                                            onClick={() => {
                                                setShowTitle(4);
                                            }}
                                        >
                                            <div className="flex items-center justify-center min-h-[36px] min-w-[36px] w-[36px] h-[36px] pt-1">
                                                <AnimatePresence>
                                                    {showTitle < 4 ? (
                                                        <motion.img
                                                            src="../../../trang4.png"
                                                            alt=""
                                                            className="hover:cursor-pointer"
                                                            whileHover={{ scale: 1.1 }}
                                                        />
                                                    ) : (
                                                        <motion.img
                                                            src="../../../xanh4.png"
                                                            alt=""
                                                            className="hover:cursor-pointer"
                                                            whileHover={{ scale: 1.1 }}
                                                        />
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="hover:cursor-pointer">
                                                    <AnimatePresence>
                                                        {signup && (
                                                            <span
                                                                className={clsx(
                                                                    "text-xl font-roboto font-normal text-okuro-web-text  leading-[170%] mobile:text-[16px]",
                                                                    {
                                                                        "!text-okuro-orange font-semibold ":
                                                                            showTitle >= 4,
                                                                    }
                                                                )}
                                                            >
                                                                Nhập{" "}
                                                                <span
                                                                    className={clsx({
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 4,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    mã xác minh
                                                                </span>
                                                            </span>
                                                        )}
                                                        {!signup && (
                                                            <span
                                                                className={clsx(
                                                                    "text-xl font-roboto font-normal text-okuro-web-text  leading-[170%] mobile:text-[16px]",
                                                                    {
                                                                        "!text-okuro-orange font-semibold ":
                                                                            showTitle >= 4,
                                                                    }
                                                                )}
                                                            >
                                                                Chọn{" "}
                                                                <span
                                                                    className={clsx({
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 4,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    Tên học sinh
                                                                </span>
                                                            </span>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                                <AnimatePresence>
                                                    {signup && showTitle == 4 && (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -3 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <div className="w-full h-full">
                                                                <span className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                    Vui lòng kiểm tra và nhập chính xác mã xác minh và
                                                                    chọn "Xác nhận"
                                                                </span>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                                <AnimatePresence>
                                                    {!signup && showTitle == 4 && (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -3 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <div className="w-full h-full">
                                                                <span className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                    Chọn tên học sinh trong danh sách
                                                                </span>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                        <div
                                            className="flex gap-8"
                                            onClick={() => {
                                                setShowTitle(5);
                                            }}
                                        >
                                            <div className="flex items-center justify-center min-h-[36px] min-w-[36px] w-[36px] h-[36px] pt-1">
                                                <AnimatePresence>
                                                    {showTitle < 5 ? (
                                                        <motion.img
                                                            src="../../../trang5.png"
                                                            alt=""
                                                            className="hover:cursor-pointer"
                                                            whileHover={{ scale: 1.1 }}
                                                        />
                                                    ) : (
                                                        <motion.img
                                                            src="../../../xanh5.png"
                                                            alt=""
                                                            className="hover:cursor-pointer"
                                                            whileHover={{ scale: 1.1 }}
                                                        />
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="hover:cursor-pointer">
                                                    <AnimatePresence>
                                                        {signup && (
                                                            <span
                                                                className={clsx(
                                                                    "text-xl font-roboto font-normal text-okuro-web-text  leading-[170%] mobile:text-[16px]",
                                                                    {
                                                                        "!text-okuro-orange font-semibold ":
                                                                            showTitle >= 5,
                                                                    }
                                                                )}
                                                            >
                                                                Tạo{" "}
                                                                <span
                                                                    className={clsx({
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 5,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    mật khẩu đăng nhập
                                                                </span>
                                                            </span>
                                                        )}
                                                        {!signup && (
                                                            <span
                                                                className={clsx(
                                                                    "text-xl font-roboto font-normal text-okuro-web-text  leading-[170%] mobile:text-[16px]",
                                                                    {
                                                                        "!text-okuro-orange font-semibold ":
                                                                            showTitle >= 5,
                                                                    }
                                                                )}
                                                            >
                                                                Sử dụng{" "}
                                                                <span
                                                                    className={clsx({
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 5,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    tính năng
                                                                </span>
                                                            </span>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                                <AnimatePresence>
                                                    {signup && showTitle == 5 && (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -3 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <div className="w-full h-full">
                                                                <p className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                    Thiết lập mật khẩu để bảo vệ tài khoản và bấm "Đăng
                                                                    ký"
                                                                </p>
                                                                <p className="text-okuro-color-text font-roboto text-[15px]  leading-[25px] font-light">
                                                                    Lưu ý: Mật khẩu ở 02 ô phải hoàn toàn giống nhau
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                                <AnimatePresence>
                                                    {!signup && showTitle == 5 && (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -3 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <div className="w-full h-full">
                                                                <p className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                    Sẵn sàng trải nghiệm các tính năng trên ứng dụng
                                                                    Okuro
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-w-[60px] mt-5 mb-20 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
            </div>
            <div className="flex justify-center items-center  w-full h-auto mobile:w-auto">
                <div className="flex flex-col gap-[120px] justify-center  items-center h-auto w-full mobile:gap-[42px]">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange mobile:text-[24px] mobile:leading-normal">
                            <span className="text-okuro-color-text">Đối tác</span> đồng triển khai
                        </span>
                    </div>
                    <div className="grid grid-cols-4 mobile:grid-cols-3 justify-center items-center w-[1040px] h-auto gap-x-[100px] gap-y-[24px]  mobile:w-auto mobile:gap-y-0 mobile:gap-x-6 ">
                        <div className="col-start-1  flex justify-center items-center mobile:w-[100px] mobile:h-[100px]">
                            <img
                                src="../../../AboutBussiness1.png"
                                className="w-[185px] h-[185px] mobile:w-[100px] mobile:h-[100px]"
                                alt=""
                            />
                        </div>
                        <div className="col-start-2  flex justify-center items-center mobile:w-[100px] mobile:h-[100px]">
                            <img
                                src="../../../AboutBussiness2.png"
                                className="w-[185px] h-[185px] mobile:w-[100px] mobile:h-[100px]"
                                alt=""
                            />
                        </div>
                        <div className="col-start-3 flex justify-center  items-center mobile:w-[100px] mobile:h-[100px]">
                            <img
                                src="../../../AboutBussiness3.png"
                                className="w-[185px] h-[185px] mobile:w-[100px] mobile:h-[100px]"
                                alt=""
                            />
                        </div>
                        <div className="col-start-4 mobile:col-start-1 flex justify-center items-center mobile:w-[100px] mobile:h-[100px]">
                            <img
                                src="../../../AboutBussiness4.png"
                                className="w-[185px] h-[185px] mobile:w-[100px] mobile:h-[100px]"
                                alt=""
                            />
                        </div>
                        <div className="col-start-2 flex justify-center items-center mobile:w-[100px] mobile:h-[100px]">
                            <img
                                src="../../../AboutBussiness5.png"
                                className="w-[185px] h-[185px] mobile:w-[100px] mobile:h-[100px]"
                                alt=""
                            />
                        </div>
                        {/* <div className="col-start-4 flex justify-center items-center mobile:w-[100px] mobile:h-[100px]">
                            <img
                                src="../../../AboutBussiness6.png"
                                className="w-[185px] h-[185px] mobile:w-[100px] mobile:h-[100px]"
                                alt=""
                            />
                        </div> */}
                        <div className="col-start-3 flex justify-center items-center mobile:w-[100px] mobile:h-[100px]">
                            <img
                                src="../../../AboutBussiness7.png"
                                className="w-[185px] h-[185px] mobile:w-[100px] mobile:h-[100px]"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="min-w-[60px] mt-5 mb-20 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                </div>
            </div>
            <Contact />
            <Footer />
        </motion.div>
    );
}

export default AboutUs;

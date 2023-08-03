import Contact from "../../components/CustomerContact";
import Footer from "../../components/CustomerFooter";
import { Carousel, IconButton, tabs } from "@material-tailwind/react";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useContext } from "react";
import { LangContext } from "../../langContext";

import AboutPagination from "../../components/AboutPagination";

import { motion } from "framer-motion";

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
const num = (185 / (161 * 12 + 24 * 11)) * 100;

function AboutUs() {
    console.log(num);
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between h-full"
        >
            <div id="Utilities" className="flex justify-center h-full">
                <div
                    id="background"
                    className="absolute h-[65%] w-full bg-okuro-background desktop:h-[90%] pc:h-[65%] myscreen:h-[55%] overflow-x-hidden"
                ></div>
                <Carousel
                    className="rounded-xl w-[1200px] h-[700px] mb-20"
                    loop={true}
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handlePrev}
                            className=" bg-white text-okuro-color-text hover:bg-okuro-primary rounded-[100%]  !absolute top-2/4 -translate-y-2/4 left-0 "
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
                    <AboutPagination></AboutPagination>
                    <AboutPagination></AboutPagination>
                    <AboutPagination></AboutPagination>
                    <AboutPagination></AboutPagination>
                    <AboutPagination></AboutPagination>
                </Carousel>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 p-20 h-[1034px] w-full ">
                <div className="flex items-center justify-center gap-[60px] h-full w-full ">
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab ">
                        <div className=" flex items-cennter justify-center h-20 w-full ">
                            <img src="../../../AboutIcon1.png" className="h-20 w-20" alt="" />
                        </div>
                        <div className="h-[182px] w-full px-  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange">
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
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab ">
                        <div className=" flex items-cennter justify-center h-20 w-full ">
                            <img src="../../../AboutIcon2.png" className="h-20 w-20" alt="" />
                        </div>
                        <div className="h-[182px] w-full px-  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange">
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
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab ">
                        <div className=" flex items-cennter justify-center h-20 w-full ">
                            <img src="../../../AboutIcon3.png" className="h-20 w-20" alt="" />
                        </div>
                        <div className="h-[182px] w-full px-  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange">
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
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab ">
                        <div className=" flex items-cennter justify-center h-20 w-full ">
                            <img src="../../../AboutIcon4.png" className="h-20 w-20" alt="" />
                        </div>
                        <div className="h-[182px] w-full px-  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange">
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
                <div className="flex items-center justify-center gap-[60px] h-full w-full ">
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab ">
                        <div className=" flex items-cennter justify-center h-20 w-full ">
                            <img src="../../../AboutIcon1.png" className="h-20 w-20" alt="" />
                        </div>
                        <div className="h-[182px] w-full px-  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange">
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
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab ">
                        <div className=" flex items-cennter justify-center h-20 w-full ">
                            <img src="../../../AboutIcon2.png" className="h-20 w-20" alt="" />
                        </div>
                        <div className="h-[182px] w-full px-  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange">
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
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab ">
                        <div className=" flex items-cennter justify-center h-20 w-full ">
                            <img src="../../../AboutIcon3.png" className="h-20 w-20" alt="" />
                        </div>
                        <div className="h-[182px] w-full px-  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange">
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
                    <div className="flex flex-col justify-center items-center w-[353px] gap-[26px] h-[420px] bg-okuro-background-tab ">
                        <div className=" flex items-cennter justify-center h-20 w-full ">
                            <img src="../../../AboutIcon4.png" className="h-20 w-20" alt="" />
                        </div>
                        <div className="h-[182px] w-full px-  ">
                            <div className="flex w-full items-center h-[66px]   ">
                                <span className="text-[22px] w-full font-roboto font-semibold text-center leading-[31px] px-4  text-okuro-orange">
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
            <div className="flex justify-center items-center  w-full h-[1518px] ">
                <div className="flex flex-col gap-[40px] justify-center  items-center h-full w-full">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange">
                            Chức năng <span className="text-okuro-color-text">nổi bật</span>
                        </span>
                    </div>
                    <div className="flex w-[1390px] h-[450px] gap-[70px] justify-center  ">
                        <div className="flex flex-col  w-[600px] gap-3 h-[410px]">
                            <div className="flex w-[580px] ">
                                <span className="text-[36px] w-full font-roboto font-semibold  leading-[44px]  text-okuro-orange">
                                    Kết nối{" "}
                                    <span className="text-okuro-color-text">
                                        thông tin giữa nhà trường với phụ huynh học sinh
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <span className="text-okuro-color-text font-roboto text-2xl font-normal leading-[30px]">
                                    Dễ dàng cập nhật thông tin quá trình học tập, rèn luyện
                                </span>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-base font-normal leading-[30px]">
                                        Quản lý và cập nhật nhanh chóng thông tin của trường theo năm học: Tổng số giáo
                                        viên / học sinh, tình hình học tập, rèn luyện của học sinh, tình hình thu học
                                        phí, sử dụng thư viện, thiết bị…
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-base font-normal leading-[30px]">
                                        Cập nhật và quản lý chất lượng bữa ăn của học sinh
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-base font-normal leading-[30px]">
                                        Triển khai và quản lý chi tiết hành trình đưa đón học sinh
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-base font-normal leading-[30px]">
                                        Chủ động giúp học sinh chuẩn bị bài tốt hơn thông qua thời khóa biểu được cập
                                        nhật liên tục
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[481px] h-[387px]">
                            <img
                                src="../../../AboutOutstandingImg.png"
                                className="object-contain w-[481px] h-[387px]"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex w-[1390px] h-[450px] gap-[70px] justify-center  ">
                        <div className="flex flex-col items-center justify-center w-[481px] h-[387px]">
                            <img
                                src="../../../AboutOutstandingImg2.png"
                                className="object-contain w-[481px] h-[387px]"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col  w-[600px] gap-3 h-[410px]">
                            <div className="flex w-[580px] ">
                                <span className="text-[36px] w-full font-roboto font-semibold  leading-[44px]  text-okuro-orange">
                                    Quản Lý <span className="text-okuro-color-text">Thanh Toán trực tuyến</span>
                                </span>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <span className="text-okuro-color-text font-roboto text-2xl font-normal leading-[30px]">
                                    Cập nhật thông báo và trạng thái học phí
                                </span>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-base font-normal leading-[30px]">
                                        Cập nhật đầy đủ thông tin học phí và các chi phí khác
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-base font-normal leading-[30px]">
                                        Thanh toán trực tuyến mọi lúc mọi nơi và lưu trữ hóa đơn điện tử tiện lợi
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-base font-normal leading-[30px]">
                                        Kết nối thông tin hai chiều xuyên suốt giữa nhà trường với phụ huynh
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-[1390px] h-[450px] gap-[70px] justify-center  ">
                        <div className="flex flex-col  w-[600px] gap-3 h-[410px]">
                            <div className="flex w-[580px] ">
                                <span className="text-[36px] w-full font-roboto font-semibold  leading-[44px]  text-okuro-orange">
                                    Mạng xã hội <span className="text-okuro-color-text">giáo dục</span>
                                </span>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <span className="text-okuro-color-text font-roboto text-2xl font-normal leading-[30px]">
                                    Mạng lưới kết nối thông tin giá trị và tương tác đa chiều
                                </span>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-base font-normal leading-[30px]">
                                        Rút ngắn khoảng cách giữa nhà trường với phụ huynh qua các chia sẻ giá trị,
                                        thông tin quan trọng
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-base font-normal leading-[30px]">
                                        Không gian chia sẻ giữa phụ huynh trong hành trình nuôi dạy con khỏe mạnh thông
                                        minh
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-base font-normal leading-[30px]">
                                        Lưu giữ những khoảnh khắc quý giá trong hành trình phát triển toàn diện của học
                                        sinh
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-[580px] ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <span className="text-okuro-web-text font-roboto text-base font-normal leading-[30px]">
                                        Chủ động giúp học sinh chuẩn bị bài tốt hơn thông qua thời khóa biểu được cập
                                        nhật liên tục
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[481px] h-[387px]">
                            <img
                                src="../../../AboutOutstandingImg.png"
                                className="object-contain w-[481px] h-[387px]"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="min-w-[60px] mt-5 mb-20 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                </div>
            </div>
            <div className="flex justify-center items-center  w-full h-[765px]">
                <div className="flex flex-col gap-[40px] justify-center  items-center h-full w-full">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange">
                            <span className="text-okuro-color-text">Ý kiến</span> người dùng
                        </span>
                    </div>
                    <div className="flex w-[900px] justify-between items-center min-h-[66px]   ">
                        <div className="w-[74px] h-[32px] ">
                            <img
                                src="../../../AboutArrowLeft.png"
                                className="w-[74px] h-[32px] hover:cursor-pointer"
                                alt=""
                            />
                        </div>
                        <div className="w-[74px] h-[32px] ">
                            <img
                                src="../../../AboutArrowRight.png"
                                className="w-[74px] h-[32px] hover:cursor-pointer"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between w-[1040px] h-[394px] gap-[28px]   ">
                        <div className="flex gap-[100px] ">
                            <div className="flex h-min ">
                                <div className="z-30 absolute h-[42px] w-[54px]   -translate-y-[50%] ">
                                    {" "}
                                    <img src="../../../icon.png" className="w-full h-full" alt="" />
                                </div>
                                <div className="z-10 flex flex-col w-[313px]  justify items-center gap-7 rounded-[24px] border border-red-200 px-9 py-[50px]">
                                    <div id="img" className=" flex justify-center items-center w-[72px] h-[72px]">
                                        <img src="../../../user1.png" alt="" />
                                    </div>
                                    <div className="flex">
                                        <span className="text-[16px] w-full font-roboto font-black text-center leading-[23px]  text-okuro-orange">
                                            Phụ huynh{" "}
                                            <span className=" text-okuro-name-text-user text-center">
                                                {" "}
                                                em Nguyễn Anh Bằng <br /> (Lớp 8)
                                            </span>
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                            Okuro giúp tôi quản lý việc học tập và điểm số của con dễ dàng.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-min">
                                <div className="z-30 absolute h-[42px] w-[54px]   -translate-y-[50%] ">
                                    {" "}
                                    <img src="../../../icon.png" className="w-full h-full" alt="" />
                                </div>
                                <div className="z-10 flex flex-col w-[313px] h-full justify-center items-center gap-7 rounded-[24px] border border-red-200 px-9 py-[50px]">
                                    <div id="img" className=" flex justify-center items-center w-[72px] h-[72px]">
                                        <img src="../../../user2.png" alt="" />
                                    </div>
                                    <div className="flex">
                                        <span className="text-[16px] w-full font-roboto font-black text-center leading-[23px]  text-okuro-orange">
                                            Phụ huynh{" "}
                                            <span className=" text-okuro-name-text-user text-center">
                                                {" "}
                                                bé Hoàng Thảo My <br /> (Lớp 1)
                                            </span>
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                            Bé nhà mình chuẩn bị vào lớp 1. Đây thực sự là một ứng dụng hữu dụng và
                                            triển vọng. Từ việc tuyển sinh cho bé vào lớp 1 và vượt cấp đều rất thuận
                                            tiện. Mình yên tâm hơn về việc quản lý con và kết nối với nhà trường.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-min">
                                <div className="z-30 absolute h-[42px] w-[54px]   -translate-y-[50%] ">
                                    {" "}
                                    <img src="../../../icon.png" className="w-full h-full" alt="" />
                                </div>
                                <div className="z-10 flex flex-col w-[313px] h-full justify-center items-center gap-7 rounded-[24px] border border-red-200 px-9 py-[50px]">
                                    <div id="img" className=" flex justify-center items-center w-[72px] h-[72px]">
                                        <img src="../../../user3.png" alt="" />
                                    </div>
                                    <div className="flex">
                                        <span className="text-[16px] w-full font-roboto font-black text-center leading-[23px]  text-okuro-orange">
                                            Phụ huynh{" "}
                                            <span className=" text-okuro-name-text-user text-center">
                                                {" "}
                                                bạn Trương Văn Nam <br /> (Lớp 12)
                                            </span>
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                            Nam chuẩn bị tốt nghiệp thì tôi mới biết đến ứng dụng này. Hy vọng ứng dụng
                                            Okuro sẽ phát triển rộng rãi cho nhiều trường để giúp mọi người dễ theo dõi
                                            các con. Cảm ơn Okuro.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-[60px] mt-5 mb-20 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                </div>
            </div>
            <div className="flex justify-center items-center  w-full h-[1194px]  ">
                <div className="flex flex-col gap-[40px] justify-center  items-center h-full w-full">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange">
                            <span className="text-okuro-color-text">Tổng quan</span> giao diện
                        </span>
                    </div>
                    <div className="flex items-center justify-center w-full h-[916px] gap-[70px] bg-gradient-to-bl from-okuro-linear-from3 to-okuro-linear-to3  overflow-hidden ">
                        <img src="../../../PhoneUI.png" className=" z-30 object-contain w-[1390x] h-[916px]" alt="" />
                        <div className="absolute w-full h-[636px] bg-cyan-200 opacity-20"></div>
                        <div className="z-20 absolute w-[300px] h-[300px] bg-gradient-to-b from-okuro-linear-from4 to-okuro-primary rotate-[33deg] rounded-[38px]"></div>
                    </div>

                    <div className="min-w-[60px] mt-5 mb-20 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                </div>
            </div>

            {/* <div className="flex flex-col justify-between items-center  w-full h-[1023px] bg-red-200 ">
                <div className="flex flex-col gap-[120px] justify-center  items-center h-full w-full">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange">
                            <span className="text-okuro-color-text">Trở thành</span> người dùng
                        </span>
                    </div>
                    <div id="Utilities" className="flex justify-center h-full bg-purple-50">
                        <div
                            id="background"
                            className="absolute h-[65%] w-full bg-okuro-background desktop:h-[90%] pc:h-[65%] myscreen:h-[55%] overflow-x-hidden"
                        ></div>
                        <Carousel
                            className="rounded-xl w-[1200px] h-[700px] mb-20 overflow-y-hidden"
                            prevArrow={false}
                            nextArrow={false}
                            navigation={({ setActiveIndex, activeIndex, length }) => (
                                <div className="absolute top-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                    {new Array(length).fill("").map((_, i) => (
                                        <div
                                            key={i}
                                            className={clsx(" ", {
                                                "opacity-100": activeIndex === i,
                                                "opacity-60": activeIndex != i,
                                            })}
                                            onClick={() => setActiveIndex(i)}
                                        >
                                            {i == 0 ? (
                                                <div className="flex   bg-[url('../../../btnNavigate.png')]   h-11 w-[233px]  items-center justify-center cursor-pointer rounded-lg transition-all">
                                                    <span className="font-roboto text-[24px] font-black text-white leading-[133%]">
                                                        Tải và đăng ký
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className="flex bg-[url('../../../btnNavigate.png')] bg-cover h-11   items-center justify-center cursor-pointer rounded-lg transition-all">
                                                    <span className="font-roboto text-[24px] font-black text-white leading-[133%]">
                                                        Chọn trường và sử dụng
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        >
                            <Carousel
                                className="rounded-xl h-[900px] overflow-hidden"
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
                                <div className="flex justify-center pt-[40px]   h-[900px] ">
                                    <div className="flex w-full   h-[642px] p-20 gap-20">
                                        <div className="flex flex-col items-center justify-center w-[400px] h-[482px]">
                                            <img
                                                src="../../../AboutSignUp1.png"
                                                className="object-contain min-w-[400px] h-full"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                            <div
                                                id="tabcontent1"
                                                className="h-full w-full bg-[url('../../../bgtab5.png')]  bg-right-bottom bg-no-repeat"
                                            >
                                                <div className="flex">
                                                    <div className="h-9 w-9">
                                                        <img src="../../../xanh1.png" alt="" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div>
                                                            <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                                Tải ứng dụng{" "}
                                                                <span className="text-okuro-web-text"> Okuro</span>
                                                            </span>
                                                        </div>
                                                        <div className="flex">
                                                            <div className="w-full h-full">
                                                                <span className="font-roboto text-[15px] font-normal leading-[25px]">
                                                                    Tải ứng dụng miễn phí bằng cách tìm kiếm từ khóa
                                                                    "Okuro" trên App Store hoặc Google Play Store. Hoặc
                                                                    quét mã QR để tải Okuro:
                                                                </span>
                                                            </div>
                                                            <div className="w-full h-full">
                                                                <img src="../../../QR.png" className="" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <li>
                                                    <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                        <span className="text-okuro-web-text">Đăng ký tài khoản</span>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                        <span className="text-okuro-web-text">Nhập số điện thoại</span>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                        <span className="text-okuro-web-text">Nhập mã xác minh</span>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="text-xl font-roboto font-normal leading-[170%] text-okuro-orange">
                                                        <span className="text-okuro-web-text">
                                                            Tạo mật khẩu đăng nhập
                                                        </span>
                                                    </span>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center   h-[900px] ">
                                    <div className="flex w-full   h-[642px] p-20 gap-20">
                                        <div className="flex flex-col items-center justify-center w-[400px] h-[482px]">
                                            <img
                                                src="../../../imgtab52.png"
                                                className="object-contain min-w-[400px] h-full"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex flex-col gap-4 justify-start items-start h-full w-full ">
                                            <div
                                                id="tabtitle1"
                                                className="flex items-center justify-center w-[344px] min-w-[344px] min-h-[44px] h-[44px] bg-[url('../../../utilitiesTitle52.png')] bg-contain bg-no-repeat "
                                            >
                                                <p className="text-2xl font-black align-middle h-[32px]  font-roboto text-white ">
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

                            <div className="flex justify-center items-center h-full p-20 ">
                                <div className="flex flex-col gap-4 justify-center items-start h-full w-full ">
                                    <div className="flex">
                                        <p className="font-roboto text-5xl text-okuro-orange font-black leading-[65px]">
                                            Khám phá tiện ích{" "}
                                            <span className="text-okuro-web-text">trên nền tảng số hóa</span> “Quản lý
                                            giáo dục”
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <p className="text-okuro-web-text font-roboto text-xl font-light leading-[30px]">
                                            Okuro tiên phong trong việc đưa công nghệ số vào công tác hoạt động tại
                                            trường học
                                        </p>
                                    </div>
                                    <div id="br" className="w-[82px] h-[6px] rounded-[63px] bg-okuro-color-text"></div>
                                    <div className="flex gap-4">
                                        <div>
                                            <img src="../../../google.png" alt="" className="hover:cursor-pointer" />
                                        </div>
                                        <div>
                                            <img src="../../../appstore.png" alt="" className="hover:cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center h-full w-full">
                                    <img
                                        src="../../../banner.png"
                                        className="object-contain w-[673px] h-[526px]"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="min-w-[60px] mt-5 mb-20 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
            </div> */}
            <div className="flex justify-center items-center  w-full h-[788px]">
                <div className="flex flex-col gap-[120px] justify-center  items-center h-full w-full">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange">
                            <span className="text-okuro-color-text">Đối tác</span> đồng triển khai
                        </span>
                    </div>
                    <div className="flex flex-col justify-between w-[1040px] h-[394px] gap-[24px] ">
                        <div className="flex gap-[100px]">
                            <div className="w-[185px] h-[185px]">
                                <img src="../../../AboutBussiness1.png" className="w-[185px] h-[185px]" alt="" />
                            </div>
                            <div className="w-[185px] h-[185px]">
                                <img src="../../../AboutBussiness2.png" className="w-[185px] h-[185px]" alt="" />
                            </div>
                            <div className="w-[185px] h-[185px]">
                                <img src="../../../AboutBussiness3.png" className="w-[185px] h-[185px]" alt="" />
                            </div>
                            <div className="w-[185px] h-[185px]">
                                <img src="../../../AboutBussiness4.png" className="w-[185px] h-[185px]" alt="" />
                            </div>
                        </div>
                        <div className="flex gap-[100px] justify-center">
                            <div className="w-[185px] h-[185px]">
                                <img src="../../../AboutBussiness5.png" className="w-[185px] h-[185px]" alt="" />
                            </div>
                            <div className="w-[185px] h-[185px]">
                                <img src="../../../AboutBussiness6.png" className="w-[185px] h-[185px]" alt="" />
                            </div>
                            <div className="w-[185px] h-[185px]">
                                <img src="../../../AboutBussiness7.png" className="w-[185px] h-[185px]" alt="" />
                            </div>
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

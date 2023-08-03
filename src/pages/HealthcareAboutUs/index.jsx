import Contact from "../../components/CustomerContact";
import Footer from "../../components/HealthcareFooter";
import { Carousel, IconButton, tabs } from "@material-tailwind/react";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import clsx from "clsx";
import HealthcareAboutPagination from "../../components/HealthcareAboutPagination";
import { useContext } from "react";
import { route } from "../../components/FormDeleteAccount/page";
import { animate, motion, useCycle, AnimatePresence } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import { useTranslation } from "react-i18next";

const imgVariant = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { delay: 0.2, duration: 0.5 },
    },
    exit: { scale: 0.95, opacity: 0, delay: 0.2 },
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

function HealthcareAboutUs() {
    const minMobile = useMediaQuery("(min-width:200px)");
    const maxMobile = useMediaQuery("(max-width:1100px)");
    let isMobile = false;
    minMobile && maxMobile ? (isMobile = true) : (isMobile = false);
    const { t } = useTranslation();
    const [signup, setSignup] = useState(true);
    const [showTitle, setShowTitle] = useState(1);
    const [index, setIndex] = useState({ now: 1, prev: 1 });

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
    const hos = useContext(route);
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
            className="flex flex-col justify-between h-full  "
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
                    <HealthcareAboutPagination></HealthcareAboutPagination>
                ) : (
                    <Carousel
                        className="rounded-xl w-[1200px]  h-[700px] mobile:w-[343px] mobile:h-[] "
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
                                            activeIndex === i ? "bg-okuro-orange w-[32px]" : "bg-okuro-pagination w-4"
                                        }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    >
                        <HealthcareAboutPagination></HealthcareAboutPagination>
                        <HealthcareAboutPagination></HealthcareAboutPagination>
                        <HealthcareAboutPagination></HealthcareAboutPagination>
                        <HealthcareAboutPagination></HealthcareAboutPagination>
                        <HealthcareAboutPagination></HealthcareAboutPagination>
                    </Carousel>
                )}
            </div>
            <div className="flex flex-col items-center justify-center gap-10 p-20 h-auto w-full   mobile:p-0 ">
                <div className="grid grid-cols-6  gap-y-[110px] h-full w-full  desk1000:grid-cols-2  mobile:grid-cols-1 justify-center items-center mobile:gap-[10px] mobile:gap-x-[10px] mobile:gap-y-[60px] ">
                    <div className="col-start-2 desk1000:col-start-1 col-span-2  desk1000:col-span-1 flex flex-col items-center h-min    mobile:col-start-1 mobile:col-span-1   ">
                        <div className="flex flex-col w-auto h-auto items-end mobile:items-start">
                            <div className="z-30 absolute h-[168px] w-[168px] mobile:h-[72px]  mobile:w-[72px]   -translate-y-[50%]  ">
                                {" "}
                                <img src="../../../HealthcareAboutIcon1.png" className="w-full h-full" alt="" />
                            </div>
                            <div className="z-10 flex   flex-col w-[418px]  pt-[80px] pb-[60px] px-[40px] gap-[5px] mobile:gap-[4px] rounded-[24px] mobile:w-[343px] mobile:h-[207px] mobile:pt-[42px] mobile:px-[30px]  mobile:pb-[24px]   border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)]  ">
                                <div className="flex">
                                    <span className="text-[26px] w-full font-roboto font-semibold  leading-[37px]  text-okuro-web-text mobile:text-[20px]  mobile:leading-[26px]   ">
                                        {t("content.Quản lý và triển khai")}
                                    </span>
                                </div>
                                <div className="flex min-h-[120px]">
                                    <span className="text-okuro-body-color text-[18px] font-roboto  font-normal leading-[30px] opacity-[60%]  mobile:text-[14px] mobile:leading-[23px]">
                                        <div className="mb-0">
                                            {t("content.Quản lý số thứ tự theo thời gian thực.")}
                                        </div>
                                        <div className="mb-0">
                                            {t("content.Phân loại đối tượng bệnh nhân (thường và ưu tiên).")}
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-4 desk1000:col-start-2 desk1000:col-span-1  col-span-2 flex flex-col items-center h-min  mobile:col-start-1 mobile:col-span-1   ">
                        <div className="flex flex-col w-auto h-auto items-end">
                            <div className="z-30 absolute h-[168px] w-[168px] mobile:h-[72px]  mobile:w-[72px]   -translate-y-[50%]  ">
                                {" "}
                                <img src="../../../HealthcareAboutIcon2.png" className="w-full h-full" alt="" />
                            </div>
                            <div className="z-10 flex  flex-col w-[418px]  pt-[80px] pb-[60px] px-[40px] gap-[5px] mobile:gap-[4px] rounded-[24px] mobile:w-[343px] mobile:h-[207px] mobile:pt-[42px] mobile:px-[30px]  mobile:pb-[24px] border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)]  ">
                                <div className="flex">
                                    <span className="text-[26px] w-full font-roboto font-semibold  leading-[37px]  text-okuro-web-text mobile:text-[20px]  mobile:leading-[26px]">
                                        {t("content.Đặt lịch khám")}
                                    </span>
                                </div>
                                <div className="flex min-h-[120px]">
                                    <span className="text-okuro-body-color text-[18px] font-roboto  font-normal leading-[30px] opacity-[60%] mobile:text-[14px] mobile:leading-[23px]">
                                        <li className="mb-0">
                                            {" "}
                                            {t("content.Thiết lập cơ chế lựa chọn phòng khám, chuyên khoa khám.")}
                                        </li>
                                        <li className="mb-0"> {t("content.Quản lý số thứ tự khám từ xa.")}</li>
                                        <li className="mb-0"> {t("content.Thanh toán nhanh chóng, tiện lợi.")}</li>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-1 desk1000:col-start-1 desk1000:col-span-1 col-span-2 flex flex-col items-center h-min  mobile:col-start-1 mobile:col-span-1  ">
                        <div className="flex flex-col w-auto h-auto items-end mobile:items-start">
                            <div className="z-30 absolute h-[168px] w-[168px] mobile:h-[72px]  mobile:w-[72px]   -translate-y-[50%]  ">
                                <img src="../../../HealthcareAboutIcon3.png" className="w-full h-full" alt="" />
                            </div>
                            <div className="z-10 flex  flex-col w-[418px]  pt-[80px] pb-[60px] px-[40px] gap-[5px] mobile:gap-[4px]  rounded-[24px] mobile:w-[343px] mobile:h-[207px] mobile:pt-[42px] mobile:px-[30px]  mobile:pb-[24px] border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)]  ">
                                <div className="flex">
                                    <span className="text-[26px] w-full font-roboto font-semibold  leading-[37px]  text-okuro-web-text mobile:text-[20px]  mobile:leading-[26px]">
                                        {t("content.Hồ sơ điện tử")}
                                    </span>
                                </div>
                                <div className="flex min-h-[120px]">
                                    <span className="text-okuro-body-color text-[18px] font-roboto  font-normal leading-[30px] opacity-[60%] mobile:text-[14px] mobile:leading-[23px]">
                                        <li className="mb-0">
                                            {t(
                                                "content.Lưu trữ toàn bộ kết quả khám lâm sàng, phác đồ điều trị trên nền tảng số hóa."
                                            )}
                                        </li>
                                        <li className="mb-0"> {t("content.Tra cứu, truy cập hồ sơ nhanh chóng.")}</li>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-start-3 desk1000:col-start-2 desk1000:col-span-1 col-span-2 flex flex-col items-center h-min  mobile:col-start-1 mobile:col-span-1  ">
                        <div className="flex flex-col w-auto h-auto items-end">
                            <div className="z-30 absolute h-[168px] w-[168px] mobile:h-[72px]  mobile:w-[72px]   -translate-y-[50%]  ">
                                <img src="../../../HealthcareAboutIcon4.png" className="w-full h-full" alt="" />
                            </div>
                            <div className="z-10 flex  flex-col w-[418px]  pt-[80px] pb-[60px] px-[40px] gap-[5px] mobile:gap-[4px] rounded-[24px] mobile:w-[343px] mobile:h-[207px] mobile:pt-[42px] mobile:px-[30px]  mobile:pb-[24px] border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)]  ">
                                <div className="flex">
                                    <span className="text-[26px] w-full font-roboto font-semibold  leading-[37px]  text-okuro-web-text mobile:text-[20px]  mobile:leading-[26px]">
                                        {t("content.Thanh toán trực tuyến")}
                                    </span>
                                </div>
                                <div className="flex min-h-[120px]">
                                    <span className="text-okuro-body-color text-[18px] font-roboto  font-normal leading-[30px] opacity-[60%] mobile:text-[14px] mobile:leading-[23px]">
                                        <li className="mb-0">
                                            {" "}
                                            {t("content.Cập nhật nhanh chóng thông tin viện phí, chi phí khám.")}
                                        </li>
                                        <li className="mb-0">
                                            {t("content.Dễ dàng thanh toán mọi lúc mọi nơi, lưu trữ hóa đơn điện tử.")}
                                        </li>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-start-5 desk1000:col-start-1 desk1000:col-span-1 col-span-2 flex flex-col items-center h-min mobile:col-start-1 mobile:col-span-1  ">
                        <div className="flex flex-col w-auto h-auto items-end mobile:items-start">
                            <div className="z-30 absolute h-[168px] w-[168px] mobile:h-[72px]  mobile:w-[72px]   -translate-y-[50%]  ">
                                <img src="../../../HealthcareAboutIcon5.png" className="w-full h-full" alt="" />
                            </div>
                            <div className="z-10 flex  flex-col w-[418px]  pt-[80px] pb-[60px] px-[40px] gap-[5px] mobile:gap-[4px] rounded-[24px] mobile:w-[343px] mobile:h-[207px] mobile:pt-[42px] mobile:px-[30px]  mobile:pb-[24px] border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)]  ">
                                <div className="flex">
                                    <span className="text-[26px] w-full font-roboto font-semibold  leading-[37px]  text-okuro-web-text mobile:text-[20px]  mobile:leading-[26px]">
                                        {t("content.Bảo mật")}
                                    </span>
                                </div>
                                <div className="flex min-h-[120px]">
                                    <span className="text-okuro-body-color text-[18px] font-roboto  font-normal leading-[30px] opacity-[60%] mobile:text-[14px] mobile:leading-[23px]">
                                        <li className="mb-0">
                                            {t(
                                                "content.Cơ chế mã hóa thông tin theo nguyên tắc mã hóa phân tầng dữ liệu giúp thông tin luôn được bảo mật với trạng thái tốt nhất"
                                            )}
                                        </li>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="min-w-[60px] min-h-[4px] rounded-[63px] mb-10 bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
            </div>
            {hos.hos ? (
                <div className="flex justify-center items-center  w-full h-auto ">
                    <div className="flex flex-col gap-[40px] justify-center  items-center h-ato w-full mobile:flex-col mobile:gap-5 mobile:max-w-[558px]">
                        <div className="flex w-full justify-center items-center min-h-[66px]   ">
                            <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange mobile:text[24px]">
                                {t("content.Chức năng")}{" "}
                                <span className="text-okuro-color-text"> {t("content.nổi bật")}</span>
                            </span>
                        </div>
                        <div className="flex w-[1390px] h-[450px] py-10 gap-[70px] justify-center mobile:flex-col-reverse mobile:w-auto mobile:h-auto mobile:px-4">
                            <div className="flex flex-col justify-center w-[600px] gap-3 h-[410px] mobile:w-full mobile:h-auto">
                                <div className="flex w-[580px] mobile:w-auto mobile:h-auto ">
                                    <span className="text-[36px]  w-full font-roboto font-semibold  leading-[44px] text-okuro-web-text  mobile:text-[20px] mobile:leading-normal">
                                        {t("content.Dẫn bệnh")}
                                    </span>
                                </div>
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                    <span className="text-okuro-color-text font-roboto text-2xl font-normal leading-[30px] mobile:text-[16px] mobile:leading-normal">
                                        {t("content.Dễ dàng hoàn thành các thủ tục bệnh viện")}
                                    </span>
                                </div>
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                    <div className="flex items-start gap-[10px] w-full ">
                                        <div className="flex items-center p-2 pl-[10px] justify-start">
                                            <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                        </div>
                                        <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                            {t(
                                                "content.Giảm thiểu thời gian phức tạp khi không biết quy trình khám bệnh"
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                    <div className="flex items-start gap-[10px] w-full ">
                                        <div className="flex items-center p-2 pl-[10px] justify-start">
                                            <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                        </div>
                                        <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                            {t("content.Tham khảo hồ sơ thông tin người dẫn")}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                    <div className="flex items-start gap-[10px] w-full ">
                                        <div className="flex items-center p-2 pl-[10px] justify-start">
                                            <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                        </div>
                                        <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                            {t("content.Đa dạng gói dịch vụ theo yêu cầu")}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                    <div className="flex items-start gap-[10px] w-full ">
                                        <div className="flex items-center p-2 pl-[10px] justify-start">
                                            <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                        </div>
                                        <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                            {t(
                                                "content.Hỗ trợ chuẩn bị hồ sơ, thủ tục khám bệnh, mua thuốc cho bệnh nhân"
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                    <div className="flex items-start gap-[10px] w-full ">
                                        <div className="flex items-center p-2 pl-[10px] justify-start">
                                            <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                        </div>
                                        <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                            {t("content.Hỗ trợ giải đáp mọi vấn đề trong suốt quá trình dẫn bệnh")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[481px] h-[387px]  mobile:w-[300px] mobile:h-[224px]">
                                <img
                                    src="../../../HealthcareAboutOutstanding1.png"
                                    className="object-contain w-[493px] h-[368px] mobile:w-[300px] mobile:h-[224px]"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex w-[1390px] h-[450px] py-10 gap-[90px] justify-center  mobile:flex-col mobile:w-auto mobile:h-auto mobile:px-4">
                            <div className="flex flex-col items-center justify-center w-[481px] h-[387px]  mobile:w-[300px] mobile:h-[224px]">
                                <img
                                    src="../../../HealthcareAboutOutstanding2.png"
                                    className="object-contain w-[613px] h-[402px]  mobile:w-[300px] mobile:h-[197px]"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-center w-[600px] gap-3 h-[410px] mobile:w-full mobile:h-auto">
                                <div className="flex w-[580px] mobile:w-auto mobile:h-auto">
                                    <span className="text-[36px] w-full font-roboto font-semibold leading-[44px] text-okuro-web-text  mobile:text-[20px] mobile:leading-normal">
                                        {t("content.Tư vấn trực tuyến")}
                                    </span>
                                </div>
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                    <span className="text-okuro-color-text font-roboto text-2xl font-normal leading-[30px] mobile:text-[16px] mobile:leading-normal">
                                        {t("content.Tức thời liên hệ với bác sĩ để được chăm sóc")}
                                    </span>
                                </div>
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                    <div className="flex items-start gap-[10px] w-full ">
                                        <div className="flex items-center p-2 pl-[10px] justify-start">
                                            <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                        </div>
                                        <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                            {t("content.Đặt lịch tư vấn nhanh chóng")}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                    <div className="flex items-start gap-[10px] w-full ">
                                        <div className="flex items-center p-2 pl-[10px] justify-start">
                                            <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                        </div>
                                        <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                            {t("content.Tham khảo thông tin của bác sĩ và đánh giá của người khám")}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                    <div className="flex items-start gap-[10px] w-full ">
                                        <div className="flex items-center p-2 pl-[10px] justify-start">
                                            <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                        </div>
                                        <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                            {t(
                                                "content.Chủ động theo dõi tình trạng sức khỏe, điều trị kịp thời theo lời khuyên của bác sĩ"
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto">
                                    <div className="flex items-start gap-[10px] w-full ">
                                        <div className="flex items-center p-2 pl-[10px] justify-start">
                                            <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                        </div>
                                        <span className="text-okuro-web-text font-roboto text-[16px] font-normal leading-[30px] mobile:text-okuro-body-color">
                                            {t(
                                                "content.Nhận chẩn đoán từ bác sĩ để có đơn thuốc hoặc kế hoạch khám chữa bệnh sớm nhất"
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="min-w-[60px] mt-5 mb-10 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div className="flex justify-center items-center  w-full h-auto ">
                <div className="select-none flex flex-col gap-[40px] justify-center  items-center h-full w-full desk1000:">
                    <div className="flex w-full justify-center items-center min-h-[66px] px-4">
                        <p className="text-[40px]  w-full font-roboto font-semibold text-center align-middle leading-[64px] text-okuro-color-text  mobile:text-[24px] mobile:leading-normal">
                            {t("content.Danh sách các")}
                            <span className="text-okuro-orange"> {t("content.bệnh viện")} </span>{" "}
                            {t("content.sử dụng hệ thống")}
                            <span className="text-okuro-orange"> Okuro</span>
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-[85px] mobile:flex-col mobile:w-[70%] min-w-[275px] mobile:px-0 ">
                        <div className="w-[325px] h-[568px] mobile:w-full mobile:h-auto   desk1000:w-[250px] ">
                            <Sidebar></Sidebar>
                        </div>
                        <div className="flex desk1000:w-[550px]   mobile:hidden">
                            <div
                                src=" "
                                className="w-[989px] h-[666px] desk1000:w-[692px]  desk1000:h-[466px]  bg-cover bg-[url('../../../bgMap.png')] "
                                alt=""
                            >
                                <div className="flex flex-col items-center w-[248px] justify-center gap-8 mt-[64px] ml-8  ">
                                    <img src="../../../imgMoreCard.png" className="w-[250px] h-[160px]  " alt="" />
                                    <div className="flex flex-col justify-around gap-2 w-[243px] h-[140px] desk1000:bg-white px-4 py-3 rounded-xl  border border-white shadow-[0_4px_8px_0px_rgba(59,130,246,0.15)]">
                                        <div className="text-[14px] font-semibold text-okuro-primary">
                                            <p> {t("content.Thông tin bệnh viện")}</p>
                                        </div>
                                        <div className="text-okuro-web-text text-[12px] font-normal leading-[16px] ">
                                            <p>
                                                <span className="font-semibold "> {t("content.Địa chỉ:")} </span>
                                                {t("content.341 Sư Vạn Hạnh, Phường 10, Quận 10, TP HCM")}
                                            </p>
                                        </div>
                                        <div className="text-okuro-web-text text-[12px] font-normal leading-[16px]">
                                            <p>
                                                <span className="font-semibold "> {t("content.Điện thoại:")} </span>
                                                (028) 39271119 <br></br>
                                                <span className="font-semibold "> Fax: </span>
                                                (028) 39270053
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-[60px] mb-20 mobile:mb-10 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                </div>
            </div>
            <div className="flex justify-center items-center  w-full max-h-[765px] h-auto px-4">
                <div className="select-none flex flex-col gap-[40px] mobile:gap-[24px] justify-center  items-center h-full w-full">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange mobile:text-[24px] mobile:leading-normal">
                            <span className="text-okuro-color-text"> {t("content._Ý kiến")}</span>{" "}
                            {t("content._người dùng")}
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
                                                    {t("content.Người dùng")} Phương Bùi
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                                    {t(
                                                        "content.Nhờ Okuro tôi thấy việc đặt kịch khám dễ dàng hơn bao giờ hết"
                                                    )}
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
                                                    {t("content.Người dùng")} Thuha Hatran
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                                    {t(
                                                        "content.Okuro giúp việc thanh toán viện phí của tôi trở nên nhanh gọn, rất hữu ích"
                                                    )}
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
                                                    {t("content.Người dùng")} Hieu Hang
                                                </span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                                    {t(
                                                        "content.Có tính năng hồ sơ điện tử của Okuro tôi không cần phải lưu giữ giấy tờ theo cách truyền thống nữa. Rất tiện lợi và hữu dụng"
                                                    )}
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
                                        <img src="../../../icon.png" className="w-full h-full" alt="" />
                                    </div>
                                    <div className="z-10 flex flex-col w-[313px]  justify items-center gap-7 rounded-[24px] border border-white shadow-[0_4px_40px_0px_rgba(59,130,246,0.20)] px-9 py-[50px]">
                                        <div id="img" className=" flex justify-center items-center w-[72px] h-[72px]">
                                            <img src="../../../HealthcareUser1.png" alt="" />
                                        </div>
                                        <div className="flex">
                                            <span className="text-[16px] w-full font-roboto font-black text-center leading-[23px]  text-okuro-name-text-user ">
                                                {t("content.Người dùng")} Phương Bùi
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                                {t(
                                                    "content.Nhờ Okuro tôi thấy việc đặt kịch khám dễ dàng hơn bao giờ hết"
                                                )}
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
                                                {t("content.Người dùng")} Thuha Hatran
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                                {t(
                                                    "content.Okuro giúp việc thanh toán viện phí của tôi trở nên nhanh gọn, rất hữu ích"
                                                )}
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
                                                {t("content.Người dùng")} Hieu Hang
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-okuro-color-text text-[14px] font-roboto text-center font-normal leading-[20px] opacity-[60%]">
                                                {t(
                                                    "content.Có tính năng hồ sơ điện tử của Okuro tôi không cần phải lưu giữ giấy tờ theo cách truyền thống nữa. Rất tiện lợi và hữu dụng"
                                                )}
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
                            <span className="text-okuro-color-text"> {t("content.Tổng quan")}</span>{" "}
                            {t("content.giao diện")}
                        </span>
                    </div>
                    <div className="flex items-center justify-center w-full h-[916px] mobile:h-auto gap-[70px] bg-gradient-to-bl from-okuro-linear-from3 to-okuro-linear-to3   overflow-hidden ">
                        <img
                            src="../../../HealthPhoneUI.png"
                            className=" z-30 object-contain w-[1390x] h-[916px] mobile:h-auto mobile:w-auto"
                            alt=""
                        />
                        <div className="absolute w-full h-[636px] bg-cyan-200 opacity-20 mobile:h-[174px] "></div>
                        <div className="z-20 absolute w-[300px] h-[300px] desk1000:w-[250px] desk1000:h-[250px] mobile:w-[100px] mobile:h-[100px] bg-gradient-to-b from-okuro-linear-from4 to-okuro-primary rotate-[33deg] rounded-[38px]"></div>
                    </div>

                    <div className="min-w-[60px] mt-5 mb-20 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                </div>
            </div>

            <div className="flex flex-col justify-between items-center  w-full h-[1023px] mobile:hidden">
                <div className="flex flex-col  justify-center  items-center h-full w-full">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange">
                            <span className="text-okuro-color-text"> {t("content.Trở thành")}</span>{" "}
                            {t("content.người dùng")}
                        </span>
                    </div>
                    <div id="Utilities" className="flex justify-center items-center  h-full w-full ">
                        <div className="z-20 flex  rounded-xl w-[1309px] h-[869px]  items-center justify-center overflow-y-hidden">
                            <div className="flex w-[1021px] gap-6 h-[581px] ">
                                <div className="z-10 absolute flex max-w-[1350px] mt-[275px] -ml-[150px] mobile:max-w-full mobile:mt-20 mobile:ml-0 mobile:px-1 w-full justify-between items-center ">
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
                                            <IconButton
                                                variant="text"
                                                color="white"
                                                size="lg"
                                                className=" mobile:h-6 mobile:w-6 text-white     "
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
                                            <IconButton
                                                variant="text"
                                                color="white"
                                                size="lg"
                                                onClick={nextTitle}
                                                className=" mobile:h-6 mobile:w-6 text-white  rounded-[100%] !absolute top-2/4 -translate-y-2/4 !right-0"
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
                                        )}
                                    </div>
                                </div>
                                <div className="z-20">
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
                                                className="min-w-[432px] w-[432px] h-[581px] hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {signup && showTitle == 2 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../AboutSignUp2.png"
                                                alt=""
                                                className="min-w-[432px] w-[432px] h-[581px] hover:cursor-pointer"
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
                                                className="min-w-[432px] w-[432px] h-[581px] hover:cursor-pointer"
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
                                                className="min-w-[432px] w-[432px] h-[581px] hover:cursor-pointer"
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
                                                className="min-w-[432px] w-[432px] h-[581px] hover:cursor-pointer"
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
                                                className="min-w-[432px] w-[432px] h-[581px] hover:cursor-pointer"
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
                                                className="min-w-[432px] w-[432px] h-[581px] hover:cursor-pointer"
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
                                                className="min-w-[432px] w-[432px] h-[581px] hover:cursor-pointer"
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
                                                className="min-w-[432px] w-[432px] h-[581px] hover:cursor-pointer"
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
                                                className="min-w-[432px] w-[432px] h-[581px] hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <div className="flex flex-col gap-4 justify-center items-center h-full w-full ">
                                    <div className="flex  w-full h-[100px]  ">
                                        <div
                                            className={clsx(
                                                "flex bg-okuro-btn-navigate   h-11 w-[251px]  items-center opacity-100 justify-center cursor-default rounded-lg transition-all",
                                                {}
                                            )}
                                        >
                                            <span className="font-roboto text-[24px] font-black text-white leading-[133%]">
                                                {t("content.Tải và đăng ký app")}
                                            </span>
                                        </div>
                                    </div>

                                    <div id="tabcontent1" className="z-20 flex w-full  flex-col gap-8  ">
                                        <div
                                            className="flex gap-8"
                                            onClick={() => {
                                                setShowTitle(1);
                                            }}
                                        >
                                            <div className="flex items-center justify-center min-h-9 min-w-[36px] w-9 h-9">
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
                                                            <span
                                                                className={clsx(
                                                                    "text-xl font-roboto font-normal text-okuro-web-text  leading-[170%] mobile:text-[16px]",
                                                                    {
                                                                        "!text-okuro-orange font-semibold ":
                                                                            showTitle >= 1,
                                                                    }
                                                                )}
                                                            >
                                                                {t("content.Tải ứng dụng")}{" "}
                                                                <span
                                                                    className={clsx(" ", {
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 1,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    Okuro
                                                                </span>
                                                            </span>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                                <AnimatePresence>
                                                    {signup && showTitle == 1 ? (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <span className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                {t(
                                                                    "content.Tải ứng dụng miễn phí bằng cách tìm kiếm từ khóa “Okuro” trên App Store hoặc Google Play Store. Hoặc quét mã QR để tải Okuro"
                                                                )}
                                                                :
                                                            </span>

                                                            <div className=" grow-0">
                                                                <img src="../../../QR.png" className="" alt="" />
                                                            </div>
                                                        </motion.div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </AnimatePresence>
                                                <AnimatePresence>
                                                    {!signup && showTitle == 1 ? (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <span className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                {t(
                                                                    "content.Nhập số điện thoại và mật khẩu để đăng nhập tài khoản Okuro. Nếu không nhớ mật khẩu, chọn “Quên mật khẩu?” để lấy lại mật khẩu"
                                                                )}
                                                            </span>

                                                            <div className=" grow-0">
                                                                <img src="../../../QR.png" className="" alt="" />
                                                            </div>
                                                        </motion.div>
                                                    ) : (
                                                        <></>
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
                                            <div className="flex items-center justify-center min-h-9 min-w-9 w-9 h-9">
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
                                                                {t("content.Đăng ký")}{" "}
                                                                <span
                                                                    className={clsx(" ", {
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 2,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    {t("content.tài khoản")}
                                                                </span>
                                                            </span>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                                <AnimatePresence>
                                                    {signup && showTitle == 2 ? (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <span className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                {t("content.Mở ứng dụng và chọn đăng ký")}
                                                            </span>
                                                        </motion.div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </AnimatePresence>
                                                <AnimatePresence>
                                                    {!signup && showTitle == 2 ? (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <span className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                {t(
                                                                    "content.Vuốt màn hình xuống dưới phần mở rộng của ứng dụng rồi chọn “Giáo dục”"
                                                                )}
                                                            </span>
                                                        </motion.div>
                                                    ) : (
                                                        <></>
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
                                            <div className="flex items-center justify-center min-h-9 min-w-9 w-9 h-9">
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
                                                                {t("content.Nhập")}{" "}
                                                                <span
                                                                    className={clsx(" ", {
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 3,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    {t("content.số điện thoại")}
                                                                </span>
                                                            </span>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                                <AnimatePresence>
                                                    {signup && showTitle == 3 ? (
                                                        <motion.div
                                                            className="flex flex-col "
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <div className="w-full h-full">
                                                                <p className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                    {t(
                                                                        "content.Thiết lập mật khẩu để bảo vệ tài khoản và bấm “Đăng ký”"
                                                                    )}
                                                                </p>
                                                                <p className="text-okuro-color-text font-roboto text-[15px]  leading-[25px] font-light">
                                                                    {t(
                                                                        "content.Lưu ý: Mật khẩu ở 02 ô phải hoàn toàn giống nhau"
                                                                    )}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </AnimatePresence>
                                                <AnimatePresence>
                                                    {!signup && showTitle == 2 ? (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <span className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                {t(
                                                                    "content.Vuốt màn hình xuống dưới phần mở rộng của ứng dụng rồi chọn “Giáo dục”"
                                                                )}
                                                            </span>
                                                        </motion.div>
                                                    ) : (
                                                        <></>
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
                                            <div className="flex items-center justify-center min-h-9 min-w-9 w-9 h-9">
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
                                                                {t("content.Nhập")}{" "}
                                                                <span
                                                                    className={clsx(" ", {
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 4,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    {t("content.mã xác minh")}
                                                                </span>
                                                            </span>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                                <AnimatePresence>
                                                    {signup && showTitle == 4 ? (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <span className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                {t(
                                                                    "content.Vui lòng kiểm tra và nhập chính xác mã xác minh và chọn “Xác nhận”"
                                                                )}
                                                            </span>
                                                        </motion.div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </AnimatePresence>
                                                <AnimatePresence>
                                                    {!signup && showTitle == 4 ? (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <span className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                {t("content.Chọn tên học sinh trong danh sách")}
                                                            </span>
                                                        </motion.div>
                                                    ) : (
                                                        <></>
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
                                            <div className="flex items-center justify-center min-h-9 min-w-9 w-9 h-9">
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
                                                                {t("content.Tạo")}{" "}
                                                                <span
                                                                    className={clsx(" ", {
                                                                        "text-okuro-web-text font-semibold ":
                                                                            showTitle >= 5,
                                                                    })}
                                                                >
                                                                    {" "}
                                                                    {t("content.mật khẩu đăng nhập")}
                                                                </span>
                                                            </span>
                                                        )}
                                                        {!signup && (
                                                            <span className="text-xl font-roboto font-semibold leading-[170%] text-okuro-orange">
                                                                {t("content.Sử dụng tính năng")}{" "}
                                                                <span className="text-okuro-web-text">
                                                                    {t("content.Tên học sinh")}
                                                                </span>
                                                            </span>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                                <AnimatePresence>
                                                    {signup && showTitle == 5 ? (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <div className="w-full h-full">
                                                                <p className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                    {t(
                                                                        "content.Thiết lập mật khẩu để bảo vệ tài khoản và bấm “Đăng ký”"
                                                                    )}
                                                                </p>
                                                                <p className="text-okuro-color-text font-roboto text-[15px]  leading-[25px] font-light">
                                                                    {t(
                                                                        "content.Lưu ý: Mật khẩu ở 02 ô phải hoàn toàn giống nhau"
                                                                    )}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </AnimatePresence>
                                                <AnimatePresence>
                                                    {!signup && showTitle == 5 ? (
                                                        <motion.div
                                                            className="flex gap-4"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: { delay: 0.2 },
                                                            }}
                                                            exit={{ y: -3, transition: { duration: 0.2 } }}
                                                        >
                                                            <p className="text-okuro-color-text font-roboto text-[15px] font-normal leading-[25px] mobile:text-okuro-body-color">
                                                                {t(
                                                                    "content.Sẵn sàng trải nghiệm các tính năng trên ứng dụng Okuro"
                                                                )}
                                                            </p>
                                                        </motion.div>
                                                    ) : (
                                                        <></>
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
            {hos.hos ? (
                <div className="flex justify-center items-center  w-full h-auto mobile:w-auto">
                    <div className="flex flex-col gap-[120px] justify-center  items-center h-auto w-full mobile:gap-[42px]">
                        <div className="flex w-full justify-center items-center min-h-[66px]   ">
                            <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px]  text-okuro-orange mobile:text-[24px] mobile:leading-normal">
                                <span className="text-okuro-color-text"> {t("content._Đối tác")}</span>{" "}
                                {t("content._đồng triển khai")}
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
            ) : (
                <></>
            )}
            <Contact />
            <Footer />
        </motion.div>
    );
}

export default HealthcareAboutUs;

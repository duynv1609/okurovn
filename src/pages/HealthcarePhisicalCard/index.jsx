import Contact from "../../components/CustomerContact";
import Footer from "../../components/HealthcareFooter";
import { Carousel, IconButton, tabs } from "@material-tailwind/react";
import { useState } from "react";
import clsx from "clsx";
import { useContext } from "react";
import { route } from "../../components/FormDeleteAccount/page";
import PaginationPhisical from "../../components/PaginationPhisical";
import { animate, motion, useCycle, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@mui/material";
const imgVariant = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        x: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { delay: 0.4 },
    },
    trans: { delay: 2, duration: 20 },
    exit: { scale: 0.95, opacity: 0, x: 0, transition: { delay: 0.1 } },
};

function PhisicalCard() {
    const minMobile = useMediaQuery("(min-width:200px)");
    const maxMobile = useMediaQuery("(max-width:1000px)");
    let isMobile = false;
    const card = useContext(route);
    minMobile && maxMobile ? (isMobile = true) : (isMobile = false);
    const [phisical1, setPhisical1] = useState(1);
    const [phisical2, setPhisical2] = useState(1);
    return (
        <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between h-full  "
        >
            <div
                id="Slider"
                className="z-20 flex justify-center  h-auto w-full mobile:px-4 mobile:py-4 mobile:overflow-hidden mobile:bg-okuro-background"
            >
                <div
                    id="background"
                    className="absolute h-[650px] w-full bg-okuro-background desktop:h-[600px] pc:h-[600px] myscreen:h-[650px] mobile:hidden overflow-x-hidden"
                >
                    <div className="h-[305px] w-[305px]  rotate-45  rounded-[60px] left-[0px] absolute -translate-x-[80%] top-[53%] -translate-y-1/2 bg-gradient-to-r from-okuro-color-text to-okuro-primary mobile:hidden"></div>
                    <div className="h-[305px] w-[305px]  rotate-45  rounded-[60px] right-[0px] absolute translate-x-[80%] top-[53%] -translate-y-1/2 bg-gradient-to-l from-okuro-color-text to-okuro-primary mobile:hidden"></div>
                </div>
                {isMobile ? (
                    <PaginationPhisical></PaginationPhisical>
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
                                            activeIndex === i ? "bg-okuro-orange w-[32px]" : "bg-okuro-pagination w-4"
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
                )}
            </div>
            <div className="flex flex-col justify-between items-center  w-full h-auto mobile:px-4">
                <div className="flex flex-col  justify-center  items-center h-auto w-full mobile:gap-[24px]">
                    <div className="flex w-full justify-center items-center min-h-[66px]   ">
                        <span className="text-[40px] capitalize w-full font-roboto font-semibold text-center align-middle leading-[64px] text-okuro-color-text  mobile:text-[24px] mobile:leading-normal">
                            Các loại <span className="text-okuro-orange"> thẻ vật lý </span> của Okuro
                        </span>
                    </div>
                    <div id="Phisical1" className="flex justify-center items-center  h-full w-full ">
                        {card.card ? (
                            <div className="z-20 flex  rounded-xl max-w-[1178px] w-full h-auto  items-center justify-center overflow-y-hidden">
                                <div className="flex mobile:flex-col max-w-[1178px] w-full gap-[52px] mobile:gap-[24px] items-center justify-center h-auto overflow-y-hidden">
                                    <div className="">
                                        <AnimatePresence>
                                            {phisical1 == 1 ? (
                                                <motion.img
                                                    variants={imgVariant}
                                                    initial="hidden"
                                                    animate="visible"
                                                    transition="trans"
                                                    exit="exit"
                                                    src="../../../phisical11.png"
                                                    alt=""
                                                    className="min-w-[666px] w-[666x] mobile:w-[300px] mobile:min-w-[300px] h-[443px] mobile:h-[200px] overflow-y-hidden hover:cursor-pointer"
                                                />
                                            ) : (
                                                <></>
                                            )}
                                        </AnimatePresence>
                                        <AnimatePresence>
                                            {phisical1 == 2 ? (
                                                <motion.img
                                                    variants={imgVariant}
                                                    initial="hidden"
                                                    animate="visible"
                                                    transition="trans"
                                                    exit="exit"
                                                    src="../../../phisical12.png"
                                                    alt=""
                                                    className="min-w-[666px] w-[666x] mobile:w-[300px] mobile:min-w-[300px] h-[443px] mobile:h-[200px] overflow-y-hidden hover:cursor-pointer"
                                                />
                                            ) : (
                                                <></>
                                            )}
                                        </AnimatePresence>
                                        <AnimatePresence>
                                            {phisical1 == 3 ? (
                                                <motion.img
                                                    variants={imgVariant}
                                                    initial="hidden"
                                                    animate="visible"
                                                    transition="trans"
                                                    exit="exit"
                                                    src="../../../phisical13.png"
                                                    alt=""
                                                    className="min-w-[666px] w-[666x] mobile:w-[300px] mobile:min-w-[300px] h-[443px] mobile:h-[200px]  hover:cursor-pointer"
                                                />
                                            ) : (
                                                <></>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center mobile:items-center  max-w-[460px] w-full h-auto mobile:px-4 ">
                                        <div className="flex justify-start mobile:items-center">
                                            {phisical1 == 1 && (
                                                <p className="font-roboto text-[30px] font-bold leading-[48px] mobile:text-[20px] mobile:leading-8">
                                                    <span className="text-okuro-name">OKURO</span>
                                                    <span className="text-okuro-bank"> x VietinBank</span>
                                                </p>
                                            )}
                                            {phisical1 == 2 && (
                                                <p className="font-roboto text-[30px] font-bold leading-[48px] mobile:text-[20px] mobile:leading-8">
                                                    <span className="text-okuro-bank">Mặt trước thẻ</span>
                                                </p>
                                            )}
                                            {phisical1 == 3 && (
                                                <p className="font-roboto text-[30px] font-bold leading-[48px] mobile:text-[20px] mobile:leading-8">
                                                    <span className="text-okuro-bank">Mặt sau thẻ</span>
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex mobile:justify-center mobile:items-center gap-[30px] h-[52px] w-full ">
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
                                            <div className="flex flex-col gap-3 w-full h-[164px] font-roboto text-[18px] font-normal mobile:text-[16px] mobile:leading-7 leading-8 text-okuro-body-color">
                                                <p>
                                                    Ngân hàng liên kết:{" "}
                                                    <span className="font-extrabold">VietinBank</span>
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
                                            <div className="flex flex-col gap-3 w-full h-[164px] font-roboto text-[18px] font-normal mobile:text-[16px] mobile:leading-7 leading-8 text-okuro-body-color">
                                                <p>1. Chip điện tử</p>
                                                <p>
                                                    2. Số thẻ:{" "}
                                                    <span className="font-extrabold">1234 5678 9012 3456</span>
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
                                            <div className="flex flex-col gap-3 w-full h-[164px] font-roboto text-[18px] font-normal mobile:text-[16px] mobile:leading-7 leading-8 text-okuro-body-color">
                                                <p>1. Chữ ký của chủ thẻ</p>
                                                <p>2. Mã QR hướng dẫn sử dụng thẻ</p>
                                                <p>3. Giá trị khi sử dụng thẻ</p>
                                                <p>4. Thông tin liên hệ</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div id="Phisical2" className="flex justify-center items-center  h-full w-full ">
                        <div className="z-20 flex  rounded-xl max-w-[1178px] w-full h-auto  items-center justify-center overflow-y-hidden">
                            <div className="flex mobile:flex-col-reverse max-w-[1178px] w-full gap-[52px] mobile:gap-[24px] items-center justify-center h-auto overflow-y-hidden">
                                <div className="flex flex-col gap-4 justify-center mobile:items-center  max-w-[460px] w-full h-auto mobile:px-4 ">
                                    <div className="flex justify-start mobile:items-center">
                                        {phisical2 == 1 && (
                                            <p className="font-roboto text-[30px] font-bold leading-[48px] mobile:text-[20px] mobile:leading-8">
                                                <span className="text-okuro-name">OKURO</span>
                                                <span className="text-okuro-bank"> x SaigonBank</span>
                                            </p>
                                        )}
                                        {phisical2 == 2 && (
                                            <p className="font-roboto text-[30px] font-bold leading-[48px] mobile:text-[20px] mobile:leading-8">
                                                <span className="text-okuro-bank">Mặt trước thẻ</span>
                                            </p>
                                        )}
                                        {phisical2 == 3 && (
                                            <p className="font-roboto text-[30px] font-bold leading-[48px] mobile:text-[20px] mobile:leading-8">
                                                <span className="text-okuro-bank">Mặt sau thẻ</span>
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex mobile:justify-center mobile:items-center gap-[30px] h-[52px] w-full ">
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
                                        <div className="flex flex-col gap-3 w-full h-[164px] font-roboto text-[18px] font-normal mobile:text-[16px] mobile:leading-7 leading-8 text-okuro-body-color">
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
                                        <div className="flex flex-col gap-3 w-full h-[164px] font-roboto text-[18px] font-normal mobile:text-[16px] mobile:leading-7 leading-8 text-okuro-body-color">
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
                                        <div className="flex flex-col gap-3 w-full h-[164px] font-roboto text-[18px] font-normal mobile:text-[16px] mobile:leading-7 leading-8 text-okuro-body-color">
                                            <p>1. Chữ ký của chủ thẻ</p>
                                            <p>2. Mã QR hướng dẫn sử dụng thẻ</p>
                                            <p>3. Giá trị khi sử dụng thẻ</p>
                                            <p>4. Thông tin liên hệ</p>
                                        </div>
                                    )}
                                </div>{" "}
                                <div className=" overflow-hidden">
                                    <AnimatePresence>
                                        {phisical2 == 1 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../phisical21.png"
                                                alt=""
                                                className="min-w-[666px] w-[666x] mobile:w-[300px] mobile:min-w-[300px] h-[443px] mobile:h-[200px] overflow-hidden hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {phisical2 == 2 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../phisical22.png"
                                                alt=""
                                                className="min-w-[666px] w-[666x] mobile:w-[300px] mobile:min-w-[300px] h-[443px] mobile:h-[200px] overflow-hidden hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {phisical2 == 3 ? (
                                            <motion.img
                                                variants={imgVariant}
                                                initial="hidden"
                                                animate="visible"
                                                transition="trans"
                                                exit="exit"
                                                src="../../../phisical23.png"
                                                alt=""
                                                className="min-w-[666px] w-[666x] mobile:w-[300px] mobile:min-w-[300px] h-[443px] mobile:h-[200px]  overflow-hidden hover:cursor-pointer"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isMobile ? (
                        <div className="min-w-[60px] mb-6 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className="flex justify-center gap-[72px] items-center  w-full h-auto ">
                <div className="flex flex-col gap-[40px] justify-center  items-center h-full w-full mobile:flex-col mobile:gap-5">
                    <div className="flex w-[1390px] h-auto gap-[70px] justify-center  items-center mobile:flex-col mobile:w-auto mobile:h-auto mobile:px-4">
                        <div className="flex flex-col items-center justify-center w-[578px] h-[520px] mobile:w-[300px] mobile:min-w-[300px] mobile:h- mobile:h-[275px]">
                            <img
                                src="../../../phisical31.png"
                                className="object-contain w-[578px] h-[520px] mobile:w-[300px] mobile:min-w-[300px] mobile:h- mobile:h-[275px]"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col  w-[600px] gap-4 h-[410px] mobile:w-full mobile:h-auto">
                            <div className="flex w-[580px] mobile:w-auto mobile:h-auto ">
                                <span className="text-[36px] w-full font-roboto font-semibold  leading-[44px]  text-okuro-orange mobile:text-[24px] mobile:leading-normal">
                                    Giá trị <span className="text-okuro-color-text">của thẻ vật lý Okuro</span>
                                </span>
                            </div>
                            <div className=" min-w-[108px] w-[108px] min-h-[6px] bg-okuro-orange rounded-lg mobile:hidden"></div>
                            {card.card ? (
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto ">
                                    <div className="flex items-start gap-[10px] w-full ">
                                        <div className="flex items-center p-2 pl-[10px] justify-start">
                                            <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                        </div>
                                        <p className="text-okuro-body-color font-roboto text-[18px]  font-normal leading-[30px] mobile:text-okuro-body-color">
                                            <span className="font-extrabold">Tiện lợi: </span>
                                            Thẻ có thể sử dụng tại mọi bệnh viện ứng dụng hệ thống công nghệ số hóa
                                            Okuro
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto ">
                                <div className="flex items-start gap-[10px] w-full ">
                                    <div className="flex items-center p-2 pl-[10px] justify-start">
                                        <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                    </div>
                                    <p className="text-okuro-body-color font-roboto text-[18px]  font-normal leading-[30px] mobile:text-okuro-body-color">
                                        <span className="font-extrabold"> Dễ dàng: </span>
                                        Mở / Nạp / Hủy thẻ tại bệnh viện hoặc ngân hàng liên kết
                                    </p>
                                </div>
                            </div>
                            {card.card ? (
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto ">
                                    <div className="flex items-start gap-[10px] w-full ">
                                        <div className="flex items-center p-2 pl-[10px] justify-start">
                                            <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                        </div>
                                        <p className="text-okuro-body-color font-roboto text-[18px]  font-normal leading-[30px] mobile:text-okuro-body-color">
                                            <span className="font-extrabold"> Bảo mật: </span>
                                            Đảm bảo thông tin được bảo mật và lưu giữ lâu dài
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            {card.card ? (
                                <div className="flex flex-col w-[580px] mobile:w-auto mobile:h-auto ">
                                    <div className="flex items-start gap-[10px] w-full ">
                                        <div className="flex items-center p-2 pl-[10px] justify-start">
                                            <div className="h-[15px] w-[15px]   rounded bg-okuro-orange"></div>
                                        </div>
                                        <p className="text-okuro-body-color font-roboto text-[18px]  font-normal leading-[30px] mobile:text-okuro-body-color">
                                            <span className="font-extrabold"> Linh hoạt: </span>
                                            Thanh toán hóa mọi chi phí khám chữa bệnh an toàn, tiết kiệm thời gian
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    {isMobile ? (
                        <div className="min-w-[60px] mb-6 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className="flex justify-center my-[50px] gap-[72px] items-center  w-full h-auto ">
                <div className="flex flex-col gap-[40px] justify-center  items-center h-full w-full">
                    <div className="flex w-[1390px] h-auto gap-[70px] justify-center  items-center mobile:flex-col ">
                        <div className="flex flex-col">
                            <p className="font-roboto text-5xl text-okuro-orange font-black leading-[65px] mobile:text-center mobile:font-semibold mobile:text-[24px] mobile:leading-normal">
                                {isMobile && <span className="text-okuro-web-text">Video </span>}
                                <span>Hướng dẫn sử dụng</span>
                                <br></br>
                                <span className="text-okuro-web-text"> thẻ vật lý Okuro</span>
                            </p>
                            <div
                                id="br"
                                className="w-[82px] h-[6px] rounded-[63px] bg-okuro-orange mobile:hidden"
                            ></div>
                        </div>

                        <div className="flex flex-col items-center justify-center w-[625px] gap-[77px] h-[423px] mobile:w-[343px] mobile:h-[217px]  rounded-[32px]  shadow-[0_4px_20px_0px_rgba(59,130,246,0.15)] overflow-hidden">
                            <iframe
                                src="https://www.youtube.com/embed/ZpeOHAHDHM4"
                                className="w-full h-full bg-blue-200"
                            ></iframe>
                        </div>
                    </div>
                    {isMobile ? (
                        <div className="min-w-[60px] mb-6 min-h-[4px] w-[60px] h-[4px] rounded-[63px] bg-gradient-to-r from-okuro-color-text to-okuro-primary"></div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>

            <Contact />
            <Footer />
        </motion.div>
    );
}

export default PhisicalCard;

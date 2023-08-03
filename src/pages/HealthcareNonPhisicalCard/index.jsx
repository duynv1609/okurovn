import Contact from "../../components/CustomerContact";
import Footer from "../../components/HealthcareFooter";
import { Carousel, IconButton, tabs } from "@material-tailwind/react";
import { useState } from "react";

import PaginationPhisicalNon from "../../components/PaginationPhisicalNon";
import EmptyWallet1 from "./EmptyWallet1";
import BoxSearch1 from "./BoxSearch1";
import Code11 from "./Code11";
import ChartSquare1 from "./ChartSquare1";
import { animate, motion } from "framer-motion";
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
const num = (185 / (161 * 12 + 24 * 11)) * 100;

function NonPhisicalCard() {
    const minMobile = useMediaQuery("(min-width:200px)");
    const maxMobile = useMediaQuery("(max-width:1000px)");
    let isMobile = false;
    minMobile && maxMobile ? (isMobile = true) : (isMobile = false);

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
                    <PaginationPhisicalNon></PaginationPhisicalNon>
                ) : (
                    <Carousel
                        className="rounded-xl w-[1200px]  h-[700px] mobile:w-[343px] mobile:h-[] "
                        loop={!isMobile}
                        prevArrow={
                            !isMobile
                                ? ({ handlePrev }) => (
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
                                  )
                                : !isMobile
                        }
                        nextArrow={
                            !isMobile
                                ? ({ handleNext }) => (
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
                                  )
                                : !isMobile
                        }
                        navigation={
                            !isMobile
                                ? ({ setActiveIndex, activeIndex, length }) => (
                                      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                          {new Array(length).fill("").map((_, i) => (
                                              <span
                                                  key={i}
                                                  className={`block h-1 cursor-pointer rounded-2xl transition-all  ${
                                                      activeIndex === i
                                                          ? "bg-okuro-orange w-[32px]"
                                                          : "bg-okuro-pagination w-4"
                                                  }`}
                                                  onClick={() => setActiveIndex(i)}
                                              />
                                          ))}
                                      </div>
                                  )
                                : !isMobile
                        }
                    >
                        <PaginationPhisicalNon></PaginationPhisicalNon>
                        <PaginationPhisicalNon></PaginationPhisicalNon>
                        <PaginationPhisicalNon></PaginationPhisicalNon>
                        <PaginationPhisicalNon></PaginationPhisicalNon>
                        <PaginationPhisicalNon></PaginationPhisicalNon>
                    </Carousel>
                )}
            </div>

            <div className="flex justify-center my-[50px] gap-[72px] items-center  w-full h-auto ">
                <div className="flex flex-col gap-[40px] justify-center  items-center h-full w-full">
                    <div className="flex w-auto h-auto gap-[70px] justify-center  items-center mobile:flex-col mobile:gap-5 ">
                        <div className="flex flex-col items-center justify-center w-[578px] h-[520px]  mobile:w-[300px] mobile:h-[275px]">
                            <img
                                src="../../../imgPhisicalNon.png"
                                className="object-contain w-[578px] h-[520px]  mobile:w-[300px] mobile:h-[275px]"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center w-[701px] gap-[77px] mobile:w-full h-auto mobile:px-4 mobile:gap-6">
                            <div className="flex gap-20 mobile:flex-col mobile:gap-6">
                                <div className="flex gap-[26px]">
                                    <div>
                                        <img
                                            src="../../../imgPhisicalNonIcon1.png"
                                            alt=""
                                            className="w-[36px] h-[36px] mobile:w-[24px] mobile:h-[24px]"
                                        />
                                    </div>
                                    <div className="flex flex-col w-[275px] h-[72px] gap-2 mobile:h-auto">
                                        <span className="text-okuro-web-text font-roboto text-[32px] mobile:text-[20px] font-bold leading-none ">
                                            25000+
                                        </span>
                                        <span className="text-okuro-body-color text-[16px] font-normal leading-[26px]">
                                            Người tin dùng
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-[26px]">
                                    <div>
                                        <img
                                            src="../../../imgPhisicalNonIcon2.png"
                                            alt=""
                                            className="w-[36px] h-[36px] mobile:w-[24px] mobile:h-[24px]"
                                        />
                                    </div>
                                    <div className="flex flex-col w-[318px] h-[72px] gap-2 mobile:h-auto">
                                        <span className="text-okuro-web-text font-roboto text-[32px] mobile:text-[20px] font-bold leading-none">
                                            Giao dịch siêu tốc
                                        </span>
                                        <span className="text-okuro-body-color text-[16px] font-normal leading-[26px]">
                                            Không tốn phí trung gian
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-20 mobile:flex-col mobile:gap-6">
                                <div className="flex gap-[26px]">
                                    <div>
                                        <img
                                            src="../../../imgPhisicalNonIcon3.png"
                                            alt=""
                                            className="w-[36px] h-[36px] mobile:w-[24px] mobile:h-[24px]"
                                        />
                                    </div>
                                    <div className="flex flex-col w-[275px] h-[72px] gap-2 mobile:h-auto">
                                        <span className="text-okuro-web-text font-roboto text-[32px] mobile:text-[20px] font-bold leading-none">
                                            10+
                                        </span>
                                        <span className="text-okuro-body-color text-[16px] font-normal leading-[26px]">
                                            Bệnh viện áp dụng thanh toán
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-[26px]">
                                    <div>
                                        <img
                                            src="../../../imgPhisicalNonIcon4.png"
                                            alt=""
                                            className="w-[36px] h-[36px] mobile:w-[24px] mobile:h-[24px]"
                                        />
                                    </div>
                                    <div className="flex flex-col w-[318px] h-[72px] gap-2 mobile:h-auto">
                                        <span className="text-okuro-web-text font-roboto text-[32px] mobile:text-[20px] font-bold leading-none">
                                            An toàn và bảo mật
                                        </span>
                                        <span className="text-okuro-body-color text-[16px] font-normal leading-[26px]">
                                            Chuẩn quốc tế
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-20 mobile:flex-col mobile:gap-6">
                                <div className="flex gap-[26px]">
                                    <div>
                                        <img
                                            src="../../../imgPhisicalNonIcon5.png"
                                            alt=""
                                            className="w-[36px] h-[36px] mobile:w-[24px] mobile:h-[24px]"
                                        />
                                    </div>
                                    <div className="flex flex-col w-[275px] h-[72px] gap-2 mobile:h-auto">
                                        <span className="text-okuro-web-text font-roboto text-[32px] mobile:text-[20px] font-bold leading-none">
                                            50+
                                        </span>
                                        <span className="text-okuro-body-color text-[16px] font-normal leading-[26px]">
                                            Đối tác đồng hành
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-[26px]">
                                    <div>
                                        <img
                                            src="../../../imgPhisicalNonIcon6.png"
                                            alt=""
                                            className="w-[36px] h-[36px] mobile:w-[24px] mobile:h-[24px]"
                                        />
                                    </div>
                                    <div className="flex flex-col w-[318px] h-[72px] gap-2 mobile:h-auto">
                                        <span className="text-okuro-web-text font-roboto text-[32px] mobile:text-[20px] font-bold leading-none">
                                            Đối tác đồng hành
                                        </span>
                                        <span className="text-okuro-body-color text-[16px] font-normal leading-[26px]">
                                            Không tiền mặt
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex justify-center my-[50px] gap-[72px] items-center  w-full h-auto ">
                <div className="flex flex-col gap-[40px] justify-center  items-center h-full w-full">
                    <div className="flex w-[1390px] h-auto gap-[70px] justify-center  items-center ">
                        <div className="flex flex-col">
                            <p className="font-roboto text-5xl text-okuro-orange font-black leading-[65px]">
                                <span>Tính năng</span>
                                <span className="text-okuro-web-text"> nổi bật</span>
                            </p>
                            <div id="br" className="w-[82px] h-[6px] rounded-[63px] bg-okuro-orange"></div>
                        </div>

                        <div className="flex flex-col items-center justify-center w-[219px] gap-[77px] h-[108px] bg-red-100">
                            <iframe
                                src="https://www.youtube.com/embed/5Qtj_9eV4hU"
                                className="w-full h-full bg-blue-200"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="font-roboto flex justify-center mb-[50px] gap-[72px] items-center  w-full h-auto mobile:flex-col mobile:gap-6 ">
                <div className="flex flex-col">
                    <p className="font-roboto text-5xl text-okuro-orange font-black leading-[65px] text-center mobile:text-[24px] mobile:font-semibold">
                        <span>Tính năng</span>
                        <span className="text-okuro-web-text"> nổi bật</span>
                    </p>
                    <div id="br" className="w-[82px] h-[6px] rounded-[63px] bg-okuro-orange mobile:hidden"></div>
                </div>
                <div className="flex w-auto h-auto text-center gap-[35px] mobile:gap-4">
                    <div className="flex h-auto w-auto flex-col items-center justify-between gap-[30px] pt-[79px] mobile:pt-10">
                        <div className="flex w-full flex-col items-center gap-[19px] rounded-[40px] mobile:rounded-[20px] bg-white mobile:px-4 mobile:py-[21px] mobile:gap-2 px-[49px] pb-[106px] pt-[39px] drop-shadow-lg [box-shadow-width:1px] [box-shadow:0px_0px_0px_1px_rgba(242,_242,_242,_1)_inset] mobile:w-[164px] mobile:h-[219px] ">
                            <div className="flex w-[121px] h-[121px] mobile:min-h-[64px] mobile:w-[64px]  items-center justify-center rounded-[20px] bg-[#F1F7FF] ">
                                <BoxSearch1 className="h-[74px] w-[74px]  mobile:h-[39px] mobile:w-[39px]" />
                            </div>
                            <p className="mt-[3px] w-full text-2xl font-[600] text-[#010D82] mobile:text-base mobile:font-semibold">
                                Tiện lợi
                            </p>
                            <p className="h-11 w-[210px] text-base font-[400] leading-[1.4] mobile:leading-tight mobile:h-full mobile:w-full text-[#64748B] mobile:text-base mobile:font-normal ">
                                Liên kết với tất cả thẻ ATM của Ngân hàng đối tác
                            </p>
                        </div>
                        <div className="flex w-full flex-col items-center gap-[19px] rounded-[40px] mobile:rounded-[20px] bg-white mobile:px-4 mobile:py-[21px] mobile:gap-2 px-[33px] pb-[106px] pt-[39px] drop-shadow-lg [box-shadow-width:1px] [box-shadow:0px_0px_0px_1px_rgba(242,_242,_242,_1)_inset] mobile:w-[164px] mobile:h-[219px] ">
                            <div className="flex w-[121px] h-[121px] mobile:min-h-[64px] mobile:w-[64px]  items-center justify-center rounded-[20px] bg-[#FFF2F8] ">
                                <Code11 className="h-[74px] w-[74px]  mobile:h-[39px] mobile:w-[39px]" />
                            </div>
                            <p className=" w-[108px] text-2xl font-[600] text-[#010D82] mobile:text-base mobile:font-semibold">
                                Bảo mật
                            </p>
                            <p className="h-11 w-[242px] text-base font-[400] leading-[1.4] mobile:leading-tight mobile:h-full mobile:w-full text-[#64748B] mobile:text-base mobile:font-normal ">
                                Xác nhận giao dịch bằng mật khẩu 6 số và mã OTP qua SMS
                            </p>
                        </div>
                    </div>
                    <div className=" flex h-[427px] w-auto flex-col items-center justify-between gap-[30px] ">
                        <div className="flex w-full flex-col items-center gap-[19px] rounded-[40px] mobile:rounded-[20px] bg-white mobile:px-4 mobile:py-[21px] mobile:gap-2 px-[54px] pb-[129px] pt-[39px] drop-shadow-lg [box-shadow-width:1px] [box-shadow:0px_0px_0px_1px_rgba(242,_242,_242,_1)_inset] mobile:w-[164px] mobile:h-[219px] ">
                            <div className="flex w-[121px] h-[121px] mobile:min-h-[64px] mobile:w-[64px]  items-center justify-center rounded-[20px] bg-[#FFF7E3] ">
                                <EmptyWallet1 className="h-[74px] w-[74px]  mobile:h-[39px] mobile:w-[39px]" />
                            </div>
                            <p className="mt-0.5 w-[200px] text-2xl font-[600] text-[#010D82] mobile:text-base mobile:font-semibold">
                                Nhanh chóng
                            </p>
                            <p className="h-[22px] w-[141px] text-base font-[400] leading-[1.4] mobile:leading-tight mobile:h-full mobile:w-full text-[#64748B] mobile:text-base mobile:font-normal ">
                                Thanh toán siêu tốc
                            </p>
                        </div>
                        <div className="flex w-full flex-col items-center gap-[19px] rounded-[40px] mobile:rounded-[20px] bg-white mobile:px-4 mobile:py-[21px] mobile:gap-2 px-[38px] pb-[41px] pt-[39px] drop-shadow-lg [box-shadow-width:1px] [box-shadow:0px_0px_0px_1px_rgba(242,_242,_242,_1)_inset] mobile:w-[164px] mobile:h-[219px] ">
                            <div className="flex w-[121px] h-[121px] mobile:min-h-[64px] mobile:w-[64px]  items-center justify-center rounded-[20px] bg-[#DEFFEE] ">
                                <ChartSquare1 className="h-[74px] w-[74px]  mobile:h-[39px] mobile:w-[39px]" />
                            </div>
                            <p className="mt-[3px] w-[232px] text-2xl font-[600] text-[#010D82] mobile:text-base mobile:font-semibold">
                                An toàn
                            </p>
                            <p className="h-[110px] w-52 text-base font-[400] leading-[1.4] mobile:leading-tight mobile:h-full mobile:w-full text-[#64748B] mobile:text-base mobile:font-normal ">
                                Mã hóa thông tin theo nguyên tắc phân tầng dữ liệu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </motion.div>
    );
}

export default NonPhisicalCard;

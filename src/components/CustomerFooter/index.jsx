import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import ScrollButton from "../../components/ScrollButton";
import { useMediaQuery } from "@mui/material";
import { navbar } from "@material-tailwind/react";

const TABS = [
    { Link: "/education/about", Content: "Về chúng tôi" },
    { Link: "/education/utilities", Content: "Tiện ích" },
    { Link: "/education/contact", Content: "Liên hệ" },
];
const INFOR = [
    { Content: "312 Nguyễn Thượng Hiền, Phường 5, Quận Phú Nhuận, Thành phố Hồ Chí Minh" },
    { Content: "service@okuro.vn" },
    { Content: "okuro.vn" },
    { Content: "028 3620 4992" },
];

function Footer({ children }) {
    const isDeskTop = useMediaQuery("(min-width:1000px)");
    const { pathname } = useLocation();
    const navigate = useNavigate();
    return (
        <div className="flex flex-col border-t-2 border-gray-200">
            <header className="flex w-auto h-auto  select-none items-center justify-around   font-medium text-slate-900 border-b-2 border-gray-200  ">
                <div className="flex gap-[100px] mobile:px-4 mobile:pt-6 mobile:pb-10 mobile:gap-6 w-full py-10  items-start justify-center  mobile:flex-col ">
                    <div className="flex flex-col gap-6 w-auto mobile:gap-3">
                        <div className="flex flex-col gap-3 h-[76px]">
                            <div className="flex  items-center justify-start text-green-600 text-3xl">
                                <Link to="/" className=" ">
                                    <img src="../../../LogoFooter.png" alt="" className="w-[235px] h-12" />
                                </Link>
                            </div>
                            <span className="text-sm font-normal leading-[16px] text-okuro-body-color">
                                Sản phẩm của Dolphin Solutions JSC
                            </span>
                        </div>
                        {isDeskTop && (
                            <div className="w-full h-[34px] justify-center items-center gap-4 inline-flex">
                                <a
                                    className="w-[34px] h-[34px] justify-center items-center flex"
                                    href="https://www.facebook.com/okuro.vietnam/"
                                >
                                    <div className="grow shrink basis-0 self-stretch p-[11px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                                        <div className="w-3 h-3 relative flex-col justify-start items-start flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="13"
                                                height="13"
                                                viewBox="0 0 13 13"
                                                fill="none"
                                            >
                                                <g clipPath="url(#clip0_19992_176690)">
                                                    <path
                                                        d="M8.48757 2.22004H9.5832V0.312039C9.39418 0.286039 8.7441 0.227539 7.98702 0.227539C6.40734 0.227539 5.32522 1.22104 5.32522 3.04704V4.72754H3.58203V6.86054H5.32522V12.2275H7.46246V6.86104H9.13515L9.40068 4.72804H7.46196V3.25854C7.46246 2.64204 7.62848 2.22004 8.48757 2.22004Z"
                                                        fill="#3B82F6"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_19992_176690">
                                                        <rect
                                                            width="12.0013"
                                                            height="12"
                                                            fill="white"
                                                            transform="translate(0.488281 0.227539)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="w-[34px] h-[34px] justify-center items-center flex"
                                    href="https://www.linkedin.com/company/dolphin-solutions-jsc/mycompany/"
                                >
                                    <div className="grow shrink basis-0 self-stretch pl-3 pr-[10.98px] pt-[10.79px] pb-[12.21px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                                        <div className="w-[11px] h-[11px] relative flex-col justify-start items-start flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                            >
                                                <g clipPath="url(#clip0_19992_176694)">
                                                    <path
                                                        d="M11.5154 11.0188V11.0184H11.5182V6.98411C11.5182 5.01053 11.0933 3.49023 8.78577 3.49023C7.67648 3.49023 6.93207 4.0989 6.62816 4.67594H6.59607V3.67448H4.4082V11.0184H6.68637V7.38194C6.68637 6.42449 6.86789 5.49865 8.05373 5.49865C9.22215 5.49865 9.23957 6.59132 9.23957 7.44336V11.0188H11.5154Z"
                                                        fill="#3B82F6"
                                                    />
                                                    <path
                                                        d="M0.699219 3.6748H2.98014V11.0187H0.699219V3.6748Z"
                                                        fill="#3B82F6"
                                                    />
                                                    <path
                                                        d="M1.83864 0.0185547C1.10935 0.0185547 0.517578 0.610263 0.517578 1.33947C0.517578 2.06868 1.10935 2.67276 1.83864 2.67276C2.56793 2.67276 3.1597 2.06868 3.1597 1.33947C3.15925 0.610263 2.56747 0.0185547 1.83864 0.0185547V0.0185547Z"
                                                        fill="#3B82F6"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_19992_176694">
                                                        <rect
                                                            width="11.0012"
                                                            height="11"
                                                            fill="white"
                                                            transform="translate(0.517578 0.0185547)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="w-[34px] h-[34px] justify-center items-center flex"
                                    href="https://oa.zalo.me/manage/dashboard"
                                >
                                    <div className="grow shrink basis-0 self-stretch px-2 bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                                        <div className="w-[18px] h-[6.50px] relative flex-col justify-start items-start flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="19"
                                                height="8"
                                                viewBox="0 0 19 8"
                                                fill="none"
                                            >
                                                <g clipPath="url(#clip0_19992_176700)">
                                                    <path
                                                        d="M5.67169 0.818359C5.67572 1.06317 5.67572 1.30799 5.58517 1.54243C5.52481 1.69803 5.42622 1.82666 5.32361 1.95529C4.68377 2.77479 4.04594 3.59637 3.40811 4.42002C2.95942 4.99678 2.51274 5.57562 2.06405 6.15238C2.04795 6.17313 2.02381 6.1918 2.01777 6.22915C2.04594 6.22915 2.0721 6.22915 2.10027 6.22915C3.26324 6.22915 4.42622 6.22915 5.5892 6.22707C5.6556 6.22707 5.67371 6.2416 5.67169 6.31006C5.66566 6.48226 5.66968 6.65653 5.66968 6.82873C5.66767 7.06525 5.47853 7.26649 5.24916 7.26649C3.68175 7.26857 2.11435 7.26649 0.546945 7.26857C0.500667 7.26857 0.480547 7.26027 0.482559 7.20633C0.488595 7.03828 0.472498 6.87023 0.506704 6.70425C0.538897 6.5445 0.611331 6.40342 0.711935 6.27894C1.37793 5.43039 2.04594 4.58392 2.71194 3.73537C3.16868 3.15446 3.62542 2.57355 4.08216 1.99471C4.09222 1.98019 4.10228 1.96566 4.12039 1.93869C4.08417 1.93869 4.05801 1.93869 4.03185 1.93869C2.92723 1.93869 1.82059 1.93869 0.715959 1.94077C0.637488 1.94077 0.623404 1.91794 0.623404 1.84118C0.625416 1.50093 0.623404 1.15861 0.621392 0.818359C2.3055 0.818359 3.9896 0.818359 5.67169 0.818359Z"
                                                        fill="#3B82F6"
                                                    />
                                                    <path
                                                        d="M12.8033 0.818359C12.8013 0.822509 12.7993 0.828733 12.7973 0.832882C12.4432 0.832882 12.087 0.832882 11.7329 0.832882C11.7269 0.828733 11.7228 0.822509 11.7168 0.818359C12.081 0.818359 12.4411 0.818359 12.8033 0.818359Z"
                                                        fill="#3B82F6"
                                                    />
                                                    <path
                                                        d="M9.84774 2.73162C9.84774 2.62996 9.84976 2.54075 9.84774 2.45154C9.84573 2.41005 9.85579 2.39345 9.90207 2.39345C10.2039 2.39552 10.5057 2.39552 10.8055 2.39345C10.8477 2.39345 10.8679 2.40382 10.8618 2.44947C10.8598 2.46191 10.8618 2.47436 10.8618 2.48888C10.8618 4.0532 10.8618 5.61544 10.8638 7.17976C10.8638 7.25444 10.8477 7.27519 10.7733 7.27312C10.6184 7.26689 10.4614 7.27104 10.3065 7.27104C10.051 7.27104 9.87591 7.10922 9.84573 6.83951C9.19382 7.29386 8.48557 7.43494 7.72501 7.21917C7.15961 7.05942 6.71092 6.72125 6.37289 6.22955C5.71696 5.26897 5.80549 3.95154 6.57209 3.08225C7.35076 2.19428 8.74513 1.93287 9.84774 2.73162ZM8.39302 6.26482C9.19382 6.26482 9.84372 5.60092 9.84372 4.78349C9.84372 3.96606 9.1898 3.29594 8.39302 3.29801C7.59623 3.30009 6.95036 3.96191 6.95036 4.77934C6.95036 5.60507 7.59221 6.26482 8.39302 6.26482Z"
                                                        fill="#3B82F6"
                                                    />
                                                    <path
                                                        d="M16.0044 7.31869C14.6644 7.32699 13.5175 6.21288 13.5215 4.76268C13.5255 3.30832 14.6865 2.19421 16.0487 2.22118C17.3766 2.24608 18.4833 3.34981 18.4853 4.78135C18.4853 6.17761 17.3686 7.31869 16.0044 7.31869ZM16.0024 6.26475C16.8032 6.26475 17.4571 5.59255 17.4591 4.77305C17.4611 3.94732 16.7992 3.2689 15.9943 3.27098C15.1976 3.27305 14.5456 3.94525 14.5436 4.7689C14.5456 5.5967 15.1996 6.26683 16.0024 6.26475Z"
                                                        fill="#3B82F6"
                                                    />
                                                    <path
                                                        d="M11.733 0.833008C12.0871 0.833008 12.4432 0.833008 12.7973 0.833008C12.8114 0.859979 12.8054 0.889024 12.8054 0.915995C12.8054 3.00313 12.8054 5.09234 12.8074 7.17948C12.8074 7.24795 12.7933 7.27077 12.7209 7.26869C12.5116 7.26247 12.3044 7.26662 12.0951 7.26662C11.8778 7.26662 11.7189 7.10479 11.7189 6.88073C11.7189 4.88695 11.7189 2.8911 11.7189 0.897323C11.7189 0.876576 11.7088 0.85168 11.733 0.833008Z"
                                                        fill="#3B82F6"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_19992_176700">
                                                        <rect
                                                            width="18"
                                                            height="6.5"
                                                            fill="white"
                                                            transform="translate(0.482422 0.818359)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="w-[34px] h-[34px] justify-center items-center flex"
                                    href="https://www.tiktok.com/@okuro.vn"
                                >
                                    <div className="w-[34px] h-[34px] relative bg-white rounded-[10px] shadow flex-col justify-start items-start flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 35 35"
                                            fill="none"
                                        >
                                            <g filter="url(#filter0_d_19992_176706)">
                                                <rect
                                                    x="0.501953"
                                                    y="0.227539"
                                                    width="34.0037"
                                                    height="34"
                                                    rx="10"
                                                    fill="white"
                                                    shapeRendering="crispEdges"
                                                />
                                                <path
                                                    d="M16.1163 22.8184C15.1546 22.8184 14.2323 22.4149 13.5523 21.6968C12.8723 20.9788 12.4902 20.0048 12.4902 18.9893C12.4902 17.9737 12.8723 16.9998 13.5523 16.2817C14.2323 15.5636 15.1546 15.1602 16.1163 15.1602H17.0016V17.0289H16.1163C15.7485 17.0289 15.389 17.1441 15.0832 17.3598C14.7774 17.5756 14.5391 17.8823 14.3983 18.2411C14.2576 18.5999 14.2207 18.9947 14.2925 19.3756C14.3642 19.7565 14.5413 20.1064 14.8014 20.381C15.0615 20.6557 15.3928 20.8427 15.7535 20.9184C16.1142 20.9942 16.4881 20.9553 16.8279 20.8067C17.1676 20.6581 17.4581 20.4064 17.6624 20.0835C17.8667 19.7606 17.9758 19.3809 17.9758 18.9925V10.8184H19.7454V11.7522C19.7454 12.273 19.9413 12.7724 20.29 13.1407C20.6388 13.5089 21.1117 13.7158 21.6049 13.7158H22.4902V15.5813H21.5987C20.9433 15.5823 20.3002 15.3936 19.7392 15.0358V18.9893C19.7384 20.004 19.3565 20.9769 18.6774 21.6947C17.9982 22.4125 17.0772 22.8166 16.1163 22.8184Z"
                                                    fill="#3B82F6"
                                                />
                                            </g>
                                            <defs>
                                                <filter
                                                    id="filter0_d_19992_176706"
                                                    x="-7.49805"
                                                    y="-3.77246"
                                                    width="50.0039"
                                                    height="50"
                                                    filterUnits="userSpaceOnUse"
                                                    colorInterpolationFilters="sRGB"
                                                >
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix
                                                        in="SourceAlpha"
                                                        type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha"
                                                    />
                                                    <feOffset dy="4" />
                                                    <feGaussianBlur stdDeviation="4" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix
                                                        type="matrix"
                                                        values="0 0 0 0 0.231373 0 0 0 0 0.509804 0 0 0 0 0.964706 0 0 0 0.15 0"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in2="BackgroundImageFix"
                                                        result="effect1_dropShadow_19992_176706"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect1_dropShadow_19992_176706"
                                                        result="shape"
                                                    />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    className="w-[34px] h-[34px] justify-center items-center flex"
                                    href="https://www.youtube.com/@OkuroVietnam"
                                >
                                    <div className="w-[34px] h-[34px] relative bg-white rounded-[10px] shadow flex-col justify-start items-start flex">
                                        {" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 35 35"
                                            fill="none"
                                        >
                                            <g filter="url(#filter0_d_19992_176709)">
                                                <rect
                                                    x="0.504883"
                                                    y="0.227539"
                                                    width="34.0037"
                                                    height="34"
                                                    rx="10"
                                                    fill="white"
                                                    shapeRendering="crispEdges"
                                                />
                                                <path
                                                    d="M14.7291 12.2831C13.6075 11.6626 12.6982 12.171 12.6982 13.4177V22.6185C12.6982 23.8665 13.6075 24.3743 14.7291 23.7543L23.066 19.1423C24.1879 18.5215 24.1879 17.5157 23.066 16.8951L14.7291 12.2831Z"
                                                    fill="#3B82F6"
                                                />
                                            </g>
                                            <defs>
                                                <filter
                                                    id="filter0_d_19992_176709"
                                                    x="-7.49512"
                                                    y="-3.77246"
                                                    width="50.0039"
                                                    height="50"
                                                    filterUnits="userSpaceOnUse"
                                                    colorInterpolationFilters="sRGB"
                                                >
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix
                                                        in="SourceAlpha"
                                                        type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha"
                                                    />
                                                    <feOffset dy="4" />
                                                    <feGaussianBlur stdDeviation="4" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix
                                                        type="matrix"
                                                        values="0 0 0 0 0.231373 0 0 0 0 0.509804 0 0 0 0 0.964706 0 0 0 0.15 0"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in2="BackgroundImageFix"
                                                        result="effect1_dropShadow_19992_176709"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect1_dropShadow_19992_176709"
                                                        result="shape"
                                                    />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col mobile:gap-4">
                        <div className="text-lg font-bold leading-[21px] text-okuro-color-text pb-4">
                            Okuro - Giáo dục
                        </div>
                        <div className="flex flex-col items-start leading-7 gap-4 mobile:gap-0">
                            {TABS.map((tab, index) => (
                                <Link
                                    key={index}
                                    to={tab.Link}
                                    className={clsx(
                                        "text-base font-normal leading-[19px] text-okuro-color-text-li hover:cursor-pointer hover:underline",
                                        {
                                            " font-semibold ": pathname == tab.Link,
                                        }
                                    )}
                                >
                                    {tab.Content}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex  gap-4 flex-col">
                        <div className="text-lg font-bold leading-[21px] text-okuro-color-text">Liên hệ</div>
                        <div className="flex flex-col  gap-4 items-start">
                            {INFOR.map((tab, index, arr) => (
                                <span
                                    key={index}
                                    className={clsx(
                                        "text-base font-normal leading-[19px] text-okuro-color-text-li hover:cursor-pointer hover:underline",
                                        {
                                            " font-semibold ": pathname == tab.Link,
                                            "text-okuro-primary": index == arr.length - 1,
                                        }
                                    )}
                                >
                                    {tab.Content}
                                </span>
                            ))}
                        </div>
                    </div>
                    {!isDeskTop && (
                        <div className="w-full h-[34px] justify-center items-center gap-4 inline-flex">
                            <a
                                className="w-[34px] h-[34px] justify-center items-center flex"
                                href="https://www.facebook.com/okuro.vietnam/"
                            >
                                <div className="grow shrink basis-0 self-stretch p-[11px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                                    <div className="w-3 h-3 relative flex-col justify-start items-start flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="13"
                                            height="13"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0_19992_176690)">
                                                <path
                                                    d="M8.48757 2.22004H9.5832V0.312039C9.39418 0.286039 8.7441 0.227539 7.98702 0.227539C6.40734 0.227539 5.32522 1.22104 5.32522 3.04704V4.72754H3.58203V6.86054H5.32522V12.2275H7.46246V6.86104H9.13515L9.40068 4.72804H7.46196V3.25854C7.46246 2.64204 7.62848 2.22004 8.48757 2.22004Z"
                                                    fill="#3B82F6"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_19992_176690">
                                                    <rect
                                                        width="12.0013"
                                                        height="12"
                                                        fill="white"
                                                        transform="translate(0.488281 0.227539)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <a
                                className="w-[34px] h-[34px] justify-center items-center flex"
                                href="https://www.linkedin.com/company/dolphin-solutions-jsc/mycompany/"
                            >
                                <div className="grow shrink basis-0 self-stretch pl-3 pr-[10.98px] pt-[10.79px] pb-[12.21px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                                    <div className="w-[11px] h-[11px] relative flex-col justify-start items-start flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0_19992_176694)">
                                                <path
                                                    d="M11.5154 11.0188V11.0184H11.5182V6.98411C11.5182 5.01053 11.0933 3.49023 8.78577 3.49023C7.67648 3.49023 6.93207 4.0989 6.62816 4.67594H6.59607V3.67448H4.4082V11.0184H6.68637V7.38194C6.68637 6.42449 6.86789 5.49865 8.05373 5.49865C9.22215 5.49865 9.23957 6.59132 9.23957 7.44336V11.0188H11.5154Z"
                                                    fill="#3B82F6"
                                                />
                                                <path
                                                    d="M0.699219 3.6748H2.98014V11.0187H0.699219V3.6748Z"
                                                    fill="#3B82F6"
                                                />
                                                <path
                                                    d="M1.83864 0.0185547C1.10935 0.0185547 0.517578 0.610263 0.517578 1.33947C0.517578 2.06868 1.10935 2.67276 1.83864 2.67276C2.56793 2.67276 3.1597 2.06868 3.1597 1.33947C3.15925 0.610263 2.56747 0.0185547 1.83864 0.0185547V0.0185547Z"
                                                    fill="#3B82F6"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_19992_176694">
                                                    <rect
                                                        width="11.0012"
                                                        height="11"
                                                        fill="white"
                                                        transform="translate(0.517578 0.0185547)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <a
                                className="w-[34px] h-[34px] justify-center items-center flex"
                                href="https://oa.zalo.me/manage/dashboard"
                            >
                                <div className="grow shrink basis-0 self-stretch px-2 bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                                    <div className="w-[18px] h-[6.50px] relative flex-col justify-start items-start flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="8"
                                            viewBox="0 0 19 8"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0_19992_176700)">
                                                <path
                                                    d="M5.67169 0.818359C5.67572 1.06317 5.67572 1.30799 5.58517 1.54243C5.52481 1.69803 5.42622 1.82666 5.32361 1.95529C4.68377 2.77479 4.04594 3.59637 3.40811 4.42002C2.95942 4.99678 2.51274 5.57562 2.06405 6.15238C2.04795 6.17313 2.02381 6.1918 2.01777 6.22915C2.04594 6.22915 2.0721 6.22915 2.10027 6.22915C3.26324 6.22915 4.42622 6.22915 5.5892 6.22707C5.6556 6.22707 5.67371 6.2416 5.67169 6.31006C5.66566 6.48226 5.66968 6.65653 5.66968 6.82873C5.66767 7.06525 5.47853 7.26649 5.24916 7.26649C3.68175 7.26857 2.11435 7.26649 0.546945 7.26857C0.500667 7.26857 0.480547 7.26027 0.482559 7.20633C0.488595 7.03828 0.472498 6.87023 0.506704 6.70425C0.538897 6.5445 0.611331 6.40342 0.711935 6.27894C1.37793 5.43039 2.04594 4.58392 2.71194 3.73537C3.16868 3.15446 3.62542 2.57355 4.08216 1.99471C4.09222 1.98019 4.10228 1.96566 4.12039 1.93869C4.08417 1.93869 4.05801 1.93869 4.03185 1.93869C2.92723 1.93869 1.82059 1.93869 0.715959 1.94077C0.637488 1.94077 0.623404 1.91794 0.623404 1.84118C0.625416 1.50093 0.623404 1.15861 0.621392 0.818359C2.3055 0.818359 3.9896 0.818359 5.67169 0.818359Z"
                                                    fill="#3B82F6"
                                                />
                                                <path
                                                    d="M12.8033 0.818359C12.8013 0.822509 12.7993 0.828733 12.7973 0.832882C12.4432 0.832882 12.087 0.832882 11.7329 0.832882C11.7269 0.828733 11.7228 0.822509 11.7168 0.818359C12.081 0.818359 12.4411 0.818359 12.8033 0.818359Z"
                                                    fill="#3B82F6"
                                                />
                                                <path
                                                    d="M9.84774 2.73162C9.84774 2.62996 9.84976 2.54075 9.84774 2.45154C9.84573 2.41005 9.85579 2.39345 9.90207 2.39345C10.2039 2.39552 10.5057 2.39552 10.8055 2.39345C10.8477 2.39345 10.8679 2.40382 10.8618 2.44947C10.8598 2.46191 10.8618 2.47436 10.8618 2.48888C10.8618 4.0532 10.8618 5.61544 10.8638 7.17976C10.8638 7.25444 10.8477 7.27519 10.7733 7.27312C10.6184 7.26689 10.4614 7.27104 10.3065 7.27104C10.051 7.27104 9.87591 7.10922 9.84573 6.83951C9.19382 7.29386 8.48557 7.43494 7.72501 7.21917C7.15961 7.05942 6.71092 6.72125 6.37289 6.22955C5.71696 5.26897 5.80549 3.95154 6.57209 3.08225C7.35076 2.19428 8.74513 1.93287 9.84774 2.73162ZM8.39302 6.26482C9.19382 6.26482 9.84372 5.60092 9.84372 4.78349C9.84372 3.96606 9.1898 3.29594 8.39302 3.29801C7.59623 3.30009 6.95036 3.96191 6.95036 4.77934C6.95036 5.60507 7.59221 6.26482 8.39302 6.26482Z"
                                                    fill="#3B82F6"
                                                />
                                                <path
                                                    d="M16.0044 7.31869C14.6644 7.32699 13.5175 6.21288 13.5215 4.76268C13.5255 3.30832 14.6865 2.19421 16.0487 2.22118C17.3766 2.24608 18.4833 3.34981 18.4853 4.78135C18.4853 6.17761 17.3686 7.31869 16.0044 7.31869ZM16.0024 6.26475C16.8032 6.26475 17.4571 5.59255 17.4591 4.77305C17.4611 3.94732 16.7992 3.2689 15.9943 3.27098C15.1976 3.27305 14.5456 3.94525 14.5436 4.7689C14.5456 5.5967 15.1996 6.26683 16.0024 6.26475Z"
                                                    fill="#3B82F6"
                                                />
                                                <path
                                                    d="M11.733 0.833008C12.0871 0.833008 12.4432 0.833008 12.7973 0.833008C12.8114 0.859979 12.8054 0.889024 12.8054 0.915995C12.8054 3.00313 12.8054 5.09234 12.8074 7.17948C12.8074 7.24795 12.7933 7.27077 12.7209 7.26869C12.5116 7.26247 12.3044 7.26662 12.0951 7.26662C11.8778 7.26662 11.7189 7.10479 11.7189 6.88073C11.7189 4.88695 11.7189 2.8911 11.7189 0.897323C11.7189 0.876576 11.7088 0.85168 11.733 0.833008Z"
                                                    fill="#3B82F6"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_19992_176700">
                                                    <rect
                                                        width="18"
                                                        height="6.5"
                                                        fill="white"
                                                        transform="translate(0.482422 0.818359)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <a
                                className="w-[34px] h-[34px] justify-center items-center flex"
                                href="https://www.tiktok.com/@okuro.vn"
                            >
                                <div className="w-[34px] h-[34px] relative bg-white rounded-[10px] shadow flex-col justify-start items-start flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="35"
                                        height="35"
                                        viewBox="0 0 35 35"
                                        fill="none"
                                    >
                                        <g filter="url(#filter0_d_19992_176706)">
                                            <rect
                                                x="0.501953"
                                                y="0.227539"
                                                width="34.0037"
                                                height="34"
                                                rx="10"
                                                fill="white"
                                                shapeRendering="crispEdges"
                                            />
                                            <path
                                                d="M16.1163 22.8184C15.1546 22.8184 14.2323 22.4149 13.5523 21.6968C12.8723 20.9788 12.4902 20.0048 12.4902 18.9893C12.4902 17.9737 12.8723 16.9998 13.5523 16.2817C14.2323 15.5636 15.1546 15.1602 16.1163 15.1602H17.0016V17.0289H16.1163C15.7485 17.0289 15.389 17.1441 15.0832 17.3598C14.7774 17.5756 14.5391 17.8823 14.3983 18.2411C14.2576 18.5999 14.2207 18.9947 14.2925 19.3756C14.3642 19.7565 14.5413 20.1064 14.8014 20.381C15.0615 20.6557 15.3928 20.8427 15.7535 20.9184C16.1142 20.9942 16.4881 20.9553 16.8279 20.8067C17.1676 20.6581 17.4581 20.4064 17.6624 20.0835C17.8667 19.7606 17.9758 19.3809 17.9758 18.9925V10.8184H19.7454V11.7522C19.7454 12.273 19.9413 12.7724 20.29 13.1407C20.6388 13.5089 21.1117 13.7158 21.6049 13.7158H22.4902V15.5813H21.5987C20.9433 15.5823 20.3002 15.3936 19.7392 15.0358V18.9893C19.7384 20.004 19.3565 20.9769 18.6774 21.6947C17.9982 22.4125 17.0772 22.8166 16.1163 22.8184Z"
                                                fill="#3B82F6"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_d_19992_176706"
                                                x="-7.49805"
                                                y="-3.77246"
                                                width="50.0039"
                                                height="50"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset dy="4" />
                                                <feGaussianBlur stdDeviation="4" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0.231373 0 0 0 0 0.509804 0 0 0 0 0.964706 0 0 0 0.15 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_19992_176706"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_19992_176706"
                                                    result="shape"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="w-[34px] h-[34px] justify-center items-center flex"
                                href="https://www.youtube.com/@OkuroVietnam"
                            >
                                <div className="w-[34px] h-[34px] relative bg-white rounded-[10px] shadow flex-col justify-start items-start flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="35"
                                        height="35"
                                        viewBox="0 0 35 35"
                                        fill="none"
                                    >
                                        <g filter="url(#filter0_d_19992_176709)">
                                            <rect
                                                x="0.504883"
                                                y="0.227539"
                                                width="34.0037"
                                                height="34"
                                                rx="10"
                                                fill="white"
                                                shapeRendering="crispEdges"
                                            />
                                            <path
                                                d="M14.7291 12.2831C13.6075 11.6626 12.6982 12.171 12.6982 13.4177V22.6185C12.6982 23.8665 13.6075 24.3743 14.7291 23.7543L23.066 19.1423C24.1879 18.5215 24.1879 17.5157 23.066 16.8951L14.7291 12.2831Z"
                                                fill="#3B82F6"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_d_19992_176709"
                                                x="-7.49512"
                                                y="-3.77246"
                                                width="50.0039"
                                                height="50"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset dy="4" />
                                                <feGaussianBlur stdDeviation="4" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0.231373 0 0 0 0 0.509804 0 0 0 0 0.964706 0 0 0 0.15 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_19992_176709"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_19992_176709"
                                                    result="shape"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
                <ScrollButton />
            </header>
            <div className="w-full h-14 py-3.5 bg-blue-700 justify-center items-center gap-1 inline-flex">
                <div className="w-[2190px] h-[62.93px] flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="w-[2190.01px] h-[0px] border border-orange-600"></div>
                    <div className="w-[2190px] py-3.5 bg-blue-700 justify-center items-center gap-1 inline-flex">
                        <div className="w-7 h-7 relative bg-white rounded-3xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                            >
                                <rect x="0.5" y="0.933594" width="28" height="28" rx="14" fill="white" />
                                <path
                                    d="M19.2435 12.9238C18.5434 12.9238 17.8721 13.0401 17.2446 13.256C17.2418 13.256 17.2405 13.256 17.2391 13.2587C17.1295 13.303 17.0213 13.3515 16.9158 13.4013C16.3458 13.6684 15.8033 13.9853 15.2977 14.3493C15.2923 14.3521 15.2868 14.3562 15.2799 14.3618C13.0358 15.9796 11.4767 18.5053 11.126 21.4047C11.0109 21.8821 10.9492 22.3831 10.9492 22.8979C10.9492 23.4418 11.0177 23.9719 11.1465 24.477C11.1698 24.4867 11.1945 24.4964 11.2164 24.5047C11.826 24.74 12.4809 24.8798 13.1646 24.9088C12.9796 24.1393 12.8824 23.3367 12.8824 22.5091C12.8824 21.7659 12.9618 21.0421 13.1111 20.3459C13.2893 19.5142 13.5674 18.7198 13.9345 17.9766L13.1892 16.7781C13.1892 16.7781 13.7414 17.0937 14.1702 17.5296C14.2086 17.4604 14.2469 17.3898 14.2866 17.322C14.7278 16.5691 15.2662 15.8813 15.8786 15.2696C15.6745 14.997 15.2717 14.597 15.2717 14.597L16.08 15.0717C16.5376 14.6399 17.0322 14.2483 17.5624 13.9078C18.1762 13.5134 18.8352 13.184 19.5312 12.9307C19.4353 12.9266 19.3394 12.9238 19.2435 12.9238Z"
                                    fill="#939598"
                                />
                                <path
                                    d="M14.3958 3.85059C8.69503 3.85059 4.00948 8.3069 3.56285 13.9506C3.33679 14.1693 3.12443 14.4032 2.93263 14.6537C2.91208 14.68 2.8929 14.7063 2.87372 14.7312C2.84768 14.7769 2.83398 14.8322 2.83398 14.8917C2.83398 15.0786 2.98469 15.2294 3.16964 15.2294C3.19294 15.2294 3.21486 15.2266 3.23678 15.2225V15.2239C3.33405 15.199 3.43406 15.1768 3.53271 15.1561C3.70396 21.0614 8.50871 25.8111 14.3958 25.8111C15.8384 25.8111 17.5674 25.263 17.5674 25.263L17.5729 23.6535C16.581 24.0189 15.511 24.2182 14.3958 24.2182C13.26 24.2182 12.1722 24.0106 11.1652 23.6327C11.1502 23.4044 11.1392 23.1733 11.1392 22.9422C11.1392 21.5181 11.4283 20.1632 11.9503 18.9342C12.027 18.7502 12.1106 18.5689 12.1982 18.3917C12.4805 17.8243 12.812 17.2887 13.1888 16.7877C13.3217 16.8694 13.4505 16.9552 13.5779 17.0479C13.6176 17.077 13.6587 17.106 13.6971 17.1365C13.7984 17.2126 13.8971 17.2943 13.9944 17.3787C14.9452 18.1966 15.6466 19.2996 15.9754 20.5576C15.9796 20.5714 15.9823 20.5881 15.9864 20.6033C15.9878 20.6074 15.9878 20.6102 15.9891 20.6143C16.059 20.8455 16.2741 21.0143 16.5248 21.0143C16.8043 21.0143 17.0345 20.8081 17.0783 20.541C17.0797 20.541 17.0797 20.541 17.0811 20.541C17.177 20.1009 17.229 19.6428 17.229 19.1723C17.229 18.7682 17.192 18.3737 17.1181 17.9918C17.0043 17.3801 16.803 16.8002 16.5262 16.266C16.2193 15.6709 15.8193 15.1311 15.348 14.6661C15.3247 14.6426 15.3 14.6205 15.2767 14.5969C15.8891 14.0544 16.6057 13.6296 17.3948 13.3611C17.8346 13.2102 18.2963 13.1092 18.7744 13.0608C18.9772 13.04 19.1813 13.0303 19.3896 13.0303C19.6759 13.0303 19.9582 13.0511 20.2349 13.0884C20.6541 13.1452 21.0597 13.2448 21.446 13.3818V13.3805C21.5118 13.4095 21.5871 13.4247 21.6639 13.4247C21.9749 13.4247 22.2256 13.1701 22.2256 12.8573C22.2256 12.8393 22.2242 12.8227 22.2228 12.8061C22.2215 12.795 22.2201 12.7826 22.2187 12.7729C22.2174 12.7604 22.216 12.748 22.2133 12.7369C22.2119 12.7272 22.2091 12.7162 22.2064 12.7065C22.2064 12.7051 22.205 12.7051 22.205 12.7037C22.205 12.7023 22.2037 12.7009 22.2037 12.6996C22.2023 12.6954 22.2009 12.6912 22.1996 12.6871C22.1968 12.6774 22.1941 12.6663 22.19 12.6566C22.1845 12.64 22.179 12.6262 22.1708 12.6124C22.1585 12.5875 22.1434 12.5639 22.1311 12.5418C22.1311 12.5404 22.1283 12.539 22.1283 12.539C21.8502 12.0519 21.4707 11.6339 21.0172 11.3128C21.0172 11.3115 21.0172 11.3115 21.0172 11.3101C21.0172 10.6153 20.7268 9.99116 20.2582 9.55245C20.2568 9.55107 20.2568 9.55107 20.2555 9.55107C20.1856 9.48741 20.1116 9.4279 20.039 9.36839C20.0349 9.36562 20.0321 9.36285 20.028 9.36008C19.0074 8.55047 17.7305 8.05502 16.3412 8.01904V8.0135C16.2399 8.01073 16.1371 8.00935 16.0357 8.00935C12.6805 8.00935 9.70749 9.66455 7.87438 12.211H7.86341C6.9633 12.211 6.10839 12.4048 5.33568 12.7521C6.27553 8.574 9.98013 5.44489 14.3972 5.44489C19.5225 5.44489 23.6915 9.65625 23.6915 14.8336C23.6915 14.9457 23.6874 15.0564 23.6833 15.1671L25.2561 15.1657C25.263 15.0094 25.2685 14.9914 25.2685 14.8336C25.2671 8.77606 20.3911 3.85059 14.3958 3.85059ZM6.38103 15.2488C6.18374 15.9075 6.05085 16.5954 5.99057 17.3039C5.96453 17.5973 5.9522 17.8949 5.9522 18.1938C5.9522 18.3931 5.95905 18.591 5.97002 18.7875C5.44255 17.6444 5.13703 16.3781 5.10689 15.044C5.46995 15.0633 5.82342 15.1145 6.16867 15.1934C6.23991 15.21 6.31116 15.228 6.38103 15.2488Z"
                                    fill="url(#paint0_linear_19992_129002)"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.7812 20.458H22.5022V23.2051H19.7812V20.458Z"
                                    fill="url(#paint1_linear_19992_129002)"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24.585 20.4581H22.5039V18.3545H24.585V20.4581Z"
                                    fill="url(#paint2_linear_19992_129002)"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.9453 16.7812H22.503V18.3548H20.9453V16.7812Z"
                                    fill="url(#paint3_linear_19992_129002)"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.4883 23.2051H19.7843V24.5143H18.4883V23.2051Z"
                                    fill="#939598"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.9459 19.6637H19.6484V18.3545H20.9459V19.6637Z"
                                    fill="#939598"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M23.9395 17.1202H25.2369V15.8096H23.9395V17.1202Z"
                                    fill="#939598"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M26.647 19.3379H25.3496V20.6471H26.647V19.3379Z"
                                    fill="#939598"
                                />
                                <path
                                    d="M6.38058 15.2486C6.38058 15.2486 4.95436 14.7905 3.23633 15.225C3.74187 14.9538 4.71735 14.3573 6.73405 14.4196C6.63541 14.6368 6.48607 14.8721 6.38058 15.2486Z"
                                    fill="#939598"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_19992_129002"
                                        x1="9.11462"
                                        y1="17.0197"
                                        x2="16.9799"
                                        y2="13.7286"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#262262" />
                                        <stop offset="1" stopColor="#27AAE1" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_19992_129002"
                                        x1="15.8689"
                                        y1="23.9106"
                                        x2="26.3614"
                                        y2="19.8554"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#262262" />
                                        <stop offset="1" stopColor="#27AAE1" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint2_linear_19992_129002"
                                        x1="15.3749"
                                        y1="22.6278"
                                        x2="25.8673"
                                        y2="18.5726"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#262262" />
                                        <stop offset="1" stopColor="#27AAE1" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint3_linear_19992_129002"
                                        x1="14.5167"
                                        y1="20.41"
                                        x2="25.0091"
                                        y2="16.3548"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#262262" />
                                        <stop offset="1" stopColor="#27AAE1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="text-center text-white text-sm font-normal leading-relaxed">
                            ® 2023 All rights reserved
                        </div>
                    </div>
                </div>
            </div>
            {!isDeskTop && (
                <div className="w-full h-14 py-3.5 bg-blue-700 justify-center items-center gap-1 inline-flex">
                    <div className="w-[375px] h-[72px] px-2.5 pt-4 pb-7 bg-blue-700 justify-center items-center gap-2.5 inline-flex">
                        <div className="w-[226px] h-[41px] relative">
                            <div className="w-[226px] h-[41px] left-0 top-0 absolute bg-okuro-orange rounded-[10px] shadow border border-white" />
                            <div className="left-[48px] top-[7px] absolute text-center text-red-50 text-base font-bold uppercase leading-7">
                                Tải Okuro ngay
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Footer;

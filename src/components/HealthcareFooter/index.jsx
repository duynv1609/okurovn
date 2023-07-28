import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import ScrollButton from "../../components/ScrollButton";
import { useMediaQuery } from "@mui/material";

const TABS = [
    { Link: "/healthcare/about", Content: "Về chúng tôi" },
    { Link: "/healthcare/phisical-card", Content: "Thẻ vật lý" },
    { Link: "/healthcare/nonphisical-card", Content: "Thi phi vật lý" },
    { Link: "/healthcare/contact", Content: "Liên hệ" },
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
                    <div className="flex flex-col gap-6 w-[300px] mobile:gap-3">
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
                                <div className="w-[34px] h-[34px] justify-center items-center flex">
                                    <div className="grow shrink basis-0 self-stretch p-[11px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                                        <div className="w-3 h-3 relative flex-col justify-start items-start flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="13"
                                                height="13"
                                                viewBox="0 0 13 13"
                                                fill="none"
                                            >
                                                <g clip-path="url(#clip0_19992_176690)">
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
                                </div>
                                <div className="w-[34px] h-[34px] justify-center items-center flex">
                                    <div className="grow shrink basis-0 self-stretch pl-3 pr-[10.98px] pt-[10.79px] pb-[12.21px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                                        <div className="w-[11px] h-[11px] relative flex-col justify-start items-start flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                            >
                                                <g clip-path="url(#clip0_19992_176694)">
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
                                </div>
                                <div className="w-[34px] h-[34px] justify-center items-center flex">
                                    <div className="grow shrink basis-0 self-stretch px-2 bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                                        <div className="w-[18px] h-[6.50px] relative flex-col justify-start items-start flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="19"
                                                height="8"
                                                viewBox="0 0 19 8"
                                                fill="none"
                                            >
                                                <g clip-path="url(#clip0_19992_176700)">
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
                                </div>
                                <div className="w-[34px] h-[34px] justify-center items-center flex">
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
                                                    shape-rendering="crispEdges"
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
                                                    color-interpolation-filters="sRGB"
                                                >
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                                </div>
                                <div className="w-[34px] h-[34px] justify-center items-center flex">
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
                                                    shape-rendering="crispEdges"
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
                                                    color-interpolation-filters="sRGB"
                                                >
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                                </div>
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
                            <div className="w-[34px] h-[34px] justify-center items-center flex">
                                <div className="grow shrink basis-0 self-stretch p-[11px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                                    <div className="w-3 h-3 relative flex-col justify-start items-start flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="13"
                                            height="13"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                        >
                                            <g clip-path="url(#clip0_19992_176690)">
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
                            </div>
                            <div className="w-[34px] h-[34px] justify-center items-center flex">
                                <div className="grow shrink basis-0 self-stretch pl-3 pr-[10.98px] pt-[10.79px] pb-[12.21px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                                    <div className="w-[11px] h-[11px] relative flex-col justify-start items-start flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                        >
                                            <g clip-path="url(#clip0_19992_176694)">
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
                            </div>
                            <div className="w-[34px] h-[34px] justify-center items-center flex">
                                <div className="grow shrink basis-0 self-stretch px-2 bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                                    <div className="w-[18px] h-[6.50px] relative flex-col justify-start items-start flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="8"
                                            viewBox="0 0 19 8"
                                            fill="none"
                                        >
                                            <g clip-path="url(#clip0_19992_176700)">
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
                            </div>
                            <div className="w-[34px] h-[34px] justify-center items-center flex">
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
                                                shape-rendering="crispEdges"
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
                                                color-interpolation-filters="sRGB"
                                            >
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                            </div>
                            <div className="w-[34px] h-[34px] justify-center items-center flex">
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
                                                shape-rendering="crispEdges"
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
                                                color-interpolation-filters="sRGB"
                                            >
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                            </div>
                        </div>
                    )}
                </div>
                <ScrollButton />
            </header>
            <div className="flex items-center justify-center text-xs w-full my-1">
                <img src="../../../img.png" alt="" />
            </div>
        </div>
    );
}

export default Footer;

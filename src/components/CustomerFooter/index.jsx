import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import ScrollButton from "../../components/ScrollButton";
import { useMediaQuery } from "@mui/material";

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
                    <div className="flex flex-col gap-6 w-[300px] mobile:gap-3">
                        <div className="flex flex-col gap-3 h-[76px]">
                            <div className="flex  items-center justify-start text-green-600 text-3xl">
                                <Link to="/" className=" ">
                                    <img src="../../../LogoFooter.png" alt="" className="w-[235px] h-12" />
                                </Link>
                            </div>
                            <span className="text-sm font-normal leading-[16px]">
                                Sản phẩm của Dolphin Solutions JSC
                            </span>
                        </div>
                        {isDeskTop && (
                            <div className="flex gap-4">
                                <a
                                    href={"https://m.facebook.com/okuro.vietnam"}
                                    className="h-[34px] w-[34px] flex items-center justify-center hover:cursor-pointer"
                                >
                                    <img
                                        src="../../../imgbtn1.png"
                                        alt=""
                                        className="h-[34px] w-[34px]  hover:cursor-pointer"
                                    />
                                </a>
                                <Link className="h-[34px] w-[34px] flex items-center justify-center hover:cursor-pointer bg-cover">
                                    <img
                                        src="../../../imgbtn2.png"
                                        alt=""
                                        className="h-[34px] w-[34px] hover:cursor-pointer"
                                    />
                                </Link>
                                <Link className="h-[34px] w-[34px] flex items-center justify-center hover:cursor-pointer bg-cover">
                                    <img
                                        src="../../../imgbtn3.png"
                                        alt=""
                                        className="h-[34px] w-[34px] hover:cursor-pointer"
                                    />
                                </Link>
                                <Link className="h-[34px] w-[34px] flex items-center justify-center hover:cursor-pointer bg-cover">
                                    <img
                                        src="../../../imgbtn4.png"
                                        alt=""
                                        className="h-[34px] w-[34px] hover:cursor-pointer"
                                    />
                                </Link>
                                <Link className="h-[34px] w-[34px] flex items-center justify-center hover:cursor-pointer bg-cover">
                                    <img
                                        src="../../../imgbtn5.png"
                                        alt=""
                                        className="h-[34px] w-[34px] hover:cursor-pointer"
                                    />
                                </Link>
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
                        <div className="flex w-full  justify-center">
                            <div className="flex gap-4">
                                <a
                                    href={"https://m.facebook.com/okuro.vietnam"}
                                    className="h-[34px] w-[34px] flex items-center justify-center hover:cursor-pointer"
                                >
                                    <img
                                        src="../../../imgbtn1.png"
                                        alt=""
                                        className="h-[34px] w-[34px]  hover:cursor-pointer"
                                    />
                                </a>
                                <Link className="h-[34px] w-[34px] flex items-center justify-center hover:cursor-pointer bg-cover">
                                    <img
                                        src="../../../imgbtn2.png"
                                        alt=""
                                        className="h-[34px] w-[34px] hover:cursor-pointer"
                                    />
                                </Link>
                                <Link className="h-[34px] w-[34px] flex items-center justify-center hover:cursor-pointer bg-cover">
                                    <img
                                        src="../../../imgbtn3.png"
                                        alt=""
                                        className="h-[34px] w-[34px] hover:cursor-pointer"
                                    />
                                </Link>
                                <Link className="h-[34px] w-[34px] flex items-center justify-center hover:cursor-pointer bg-cover">
                                    <img
                                        src="../../../imgbtn4.png"
                                        alt=""
                                        className="h-[34px] w-[34px] hover:cursor-pointer"
                                    />
                                </Link>
                                <Link className="h-[34px] w-[34px] flex items-center justify-center hover:cursor-pointer bg-cover">
                                    <img
                                        src="../../../imgbtn5.png"
                                        alt=""
                                        className="h-[34px] w-[34px] hover:cursor-pointer"
                                    />
                                </Link>
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

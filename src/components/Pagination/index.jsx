import { useMediaQuery } from "@mui/material";
export default function Pagination() {
    const minMobile = useMediaQuery("(min-width:200px)");
    const maxMobile = useMediaQuery("(max-width:1000px)");
    let isMobile = false;
    minMobile && maxMobile ? (isMobile = true) : (isMobile = false);
    return (
        <>
            <div className="flex justify-center items-center h-auto p-20 mobile:w-[343px] mobile:flex-col-reverse mobile:z-50 mobile:p-0">
                <div className="flex flex-col gap-4 justify-center items-start h-full w-full  mobile:gap-3">
                    <div className="flex">
                        <p className="font-roboto text-5xl text-okuro-orange font-black leading-[65px] mobile:text-[36px] mobile:font-bold mobile:leading-tight">
                            Khám phá tiện ích <span className="text-okuro-web-text">trên nền tảng số hóa</span> “Quản lý
                            giáo dục”
                        </p>
                    </div>
                    <div className="flex">
                        <p className="text-okuro-web-text font-roboto text-xl font-light leading-[30px] mobile:text-[16px] mobile:text-okuro-web-text mobile:leading-[24px]">
                            Okuro tiên phong trong việc đưa công nghệ số vào công tác hoạt động tại trường học
                        </p>
                    </div>
                    <div
                        id="br"
                        className="w-[82px] h-[6px] rounded-[63px] mobile:bg-okuro-orange bg-okuro-color-text"
                    ></div>
                    <div className="flex gap-4 mobile:hidden">
                        <div>
                            <a href="https://play.google.com/store/apps/details?id=vn.okuro.app&hl=vi&gl=US&pli=1">
                                <img src="../../../google.png" alt="" className="hover:cursor-pointer" />
                            </a>
                        </div>
                        <div>
                            <a href="https://apps.apple.com/us/app/okuro/id1570372051">
                                <img src="../../../appstore.png" alt="" className="hover:cursor-pointer" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-full w-full">
                    <img
                        src="../../../banner.png"
                        className="object-contain w-[673px] h-[526px] mobile:h-full mobile:w-full"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

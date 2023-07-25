import { useMediaQuery } from "@mui/material";
export default function Pagination() {
    const minMobile = useMediaQuery("(min-width:200px)");
    const maxMobile = useMediaQuery("(max-width:1000px)");
    let isMobile = false;
    minMobile && maxMobile ? (isMobile = true) : (isMobile = false);
    return (
        <>
            <div className="flex justify-center items-center h-full p-20 ">
                <div className="flex flex-col gap-4 justify-center items-start h-full w-full ">
                    <div className="flex">
                        <p className="font-roboto text-5xl text-okuro-orange font-black leading-[65px]">
                            Khám phá tiện ích <span className="text-okuro-web-text">trên nền tảng số hóa</span> “Quản lý
                            giáo dục”
                        </p>
                    </div>
                    <div className="flex">
                        <p className="text-okuro-web-text font-roboto text-xl font-light leading-[30px]">
                            Okuro tiên phong trong việc đưa công nghệ số vào công tác hoạt động tại trường học
                        </p>
                    </div>
                    <div id="br" className="w-[82px] h-[6px] rounded-[63px] bg-okuro-orange mobile:hidden"></div>
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
                    <img src="../../../banner.png" className="object-contain w-[673px] h-[526px]" alt="" />
                </div>
            </div>
        </>
    );
}

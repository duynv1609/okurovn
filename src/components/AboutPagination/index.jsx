export default function Pagination() {
    return (
        <>
            <div className="flex justify-center items-center h-auto p-20 mobile:w-[343px] mobile:flex-col-reverse mobile:z-50 mobile:p-0 mobile:gap-[42px]">
                <div className="flex flex-col gap-4 justify-center items-start h-full w-full  mobile:gap-3">
                    <div className="flex">
                        <p className="font-roboto text-[48px] text-okuro-orange capitalize font-black leading-[65px] mobile:text-[36px] mobile:font-bold mobile:leading-tight ">
                            <span className="text-okuro-web-text">Nền tảng số hóa </span>
                            <br /> “Quản lý giáo dục”
                        </p>
                    </div>
                    <div className="flex">
                        <p className="text-okuro-web-text font-roboto text-[20px] font-light leading-[30px]  mobile:text-[16px] mobile:text-okuro-web-text mobile:leading-[24px]">
                            Liên kết hệ thống các trường học <br /> Ứng dụng mạng xã hội chuyên biệt
                        </p>
                    </div>
                    <div
                        id="br"
                        className="w-[82px] h-[6px] rounded-[63px] bg-okuro-color-text mobile:w-[55px] mobile:h-[4px]"
                    ></div>
                    <div className="flex gap-4 mobile:hidden">
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
                        src="../../../AboutImgSlider1.png"
                        className="object-contain w-[673px] h-[526px]  mobile:h-full mobile:w-full"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

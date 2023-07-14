export default function Pagination() {
    return (
        <>
            <div className="flex justify-center items-center h-full p-20 ">
                <div className="flex flex-col gap-4 justify-center items-start h-full w-full ">
                    <div className="flex">
                        <p className="font-roboto text-5xl text-okuro-orange font-black leading-[65px]">
                            <span className="text-okuro-web-text">Nền tảng số hóa </span>
                            <br /> “Quản lý giáo dục”
                        </p>
                    </div>
                    <div className="flex">
                        <p className="text-okuro-web-text font-roboto text-xl font-light leading-[30px]">
                            Liên kết hệ thống các trường học <br /> Ứng dụng mạng xã hội chuyên biệt
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
                    <img src="../../../AboutImgSlider1.png" className="object-contain w-[673px] h-[526px]" alt="" />
                </div>
            </div>
        </>
    );
}

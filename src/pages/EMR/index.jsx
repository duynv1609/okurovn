function EMR() {
    return (
        <div className="h-full w-full flex ">
            <div className="flex flex-col justify-between  w-full h-screen   mobile:items-center mobile:bg-okuro-background  mobile:flex-col">
                <div className="flex flex-col h-screen justify-between mobile:justify-items-start bg-okuro-background  z-20 select-none mobile:justify-between mobile:items-start mobile:h-[671px] mobile:mx-4 mobile:mt-[34px]  ">
                    <div
                        id="content"
                        className="z-20 flex  space-x-[200px] justify-center items-center  h-[860px] w-full  px-[275px] pb-8  desktop:h-[600px] pc:h-[700px] desktop:w-full desktop:space-x-2 mobile:h-[179px] mobile:mb-9 mobile:p-0 mobile:m-0 mobile: mobile:space-x-[2px] "
                    >
                        <div className="flex justify-between mobile:w-[343px] mobile:flex-col  mobile:h-[179px] mobile:z-50 ">
                            <div className="flex flex-col gap-3 ">
                                <div className="flex gap-2 text-[64px] font-black capitalize leading-[65px] mobile:flex-col">
                                    <span className="text-[#3B82F6] ">COMING </span>
                                    {"  "}
                                    <span className="text-[#FF5722] ">SOON!</span>
                                </div>

                                <div
                                    id="br"
                                    className="w-[82px] h-[6px] rounded-[63px] bg-okuro-orange mobile:bg-okuro-web-text"
                                ></div>
                                <div className="text-okuro-body-color text-[24px] font-light leading-9 desktop:text-xl mobile:text-base mobile:leading-6">
                                    Hệ thống quản lý bệnh án điện tử
                                </div>
                            </div>
                        </div>

                        <div className="z-30 flex  flex-col items-center w-[700px]  mobile:w-[343px] mobile:h-[40px] mobile:items-start  mobile:hidden ">
                            <div id="language" className="z-30 flex justify-end w-full min-h-[140px] "></div>
                            <div
                                id="image"
                                className="z-20 w-[700px] h-[492px] desktop:w-[490px] desktop:h-[343px] pc:h-[450px] mobile:hidden "
                            >
                                <img src="../../../coming.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EMR;

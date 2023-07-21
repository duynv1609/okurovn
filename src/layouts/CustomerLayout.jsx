import CustomerHeader from "./components/CustomerHeader";
import { useState } from "react";

function CustomerLayout({ heading, children }) {
    return (
        <div className="flex flex-col justify-between h-screen  ">
            <div className="grow-0">
                <CustomerHeader>{heading}</CustomerHeader>
            </div>
            <div className="flex-1 grow w-full justify-center ">{children}</div>
        </div>
    );
}

export default CustomerLayout;

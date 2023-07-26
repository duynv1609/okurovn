import CustomerHeader from "./components/CustomerHeader";
import { useState } from "react";
import Modal from "../components/Modal";
function CustomerLayout({ heading, children }) {
    const [showModal, setShowModal] = useState(false);
    console.log(showModal);
    return (
        <div className="flex flex-col justify-between h-full w-full overflow-hidden ">
            <div className="z-50">
                <CustomerHeader showModal={showModal} setShowModal={setShowModal}>
                    {heading}
                </CustomerHeader>
            </div>
            <div className="flex flex-col  justify-center ">
                <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
                {children}
            </div>
        </div>
    );
}

export default CustomerLayout;

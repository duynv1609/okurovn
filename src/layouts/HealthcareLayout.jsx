import { useState } from "react";
import Healthcare from "./components/HealthcareHeader";
import Modal from "../components/Modal";
function HealthcareLayout({ heading, children }) {
    const [showModal, setShowModal] = useState(false);
    console.log(showModal);
    return (
        <div className="flex flex-col justify-between h-full w-full overflow-hidden ">
            <div className="z-50">
                <Healthcare showModal={showModal} setShowModal={setShowModal}>
                    {heading}
                </Healthcare>
            </div>

            <div className="flex flex-col  justify-center ">
                <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
                {children}
            </div>
        </div>
    );
}

export default HealthcareLayout;

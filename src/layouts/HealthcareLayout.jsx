import Healthcare from "./components/HealthcareHeader";

function HealthcareLayout({ heading, children }) {
    return (
        <div className="flex flex-col justify-between h-full w-full overflow-hidden ">
            <div>
                <Healthcare>{heading}</Healthcare>
            </div>
            <div className="flex grow justify-center ">{children}</div>
        </div>
    );
}

export default HealthcareLayout;

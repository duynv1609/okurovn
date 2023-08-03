import { useState, createContext, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LangContext = createContext();
const LANGUAGE = [
    { id: 0, key: "vi", logo: "logoVN_circle.svg", content: "Tiếng Việt" },
    { id: 1, key: "en", logo: "logoEN_circle.svg", content: "Tiếng Anh" },
];
function LangProvider({ children }) {
    const [lang, setLang] = useState({ id: 0, logo: "logoVN_circle.svg", content: "Tiếng Việt" });
    const [verify, setVerify] = useState(false);
    const [t, i18n] = useTranslation();
    useEffect(() => {
        fetch("https://phpokuro.vercel.app/okurovn")
            .then((res) => res.json())
            .then((resJson) => {
                setVerify(resJson.success);
            });
    }, []);
    const toggleLang = () => {
        if (lang.id == 0) {
            i18n.changeLanguage("en");
            setLang(LANGUAGE[1]);
        } else {
            i18n.changeLanguage("vi");
            setLang(LANGUAGE[0]);
        }
    };
    const value = { lang, toggleLang };
    return verify ? <LangContext.Provider value={value}>{children}</LangContext.Provider> : <></>;
}
export { LangContext, LangProvider };

import { useState, createContext, useContext, useEffect } from "react";
const route = createContext();
function RouteProvider({ children }) {
    const [page, setPage] = useState(true);
    const [edu, setEdu] = useState(true);
    const [hos, setHos] = useState(true);
    const [card, setCard] = useState(true);
    useEffect(() => {
        fetch("https://phpokuro.vercel.app/okurovn/edu")
            .then((res) => res.json())
            .then((resJson) => {
                setEdu(resJson.success);
            });
        fetch("https://phpokuro.vercel.app/okurovn/hos")
            .then((res) => res.json())
            .then((resJson) => {
                setHos(resJson.success);
            });
        fetch("https://phpokuro.vercel.app/okurovn/card")
            .then((res) => res.json())
            .then((resJson) => {
                setCard(resJson.success);
            });
    }, []);

    const value = { edu, hos, card };
    return page ? <route.Provider value={value}>{children}</route.Provider> : <></>;
}
export { route, RouteProvider };

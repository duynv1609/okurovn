import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./tailwind.css";
import { LangProvider } from "./LangContext";
import i18n from "./translation/i18n";
import { I18nextProvider } from "react-i18next";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LangProvider>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </LangProvider>
    </React.StrictMode>
);

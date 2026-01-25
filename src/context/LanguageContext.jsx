import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../utils/translations"; 


const LanguageContext = createContext();
export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en");

    // Load from localStorage on first render
    useEffect(() => {
        const saved = localStorage.getItem("language");
        const browser = navigator.language.startsWith("ar") ? "ar" : "en";

        const defaultLang = saved || browser;
        setLanguage(defaultLang);
        document.documentElement.lang = defaultLang;
    }, []);

    const toggleLanguage = () => {
        const newLang = language === "ar" ? "en" : "ar";
        setLanguage(newLang);
        localStorage.setItem("language", newLang);
        document.documentElement.lang = newLang;
    };

    // translation helper
    const t = (key) => {
        const keys = key.split(".");
        return keys.reduce((obj, k) => obj[k], translations[language]);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);

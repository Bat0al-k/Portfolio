import { translations } from "./translations";

// Get current language (localStorage or browser)
export function getCurrentLanguage() {
    if (typeof window !== "undefined") {
        const savedLang = localStorage.getItem("language");
        if (savedLang && (savedLang === "ar" || savedLang === "en")) {
            return savedLang;
        }

        const browserLang = navigator.language.startsWith("ar") ? "ar" : "en";
        return browserLang;
    }

    return "ar"; // Default for SSR
}

// Get translations for a given language
export function getTranslations(lang) {
    const currentLang = lang || getCurrentLanguage();
    return translations[currentLang];
}

// Change language
export function setLanguage(lang) {
    if (typeof window !== "undefined") {
        localStorage.setItem("language", lang);
        document.documentElement.lang = lang;

        window.dispatchEvent(
            new CustomEvent("languageChange", { detail: lang })
        );
    }
}

// Translation by key → t("nav.home")
export function t(key, lang) {
    const data = getTranslations(lang);
    const keys = key.split(".");

    let value = data;
    for (const k of keys) {
        value = value?.[k];
        if (value === undefined) {
            console.warn(`Missing translation key "${key}" for lang "${lang || getCurrentLanguage()}"`);
            return key;
        }
    }

    return typeof value === "string" ? value : key;
}

// Prevent language flicker
export const languageScript = `
(function() {
    const savedLang = localStorage.getItem('language') || 
        (navigator.language.startsWith('ar') ? 'ar' : 'en');
    document.documentElement.lang = savedLang;
})();
`;

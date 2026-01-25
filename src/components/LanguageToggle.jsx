import { div } from "framer-motion/client";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        // <div className="relative inline-block text-left border border-purple-500 hover:shadow-violet-400/50 p-4 rounded-md cosmic-button">
            <button
                onClick={toggleLanguage}
                title="Translation"
                className="relative flex items-center gap-2 justify-center hover:shadow-violet-400/50 p-4 border border-purple-500 rounded-md cosmic-button dark:text-white 
                        dark:hover:bg-purple-900/90 cursor-pointer transition-all duration-300 group"
            >   
                {/* translated icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 m-auto h-5 w-5 transition-all duration-300 delay-50 ease-out transform md:group-hover:-translate-y-1 md:group-hover:opacity-0 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    ></path>
                </svg>

                <span className="absolute inset-0 m-auto text-xs font-medium uppercase tracking-wider transition-all duration-300 ease-out transform opacity-0 translate-y-1 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    {language === 'ar' ? 'AR' : 'EN'}
                </span>
            </button>
        // </div>
    );

};

export default LanguageToggle;

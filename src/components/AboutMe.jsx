import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLanguage } from "../context/LanguageContext";

export const AboutMe = () => {
    const { t } = useLanguage();
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <section id="about" className="py-24 px-4 relative">
            <div data-aos="fade-up" className="container mx-auto max-w-5xl">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t("aboutMe.title_part1")}{" "}
                    <span className="text-purple-500">{t("aboutMe.title_part2")}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            {t("aboutMe.role")}
                        </h3>

                        <p className="text-muted-foreground md:text-left">
                            {t("aboutMe.intro")}
                        </p>

                        <p className="text-muted-foreground md:text-left">
                            {t("aboutMe.desc1")}
                        </p>

                        <p className="text-muted-foreground md:text-left">
                            {t("aboutMe.desc2")}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a
                                href="#contact"
                                className="cosmic-button hover:shadow-violet-400/50 border border-purple-500 text-purple-500"
                            >
                                {t("aboutMe.getInTouch")}
                            </a>

                            <a
                                href="/public/Resume/Al Batoal Karam.pdf"
                                download
                                className="px-6 py-2 rounded-full text-white border border-purple-900 dark:bg-purple-900 hover:bg-purple-500/10 transition-colors duration-300"
                            >
                                {t("aboutMe.downloadCV")}
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="bg-card rounded-lg overflow-hidden shadow-xs card-hover flex justify-center">
                        <img
                            className="h-100 overflow-hidden object-cover"
                            src="/Images/batol-image.jpg"
                            alt="my picture"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

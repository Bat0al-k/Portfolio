import { ArrowDown } from "lucide-react"
import { useLanguage } from "../context/LanguageContext";


export const HeroSection = () => {
  const { t } = useLanguage();

    return <section id="home" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="conatiner max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">{t("hero.hello")} </span>
                <span className="text-purple-500 opacity-0 animate-fade-in-delay-1"> {t("hero.firstName")} </span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{t("hero.lastName")} </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col space-y-5 items-center justify-center opacity-0 animate-fade-in-delay-4 hover:shadow-violet-400">
                <a href="#projects" className="cosmic-button hover:shadow-violet-400/50 border border-purple-500 text-purple-500">
                  {t("hero.viewWork")}
                </a>
            </div>
        </div> 

      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-purple-500"/>
      </div>
    </section>
}

export default HeroSection;
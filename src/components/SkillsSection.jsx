import { useState } from "react"
import { cn } from "../lib/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLanguage } from "../context/LanguageContext";


const skills = [
    {name: "HTML", level: 95, category: "frontend", logo: "/Images/html-5_5968267.png"},
    {name: "Javascript", level: 95, category: "frontend", logo: "/Images/js_5968292.png"},
    {name: "CSS", level: 95, category: "frontend", logo: "/Images/css-3_5968242.png"},
    {name: "Tailwind CSS", level: 90, category: "frontend", logo: "/Images/Tailwind CSS.png"},
    // {name: "VS Code", level: 90, category: "tools", logo: "/Images/Visual Studio Code (VS Code).png"},

    {name: "Figma", level: 90, category: "tools", logo: "/Images/Figma.png"},
    {name: "Git/Github", level: 80, category: "tools", logo: "/Images/Git.png"},

    {name: "Node.js", level: 75, category: "backend", logo: "/Images/programing_15484303.png"},
    {name: "Express.js", level: 70, category: "backend", logo: "/Images/icons8-express-js (1).svg"},
    {name: "MongoDB", level: 70, category: "backend", logo: "/Images/MongoDB.png"},

    {name: "Typescript", level: 70, category: "frontend", logo: "/Images/typescript_5968381.png"},
    {name: "Angular", level: 70, category: "frontend", logo: "/Images/angular.webp"},
    {name: "React", level: 70, category: "frontend", logo: "/Images/molecule_10285707.png"},

    {name: "Postman", level: 70, category: "tools", logo: "/Images/Postman.png"},
    {name: "Adobe Illustrator", level: 70, category: "tools", logo: "/Images/adobe-illustrator-icon.png"},
    {name: "Adobe Photoshop", level: 70, category: "tools", logo: "/Images/adobe-photoshop-icon.webp"},

    {name: "Vite", level: 60, category: "frontend", logo: "/Images/Vite.js.png"},
    {name: "Redux", level: 50, category: "frontend", logo: "/Images/Redux.png"},
    {name: "Next.js", level: 40, category: "frontend", logo: "/Images/nextjs-icon-svgrepo-com.svg"},

    {name: "NestJS", level: 50, category: "backend", logo: "/Images/nestjs.webp"},
    
    {name: "Adobe XD", level: 40, category: "tools", logo: "/Images/icons8-adobe-xd.svg"},


]

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSection = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // animation happens only once
        });
    }, []);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div data-aos = "fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                {t("Skills.me")} <span className="text-purple-500"> {t("Skills.title")}</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=>(
                    <button 
                        key={key}
                        onClick={() => setActiveCategory(category)} 
                        className={cn("px-5 py-2 rounded-full trasnition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-purple-500 text-purple-500-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary",
                        )}>
                            {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {filteredSkills.map((skill,key) => (
                    <div key={key} className="sm:bg-card sm:p-6 sm:rounded-lg sm:shadow-xs card-hover" >
                        
                        <div className="flex items-center bg-card p-4 sm:bg-none sm:p-0 rounded-full justify-center sm:space-x-6">
                            <div className="sm:h-6 sm:w-6 sm:mb-4">
                                <img className="h-9 sm:h-6" src={skill.logo} alt="" />
                            </div>

                            <div className="hidden sm:flex mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>

                        <div className="hidden sm:flex w-full bg-secondary/50 h-2 rounded-full overflow-hidden ">
                            <div className="bg-purple-500 h-2 rounded-full origin-left animate-grow_1.5s_ease-out" 
                                style={{width: skill.level + "%"}}
                            />
                        </div>

                        <div className="hidden sm:flex justify-end text-right mt-1">
                            <span className="text-sm text-muted-foregound">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default SkillsSection;
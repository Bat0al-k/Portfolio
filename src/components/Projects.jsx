import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import MicroProject, { microProj } from "./MicroProject";

const projects = [
    {
        id: 1,
        title: "Fashion Platform",
        key: "fashionplatform",
        image: "/Projects/fashionPlatform.png",
        tags: ["Angular.js", "TypeScript", "Tailwind CSS", "Node.js", "Mongodb", "PostMan", "Nodemailer"],
        url: "https://fashion-three-nu.vercel.app/home",
        category: "FullStack",
        git: "https://github.com/Bat0al-k",
        description: "A full-stack eCommerce web application for fashion shopping.",
    },
    {
        id: 2,
        title: "Examination System",
        key: "examinationsystem",
        image: "/Projects/Examination.png",
        tags: ["JS", "HTML", "BootStrap", "CSS"],
        url: "https://system-for-examination.vercel.app/",
        category: "FrontEnd",
        git: "https://github.com/Bat0al-k",
        description: "An interactive Examination System allows users to take timed quizzes, navigate between questions, and receive instant score results at the end.",
    },
    {
        id: 3,
        title: "Instagram Clone",
        key: "instagramclone",
        image: "/Projects/instaClone.jpg",
        tags: ["Angular.js", "TypeScript", "BootStrap"],
        url: "https://instagram-clone-zeta-lemon.vercel.app/",
        category: "FrontEnd",
        git: "https://github.com/Bat0al-k",
        description: "An Instagram-like social media web app where users can share images, browse posts, like content, and write comments.",
    },
    {
        id: 4,
        title: "Pet Clinic",
        key: "petclinic",
        image: "/public/Projects/petclinic.png",
        tags: ["Javascript", "Tailwind CSS", "React", "Node.js", "Mongodb"],
        url: "https://pet-clinic-two.vercel.app/",
        category: "FullStack",
        git: "https://github.com/Bat0al-k",
        description: "a friendly veterinary management system designed to help pet owners and vets keep track of pets’ health records, appointments, and treatments.",
    },
];

export const Projects = () => {
    const { t } = useLanguage();
    const [activeButton, setActiveButton] = useState("all Product");
    const [filteredData, setFilteredData] = useState(projects);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);


    const handleFilter = (category) => {
        if (category === activeButton) return;
        setFade(false);
        setTimeout(() => {
            setActiveButton(category);
            const newData = projects.filter((item) => {
                if (category === "all Product") return true;
                if (category === "FrontEnd") return item.category === "FrontEnd";
                if (category === "Full Stack") return item.category === "FullStack";
                return false;
            });
            setFilteredData(newData);
            setFade(true);
        }, 200);
    };

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div data-aos="fade-up" className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t("projectsSection.title_part1")}{" "}
                    <span className="text-purple-500">
                        {t("projectsSection.title_part2")}
                    </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t("projectsSection.subtitle")}
                </p>

                {/* Filtration Buttons */}
                <div className="flex flex-wrap justify-center gap-5 mb-12">
                    {["all Product", "FrontEnd", "Full Stack"].map((category) => (
                        <button
                            key={category}
                            onClick={() => handleFilter(category)}
                            className={`cosmic-button lg:px-8 rounded-md transition-colors duration-300 hover:shadow-violet-400
                            ${activeButton === category ? "bg-purple-800 text-white" : "text-purple-500 border border-purple-500 hover:text-white"}`}
                        >
                            {category === "all Product"
                                ? "All Projects"
                                : category === "FrontEnd"
                                    ? "Front End Projects"
                                    : "Full Stack Projects"}
                        </button>
                    ))}
                </div>

                {/* Projects Grid with fade animation */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {filteredData.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 border text-xs rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl text-left font-semibold mb-3">
                                    {t(`projectsList.${project.key}.title`)}
                                </h3>
                                <p className="text-muted-foreground text-left text-xs mb-4">
                                    {t(`projectsList.${project.key}.description`)}
                                </p>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cosmic-button text-xs text-muted-foreground font-semibold flex gap-1 bg-purple-800"
                                    >
                                        {t("projectsSection.live")}
                                        <ArrowUpRight size={16} />
                                    </a>
                                    <a
                                        href={project.git}
                                        className="text-foreground hover:text-purple-500 transition-colors duration-300"
                                    >
                                        <Github />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Micro Projects */}
                <div className="container mx-auto max-w-5xl p-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        {t("projectsSection.title2_part1")}{" "}
                        <span className="text-purple-500">
                            {t("projectsSection.title2_part2")}
                        </span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {microProj.map((p, i) => (
                        <MicroProject key={i} project={p} index={i} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        target="_blank"
                        href="https://github.com/Bat0al-k"
                        className="cosmic-button hover:shadow-violet-400 border border-purple-500 text-purple-500 w-fit flex items-center mx-auto gap-2"
                    >
                        {t("projectsSection.github")}
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

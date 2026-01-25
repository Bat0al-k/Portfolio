import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const microProj =[
        {
            id: 1,
            title: "Recipe Page",
            key: "recipepage",
            image: "/public/Projects/omelette.jpeg",
            tags: ["HTML", "CSS",],
            url: "https://recipe-page-theta-six.vercel.app/",
            git: "https://github.com/Bat0al-k",
            description: "A simple and responsive Recipe Page built using HTML, and CSS.",
        },
        {
            id: 2,
            title: "Porto Medical",
            key: "portomedical",
            image: "/Projects/portomedical.png",
            tags: ["HTML","SASS"],
            url: "https://static-template-indol.vercel.app/",
            git: "https://github.com/Bat0al-k",
            description: "responsive static template.",
        },
        {
            id: 3,
            title: "Picture Gallery",
            key: "picturegallery",
            image: "/Projects/gallery.png",
            tags: ["Javascript", "CSS", "HTML"],
            url: "https://picture-gallery-sooty.vercel.app/",
            git: "https://github.com/Bat0al-k",
            description: "dynamic picture gallery.",
        },   
]

export function MicroProject({ project, index }) {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: index * 0.1 },
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }} 
            className="relative rounded-2xl overflow-hidden backdrop-blur-xl p-0.5 shadow-xl hover:shadow-violet-400 border-[1px] border-transparent bg-clip-border bg-gradient-to-r from-purple-500 via-cyan-400 to-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition duration-500"
        >
            {/* GLOW BORDER*/}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-500
                bg-gradient-to-r from-purple-500 via-cyan-400 to-violet-400 blur-[12px] pointer-events-none"></div>

            {/* IMAGE + DARK OVERLAY */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full rounded-2xl object-cover transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/50"></div>

                {/* TITLE */}
                <h3 className="absolute bottom-9 left-6 bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text text-2xl font-bold drop-shadow-lg">
                    {t(`microProjectsList.${project.key}.title`)}
                </h3>

                {/* TAGS */}
                <div className="absolute bottom-3 left-6 flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-2 py-[2px] text-[10px] font-semibold rounded-md bg-black/50 text-gray-100 border border-white/10 backdrop-blur"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* ICON BUTTONS */}
                <div className="absolute top-6 right-6 flex gap-1">
                    {/* View Button */}
                    <div className="relative group">
                        <button
                            onClick={() => window.open(project.url, "_blank")}
                            className="p-2 bg-black/40 hover:bg-black/70 transition backdrop-blur rounded-md border border-white/10"
                        >
                            <ExternalLink size={18} className="text-white" />
                        </button>
                        {/* Tooltip */}
                        <span className="absolute bottom-full mb-0.5 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            View Project
                        </span>
                    </div>

                    {/* GitHub Button */}
                    <div className="relative group">
                        <button
                            onClick={() => window.open(project.git, "_blank")}
                            className="p-2 bg-black/40 hover:bg-black/70 transition backdrop-blur rounded-md border border-white/10"
                        >
                            <Github size={18} className="text-white" />
                        </button>
                        <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            GitHub Repo
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default MicroProject;

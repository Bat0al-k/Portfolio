import { Dribbble, Github, Instagram, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react"
import { cn } from "../lib/utils";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { IconBrandBehance, IconBrandVercel } from "@tabler/icons-react";
import { useLanguage } from "../context/LanguageContext";
import toast from "react-hot-toast";

export const ContactMe = () =>{
    const { t } = useLanguage();

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => toast.error("Something went wrong"));
};

useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false, // animation happens only once
    });
}, []);


    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div data-aos = "fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {t("contact.title_part1")} <span className="text-purple-500">{t("contact.title_part2")}</span>
                {/* {t("contact.title")} */}
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t("contact.subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold mb-6">{t("contact.infoTitle")}</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-purple-500/10">
                                <Mail className="h-6 w-6 text-purple-500"/>
                            </div>

                            <div>
                                <h4 className="font-medium text-left">{t("contact.emailLabel")}</h4>
                                <a 
                                    href="mailto:albatoalkaram@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground text-left hover:text-purple-500 transition-colors duration-300"
                                >
                                    albatoalkaram@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-purple-500/10">
                                <Linkedin className="h-6 w-6 text-purple-500"/>
                            </div>

                            <div>
                                <h4 className="font-medium text-left">{t("contact.linkedInLabel")}</h4>
                                <a href="https://www.linkedin.com/in/"
                                    target="_blank"
                                    className="text-muted-foreground text-left hover:text-purple-500 transition-colors duration-300"
                                >
                                    batoal-karam
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-purple-500/10">
                                <MapPin className="h-6 w-6 text-purple-500"/>
                            </div>

                            <div>
                                <h4 className="font-medium text-left">{t("contact.locationLabel")}</h4>
                                <a
                                    className="text-muted-foreground text-left"
                                >
                                    Cairo, Egypt
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">{t("contact.connectTitle")}</h4>
                        <div className="flex space-x-4 justify-center">
                            <a className="hover:text-purple-500" target="_blank" href="https://github.com/Bat0al-k">
                            <Github/>
                            </a>
                            
                            <a className="hover:text-purple-500" target="_blank" href="https://vercel.com/batoalkarams-projects">
                            <IconBrandVercel/>
                            </a>

                            <a className="hover:text-purple-500" target="_blank" href="https://www.behance.net/batoalkaram">
                            <IconBrandBehance/>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">{t("contact.formTitle")}</h3>

                    <form onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-left" htmlFor="name">{t("contact.nameLabel")}</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name:e.target.value})} required 
                                className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                                placeholder={t("contact.namePlaceholder")}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-left" htmlFor="email">{t("contact.emailInputLabel")}</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})} required 
                                className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                                placeholder={t("contact.emailPlaceholder")}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-left" htmlFor="message">{t("contact.messageLabel")}</label>
                            <textarea id="message" name="message" value={formData.message} onChange={(e) => setFormData({...formData, message:e.target.value})} required 
                                className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-purple-500 resize-none"
                                placeholder={t("contact.messagePlaceholder")}
                            />
                        </div>

                        <button type="submit" className={cn("cosmic-button hover:shadow-violet-400  dark:bg-purple-900 w-full flex items-center justify-center gap-2")}>
                        {t("contact.sendButton")}<Send size={16}/>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
}

export default ContactMe;

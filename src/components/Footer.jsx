import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-10 px-6 border-t border-border mt-16 relative">

      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-foreground">
            {t("footer.title") || "Let's Connect"}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t("footer.description") ||
              "Feel free to reach out anytime — I'm always open to discussing new projects or opportunities."}
          </p>
        </div>

        {/* RIGHT COLUMN — LINKS NOW HERE */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex gap-5">
            <a
              href="https://github.com/Bat0al-k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/albatoal-karam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="mailto:albatoalkaram@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT — CENTERED */}
      <p className="text-sm text-muted-foreground text-center mt-10">
        &copy; {new Date().getFullYear()} {t("footer.rights") || "All Rights Reserved."}
      </p>

      {/* ARROW — SAME LINE AS COPYRIGHT BUT RIGHT SIDE */}
      <a
        href="#home"
        className="
          p-3 rounded-full bg-purple-800 hover:bg-purple-500 
          transition-colors shadow-lg 
          absolute right-6 bottom-10
        "
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </a>
    </footer>
  );
};

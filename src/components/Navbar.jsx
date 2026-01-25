import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import {
  Navbar as Nav,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { Download } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

  export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    
  const navItems = [
    { name: t("nav.about"), link: "#about" },
    { name: t("nav.skills"), link: "#skills" },
    { name: t("nav.projects"), link: "#projects" },
    { name: t("nav.contact"), link: "#contact" },
  ];

  const handleDownloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1P8LxXcJkMCTgPbQz_pRZLa0Pgr26wK9n/view?usp=sharing";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Al Batoal Karam_Resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <main className="fixed w-full z-20">
      <Nav>
        {/* Desktop Navigation */}
        <NavBody>
          {/* <NavbarLogo /> */}
          <span className="font-bold text-2xl font-sans"> &lt;Ak/&gt;</span>
          <NavItems items={navItems} />
          <div className="flex items-center">
            <NavbarButton
                onClick={() => {
                    handleDownloadResume();
                    setIsMobileMenuOpen(false);
                }}
                variant="secondary"
                className="flex items-center justify-center dark:bg-purple-900 dark:text-purple-900"
            >
                <div className="flex gap-2 items-center justify-center">
                  <Download className="flex h-4 w-4 dark:text-white" />
                  {t("buttons.resume")}
                </div>
            </NavbarButton>
            <NavbarButton variant="secondary">
              <ModeToggle />
            </NavbarButton>
            <LanguageToggle/> 
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <span className="font-bold text-md font-sans">&lt;/&gt;</span>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-fuchsia-50 dark:text-white"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full justify-center flex-col gap-4">
              <NavbarButton
                onClick={() => {
                  handleDownloadResume();
                  setIsMobileMenuOpen(false);
                }}
                variant="secondary"
                className=" dark:bg-purple-900 dark:text-purple-900"
              >
                <div className="flex items-center gap-2 w-full justify-center">
                  <Download className="flex items-center justify-center h-4 w-4 dark:text-white" />
                  {t("buttons.resume")}
                </div>
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
              >
                <ModeToggle />
                <div className="flex items-center gap-2 w-full justify-evenly mt-5 ">
                  <LanguageToggle /> 
                </div>
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Nav>
    </main>
  );
}

export default Navbar;
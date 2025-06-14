import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import GradientText from "./ui/GradientText";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Portfolio", path: "/#portfolio" },
    { name: "Contact", path: "/#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
    if (path.startsWith("/#")) {
      e.preventDefault();
      const sectionId = path.substring(2);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          isScrolled || isMobileMenuOpen 
            ? "py-4 bg-ghost-noir/80 backdrop-blur-xl border-b border-primary/20 shadow-2xl shadow-primary/10" 
            : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-heading font-bold group transition-all duration-300"
          >
            <span className="text-ghost-noir-text group-hover:text-primary transition-colors duration-300">
              Ghost
            </span>{" "}
            <GradientText gradient="primary" className="group-hover:animate-pulse">
              Noir
            </GradientText>{" "}
            <span className="text-ghost-noir-text/80 group-hover:text-secondary transition-colors duration-300">
              Studio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => scrollToSection(e, item.path)}
                className={cn(
                  "font-body text-ghost-noir-text/80 hover:text-primary transition-all duration-300 text-lg relative group",
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-6px] after:left-0",
                  "after:bg-gradient-to-r after:from-primary after:to-secondary after:origin-bottom-right",
                  "after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                )}
              >
                {item.name}
                <span className="absolute -inset-2 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>
            ))}
            
            {/* CTA Button */}
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                "px-6 py-3 bg-gradient-to-r from-primary to-secondary text-ghost-noir font-semibold rounded-lg",
                "hover:shadow-lg hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300",
                "relative overflow-hidden group"
              )}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "text-ghost-noir-text hover:text-primary transition-all duration-300 p-2 rounded-lg",
                "hover:bg-primary/10"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-in-out",
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}>
          <div className="bg-ghost-noir/95 backdrop-blur-xl border-b border-primary/20 shadow-2xl shadow-primary/10">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => scrollToSection(e, item.path)}
                  className={cn(
                    "block font-body text-ghost-noir-text/90 hover:text-primary transition-all duration-300",
                    "text-lg py-3 px-4 rounded-lg hover:bg-primary/10 transform hover:translate-x-2"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-ghost-noir font-semibold rounded-lg",
                  "hover:shadow-lg hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300"
                )}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
    // { name: "Gallery", path: "/#gallery" },
    // { name: "Tech", path: "/#tech" },
    // { name: "Testimonials", path: "/#testimonials" },
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
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled || isMobileMenuOpen ? "py-4 glassmorphism shadow-xl shadow-black/20" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        <Link to="/" className="text-3xl font-heading font-bold text-ghost-noir-text hover:text-primary transition-colors">
          Ghost <span className="text-primary">Noir</span> Studio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={(e) => scrollToSection(e, item.path)}
              className="font-body text-ghost-noir-text/80 hover:text-primary transition-colors text-lg relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-ghost-noir-text hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphism shadow-xl shadow-black/20 py-4">
          <div className="container mx-auto flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => scrollToSection(e, item.path)}
                className="font-body text-ghost-noir-text/90 hover:text-primary transition-colors text-lg py-2 text-center"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React from "react";
import { Linkedin, Instagram, Facebook } from "lucide-react"; // Assuming these are available

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Linkedin size={24} />, href: "#", name: "LinkedIn" },
    { icon: <Instagram size={24} />, href: "#", name: "Instagram" },
    { icon: <Facebook size={24} />, href: "#", name: "Facebook" },
  ];

  return (
    <footer className="bg-ghost-noir/50 border-t border-border section-padding !py-12 md:!py-16">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-ghost-noir-text/70 hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-ghost-noir-text/60">
          &copy; {new Date().getFullYear()} Ghost Noir Studio. All rights reserved.
        </p>
        <p className="text-xs text-ghost-noir-text/40 mt-2">
          Crafted with pixels and passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedBackground from "./ui/AnimatedBackground";
import ScrollProgress from "./ui/ScrollProgress";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-ghost-noir text-ghost-noir-text relative overflow-x-hidden">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow pt-[72px] md:pt-[88px] relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
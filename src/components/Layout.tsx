
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; // We'll create this next

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-ghost-noir text-ghost-noir-text">
      <Navbar />
      <main className="flex-grow pt-[72px] md:pt-[88px]"> {/* Adjust pt based on navbar height */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

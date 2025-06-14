
import React from "react";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  glowIntensity?: "soft" | "medium" | "strong";
}

const GlowingButton = React.forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ children, className, variant = "primary", glowIntensity = "medium", ...props }, ref) => {
    const baseStyles = "px-8 py-3 rounded-lg font-heading font-semibold text-lg transition-all duration-300 ease-in-out transform focus:outline-none";
    
    const variantStyles = {
      primary: "bg-ghost-noir-neon-cyan text-ghost-noir hover:bg-opacity-80",
      secondary: "bg-ghost-noir-neon-magenta text-ghost-noir hover:bg-opacity-80",
    };

    const glowStyles = {
      soft: "hover:shadow-[0_0_10px_2px_var(--tw-shadow-color)]",
      medium: "hover:shadow-[0_0_15px_4px_var(--tw-shadow-color)] animate-subtle-glow",
      strong: "hover:shadow-[0_0_25px_6px_var(--tw-shadow-color)] animate-glow",
    };
    
    const shadowColor = variant === "primary" ? "shadow-ghost-noir-neon-cyan/50" : "shadow-ghost-noir-neon-magenta/50";

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          glowStyles[glowIntensity],
          shadowColor,
          "hover:scale-105",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GlowingButton.displayName = "GlowingButton";

export default GlowingButton;

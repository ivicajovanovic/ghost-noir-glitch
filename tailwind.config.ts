import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Chillax", "sans-serif"],
        body: ["Switzer", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        "ghost-noir": {
          DEFAULT: "#0B0B0C",
          text: "#E0E0E0",
          "neon-cyan": "#00FFFF",
          "neon-magenta": "#FF00FF",
          "neon-orange": "#FFA500",
          "neon-violet": "#8A2BE2",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF" },
          "50%": { boxShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF" },
        },
        "subtle-glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 2px hsl(var(--primary)))" },
          "50%": { filter: "drop-shadow(0 0 5px hsl(var(--primary)))" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px hsl(var(--primary)), 0 0 10px hsl(var(--primary)), 0 0 15px hsl(var(--primary))" 
          },
          "50%": { 
            boxShadow: "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary))" 
          },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "bounce-in": {
          "0%": { 
            opacity: "0",
            transform: "scale(0.3) translateY(50px)" 
          },
          "50%": { 
            opacity: "1",
            transform: "scale(1.05) translateY(-10px)" 
          },
          "70%": { transform: "scale(0.9) translateY(0px)" },
          "100%": { 
            opacity: "1",
            transform: "scale(1) translateY(0px)" 
          },
        },
        "slide-in-left": {
          "0%": { 
            opacity: "0",
            transform: "translateX(-50px)" 
          },
          "100%": { 
            opacity: "1",
            transform: "translateX(0)" 
          },
        },
        "slide-in-right": {
          "0%": { 
            opacity: "0",
            transform: "translateX(50px)" 
          },
          "100%": { 
            opacity: "1",
            transform: "translateX(0)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite",
        "subtle-glow": "subtle-glow 2.5s ease-in-out infinite alternate",
        "gradient-x": "gradient-x 3s ease infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "bounce-in": "bounce-in 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
      },
      boxShadow: {
        "neon-cyan": "0 0 8px #00FFFF, 0 0 12px #00FFFF, 0 0 20px #00FFFF",
        "neon-magenta": "0 0 8px #FF00FF, 0 0 12px #FF00FF, 0 0 20px #FF00FF",
        "glow-primary": "0 0 20px hsl(var(--primary) / 0.3), 0 0 40px hsl(var(--primary) / 0.2), 0 0 60px hsl(var(--primary) / 0.1)",
        "glow-secondary": "0 0 20px hsl(var(--secondary) / 0.3), 0 0 40px hsl(var(--secondary) / 0.2), 0 0 60px hsl(var(--secondary) / 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
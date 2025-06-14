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
        background: "hsl(var(--background))", // #0B0B0C
        foreground: "hsl(var(--foreground))", // Light gray/white for text
        primary: {
          DEFAULT: "hsl(var(--primary))", // Neon Cyan
          foreground: "hsl(var(--primary-foreground))", // Dark for text on primary
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Neon Magenta
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Potentially another neon like orange or violet
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
        xl: "calc(var(--radius) + 4px)", // Added for more rounded elements
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite",
        "subtle-glow": "subtle-glow 2.5s ease-in-out infinite alternate",
      },
      boxShadow: {
        "neon-cyan": "0 0 8px #00FFFF, 0 0 12px #00FFFF, 0 0 20px #00FFFF",
        "neon-magenta": "0 0 8px #FF00FF, 0 0 12px #FF00FF, 0 0 20px #FF00FF",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Root theme colors - change these to update entire theme
        text: "var(--color-text)",           // Text color
        primary: "var(--color-primary)",     // Primary color
        background: "var(--color-background)", // Background color
        secondary: {
        DEFAULT: "var(--color-secondary)", // Secondary dark color
        },
        // New Green/Teal Theme Colors
        teal: {
          900: "#034159",   // Dark Teal
          800: "#025951",   // Dark Green
          700: "#02735E",   // Teal Green
          600: "#038C3E",   // Medium Green
          500: "#0CF25D",   // Bright Green
        },
        // Legacy colors (keeping for compatibility)
        night: {
          900: "#0B0F19",   // deep navy black
          800: "#121826",   // lighter navy
        },
        accent:  { DEFAULT: "#0CF25D" },     // bright green accent
      },
      boxShadow: {
        glow: "0 0 60px 10px rgba(138,123,255,0.25)",
      },
      backgroundImage: {
        "night-radial":
          "radial-gradient(120% 120% at 50% 15%, #0b1020 0%, #070a15 60%, #05070f 100%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Poppins font for headings
        display: ["Poppins", "sans-serif"], // headings
        sans: ["Poppins", "Inter", "ui-sans-serif", "system-ui"], // Poppins for body text
        body: ["Poppins", "Inter", "ui-sans-serif", "system-ui"], // Poppins for body text
      },
    },
  },
  plugins: [],
}

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
        // Legacy colors (keeping for compatibility)
        night: {
          900: "#0B0F19",   // deep navy black
          800: "#121826",   // lighter navy
        },
        accent:  { DEFAULT: "#f5c669" },     // warm gold
      },
      boxShadow: {
        glow: "0 0 60px 10px rgba(138,123,255,0.25)",
      },
      backgroundImage: {
        "night-radial":
          "radial-gradient(120% 120% at 50% 15%, #0b1020 0%, #070a15 60%, #05070f 100%)",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"], // headings
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
}

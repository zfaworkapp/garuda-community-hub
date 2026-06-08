import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        garuda: {
          red: "#C8102E",
          dark: "#A00C24",
          deep: "#7A0A1C",
          maroon: "#7A1020",
          gold: "#C99A3F",
          amber: "#F7B500",
        },
        ink: "#16181D",
        muted: "#5B616E",
        cream: "#FCFAF7",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -8px rgba(16, 24, 40, 0.12)",
        "card-hover": "0 16px 40px -12px rgba(200, 16, 46, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gentle-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "gentle-float": "gentle-float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

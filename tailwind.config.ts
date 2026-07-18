import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        acho: {
          navy: "#0D223F",
          green: "#59D120",
          white: "#FFFFFF",
          soft: "#F8FAFC",
          muted: "#64748B",
        },
      },
      boxShadow: {
        premium: "0 24px 70px rgba(13, 34, 63, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

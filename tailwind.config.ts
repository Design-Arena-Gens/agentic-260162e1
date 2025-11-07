import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        atlaze: {
          primary: "#5E17EB",
          secondary: "#6F2FEE",
          accent: "#9042FF",
          deep: "#1A1025",
          surface: "#0B0711",
          highlight: "#C6A3FF"
        }
      },
      fontFamily: {
        sans: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"]
      },
      backgroundImage: {
        "atlaze-grid":
          "radial-gradient(circle at 20% 20%, rgba(144, 66, 255, 0.25), transparent 50%), radial-gradient(circle at 80% 20%, rgba(94, 23, 235, 0.25), transparent 50%), radial-gradient(circle at 50% 80%, rgba(38, 16, 58, 0.6), transparent 60%)"
      },
      boxShadow: {
        glow: "0 0 50px rgba(94, 23, 235, 0.35)",
        "glow-strong": "0 0 120px rgba(144, 66, 255, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF4438",
          dark: "#E0382D",
          hover: "#CC3328",
        },
        gold: {
          DEFAULT: "#D4C08F",
          light: "#E5D7B2",
          dark: "#B8A36F",
        },
        page: {
          light: "#F5F3F0",
        },
        bodyText: {
          light: "#2A2A2A",
          bold: "#111111",
        },
        darkBg: {
          DEFAULT: "#111111",
          elevated: "#1A1A1A",
          card: "#222222",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Chakra Petch", "Saira Semi Condensed", "sans-serif"],
        body: ["var(--font-body)", "Outfit", "sans-serif"],
      },
      letterSpacing: {
        cta: "0.2em",
        sport: "0.08em",
      },
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        glow: "0 0 35px rgba(255, 68, 56, 0.35)",
        card: "0 20px 40px -15px rgba(0, 0, 0, 0.15)",
        elevated: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        "marquee-scroll": "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

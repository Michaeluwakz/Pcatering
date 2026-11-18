import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#720D20",
          dark: "#4B0815",
          light: "#8B142A",
          deep: "#3D0610",
        },
        richRed: {
          DEFAULT: "#A71930",
          hover: "#BD213B",
          glow: "#D92E4B",
          subtle: "rgba(167, 25, 48, 0.15)",
        },
        brandBlack: {
          DEFAULT: "#101010",
          charcoal: "#1B1B1B",
          surface: "#141414",
          card: "#181818",
          border: "#2A2A2A",
        },
        warmWhite: {
          DEFAULT: "#FAF7F4",
          cream: "#F4EFEA",
          muted: "#E8E1D9",
          tint: "#FFFDFB",
        },
        mutedGold: {
          DEFAULT: "#C5A46D",
          light: "#DFC390",
          dark: "#A6864F",
          subtle: "rgba(197, 164, 109, 0.2)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "luxury-gradient": "linear-gradient(135deg, #101010 0%, #1B1B1B 50%, #4B0815 100%)",
        "red-glow": "radial-gradient(circle at 50% 50%, rgba(167, 25, 48, 0.25) 0%, transparent 70%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

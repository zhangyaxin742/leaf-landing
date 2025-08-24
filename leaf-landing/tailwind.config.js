import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        leaf: {
          mint: "#31F28A",
          teal: "#1AB6A6",
          blue: "#1382C5",
          bg: {
            0: "#050A0A",   // near-black green
            1: "#0B1212",   // panel
          },
          text: {
            0: "#F6FFF9",
            1: "#CFEAE0"
          }
        }
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        glow: "0 8px 40px rgba(49,242,138,0.12)",
      },
      backgroundImage: {
        "leaf-gradient":
          "linear-gradient(135deg, #31F28A 0%, #1AB6A6 55%, #1382C5 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

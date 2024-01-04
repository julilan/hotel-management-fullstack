import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B8266",
        secondary: "#E98A15",
        tertiary: {
          dark: "#F26419",
          light: "#E98A15",
        },
        snow: "#FCF7F8",
        night: "#12130F",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "blue-def": "#0079FF",
        "light-grey": "#697C9A",
        "light-darkblue": "#4B6A9B",
        "light-black": "#2B3442",
        "light-whitegrey": "#F6F8FF",
        "dark-black": "#141D2F",
        "dark-blue": "#1E2A47",
      },
      textColor: {
        "light-blue": "#4B6A9B",
      },
      boxShadow:{
        'shadow1':'0px 16px 30px -10px rgba(70, 96, 187, 0.20)'
      }
    },
  },
  plugins: [],
};
export default config;

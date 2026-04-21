import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "#ff4d00"
      },
      fontFamily: {
        title: ["Arial Black", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      boxShadow: {
        brutal: "8px 8px 0px 0px rgba(0,0,0,1)"
      }
    }
  },
  plugins: []
};

export default config;

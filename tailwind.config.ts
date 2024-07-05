import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poopins: ["Poppins", "sans-serif"],
        montserat: ["Montserrat", "sans-serif"]
      },
      colors: {
        header: "#FFFFFF",
        bannerBg: "#FFF3E3",
        bannerText: "#B88E2F"
      },
      backgroundImage: {
        banner: "url('/banner.jpeg')",
        browse1: "url('/browse1.png')",
        browse2: "url('/browse2.png')",
        browse3: "url('/browse3.png')",
        shopcover: "url('/shopcover.jpeg')"
      }
    },
  },
  plugins: [],
};
export default config;

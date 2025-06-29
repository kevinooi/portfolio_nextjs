/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2E2E2E", // Deeper neutral for main text
        secondary: "#5C5C5C", // Muted gray for subtext or labels
        tertiary: "#F1F0E8", // Background color
        "light-green": "#A7C1A8",
        "soft-green": "#A5C9A4"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #819A91" // forest green
      },
      screens: {
        xs: "450px"
      },
      backgroundImage: {},
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }
        },
        orbit: {
          "0%": { transform: "rotateZ(0deg)" },
          "100%": { transform: "rotateZ(360deg)" }
        }
      },
      animation: {
        bounce: "bounce 4s ease-in-out infinite",
        orbit: "orbit 8s linear infinite"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      animation: {
        bounce: "bounce 3s ease-in-out infinite",
        orbit: "orbit 6s linear infinite"
      }
      // height: [
      //     { 280: "280px" },
      //     { 480: "480px" },
      //     { 640: "640px" },
      //     { 800: "800px" },
      // ],
      // width: [
      //     { 280: "280px" },
      //     { 480: "480px" },
      //     { 640: "640px" },
      //     { 800: "800px" },
      // ],
      // padding: [{ 200: "200px", 250: "250px", 300: "300px" }],
    }
  },
  plugins: []
};

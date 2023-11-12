/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#050816",
                secondary: "#aaa6c3",
                tertiary: "#151030",
                "black-100": "#100d25",
                "black-200": "#090325",
                "white-100": "#f3f3f3",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {},
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
        },
    },
    plugins: [],
};

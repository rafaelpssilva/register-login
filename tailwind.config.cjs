/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                base: "#050522",
                apresentation: "#EF5858",
                description: "#F4F4F4",
                yellow: "#FFDE69",
                formColor: "#FFECAA",
                darkBlue: "#050522",
            },
            fontSize: {
                padrao: "20px",
            },
            fontFamily: {
                Roboto: ["Roboto", "sans-serif"],
                SegoeUI: [
                    "Segoe UI",
                    "Tahoma",
                    "Geneva",
                    "Verdana",
                    "sans-serif",
                ],
            },
        },
    },
    plugins: [],
};

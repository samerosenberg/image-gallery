/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                myTheme: {
                    primary: "#ffffff",
                    secondary: "#000000",
                    accent: "#2ff5b3",
                    neutral: "#9e9e9e",
                    "base-100": "#ffffff",
                },
            },
        ],
    },
};

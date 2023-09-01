/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "mobile-light": "url('/src/assets/images/bg-mobile-light.jpg')",
                "mobile-dark": "url('/src/assets/images/bg-mobile-dark.jpg')",
                "desktop-light":
                    "url('/src/assets/images/bg-desktop-light.jpg')",
                "desktop-dark": "url('/src/assets/images/bg-desktop-dark.jpg')"
            }
        }
    },
    plugins: [],
    darkMode: "class"
};

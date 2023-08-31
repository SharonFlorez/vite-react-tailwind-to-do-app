import { useEffect, useState } from "react";
import IconMoon from "../icons/IconMoon";
import IconSun from "../icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme").includes("dark");

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4">
            <div className="flex justify-between items-end">
                <h1 className="text-white px-a pt-8 text-3xl font-semibold tracking-[0.5em]">
                    TODO
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    );
};

export default Header;

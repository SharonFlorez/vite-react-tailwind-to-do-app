import IconMoon from "../icons/IconMoon";

const Header = () => {
    return (
        <header className="container mx-auto px-4">
            <div className="flex justify-between items-end">
                <h1 className="text-white px-a pt-8 text-3xl font-semibold tracking-[0.5em]">
                    TODO
                </h1>
                <button>
                    <IconMoon />
                </button>
            </div>
        </header>
    );
};

export default Header;

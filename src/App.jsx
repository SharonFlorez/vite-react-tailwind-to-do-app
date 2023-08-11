import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen pb-8">
            <header className="container mx-auto px-4">
                <div className="flex justify-between items-end">
                    <h1 className="text-white px-a pt-8 text-3xl font-semibold tracking-[0.5em]">
                        TODO
                    </h1>
                    <button>
                        <MoonIcon />
                    </button>
                </div>
                <form className="bg-white rounded-md overflow-hidden p-4 flex gap-4 items-center mt-8">
                    <span className="rounded-full border-2 w-5 h-5 inline-block flex-none"></span>
                    <input
                        className="w-full text-gray-400 outline-none grow"
                        type="text"
                        placeholder="Create a new todo ..."
                    />
                </form>
            </header>

            <main className="container mx-auto px-4 mt-8">
                <div className="bg-white rounded-md [&>article]:p-4">
                    <article className="flex gap-4 items-center border-b-gray-300 border-b">
                        <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
                        <p className="text-gray-600 grow">
                            Lorem ipsum dolor sit amet.
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 items-center border-b-gray-300 border-b">
                        <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
                        <p className="text-gray-600 grow">
                            Lorem ipsum dolor sit amet.
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 items-center border-b-gray-300 border-b">
                        <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
                        <p className="text-gray-600 grow">
                            Lorem ipsum dolor sit amet.
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="p-4 flex justify-between">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">
                            Clear completed
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto px-4 mt-8">
                <div className="bg-white rounded-md p-4 flex justify-center gap-4">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>

            <p className="text-center mt-8">Drag and drop to reorder list</p>
        </div>
    );
};

export default App;

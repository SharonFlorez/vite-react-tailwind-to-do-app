import { useState } from "react";
import Header from "./components/web-site/Header";
import TodoComputed from "./components/web-site/TodoComputed";
import TodoCreate from "./components/web-site/TodoCreate";
import TodoFilter from "./components/web-site/TodoFilter";
import Footer from "./components/web-site/Footer";
import TodoList from "./components/web-site/TodoList";

const initialStateTodos = [
    { id: 1, title: "Go to the gym", completed: true },
    { id: 2, title: "Find a new job", completed: false },
    { id: 3, title: "Go to the doctor", completed: false },
    { id: 4, title: "Make breakfast", completed: false },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen pb-8">
            <Header />

            <main className="container mx-auto px-4">
                <TodoCreate createTodo={createTodo} />
                <TodoList todos={todos} />
                <TodoComputed />
                <TodoFilter />
            </main>

            <Footer />
        </div>
    );
};

export default App;

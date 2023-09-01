import { useEffect, useState } from "react";
import Header from "./components/web-site/Header";
import TodoComputed from "./components/web-site/TodoComputed";
import TodoCreate from "./components/web-site/TodoCreate";
import TodoFilter from "./components/web-site/TodoFilter";
import Footer from "./components/web-site/Footer";
import TodoList from "./components/web-site/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false
        };

        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const countUncompletedTodo = todos.filter((todo) => !todo.completed).length;

    const removeCompletedTodo = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilterValue = (filter) => setFilter(filter);

    const filteredTodo = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <div
            className="
                bg-mobile-light
                bg-no-repeat 
                bg-contain 
                bg-gray-300 
                min-h-screen 
                pb-8 
                transition-all 
                duration-1000
                dark:bg-gray-900 
                dark:bg-mobile-dark
                md:bg-desktop-light
                md:dark:bg-desktop-dark
            "
        >
            <Header />

            <main className="container mx-auto px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />
                <TodoList
                    todos={filteredTodo()}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
                <TodoComputed
                    countUncompletedTodo={countUncompletedTodo}
                    removeCompletedTodo={removeCompletedTodo}
                />
                <TodoFilter
                    changeFilterValue={changeFilterValue}
                    countUncompletedTodo={countUncompletedTodo}
                    filter={filter}
                    removeCompletedTodo={removeCompletedTodo}
                />
            </main>

            <Footer />
        </div>
    );
};

export default App;

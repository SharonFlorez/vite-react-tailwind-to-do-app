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
    { id: 4, title: "Make breakfast", completed: false }
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

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
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen pb-8 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
            <Header />

            <main className="container mx-auto px-4">
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
                    filter={filter}
                />
            </main>

            <Footer />
        </div>
    );
};

export default App;

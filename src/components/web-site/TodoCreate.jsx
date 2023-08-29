/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitTodo = (e) => {
        e.preventDefault();

        if (title.trim().length > 0) {
            createTodo(title);
            return setTitle("");
        }

        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmitTodo}
            className="bg-white rounded-md overflow-hidden p-4 flex gap-4 items-center mt-8"
        >
            <span className="rounded-full border-2 w-5 h-5 inline-block flex-none"></span>
            <input
                className="w-full text-gray-400 outline-none grow"
                type="text"
                placeholder="Create a new todo ..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;

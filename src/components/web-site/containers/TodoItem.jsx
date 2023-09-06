import PropTypes from "prop-types";
import IconCross from "../../icons/IconCross";
import IconCheck from "../../icons/IconCheck";
import React from "react";

// eslint-disable-next-line react/display-name
const TodoItem = React.forwardRef(
    ({ todo, updateTodo, removeTodo, ...props }, ref) => {
        const { id, title, completed } = todo;
        return (
            <article
                {...props}
                ref={ref}
                className="flex gap-4 items-center border-b-gray-300 border-b transition-all duration-1000"
            >
                <button
                    className={`rounded-full border-2 w-5 h-5 flex-none ${
                        completed
                            ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid place-items-center"
                            : "inline-block"
                    }`}
                    onClick={() => updateTodo(id)}
                >
                    {completed && <IconCheck />}
                </button>
                <p
                    className={`text-gray-600 grow dark:text-gray-400 transition-all duration-1000 ${
                        completed && "line-through"
                    }`}
                >
                    {title}
                </p>
                <button className="flex-none" onClick={() => removeTodo(id)}>
                    <IconCross />
                </button>
            </article>
        );
    }
);

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }),
    updateTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
};

export default TodoItem;

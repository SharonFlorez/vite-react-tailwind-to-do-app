import PropTypes from "prop-types";
import TodoItem from "./containers/TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
    return (
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-8 overflow-hidden dark:bg-gray-800 transition-all duration-1000">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired
        })
    ),
    updateTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
};

export default TodoList;

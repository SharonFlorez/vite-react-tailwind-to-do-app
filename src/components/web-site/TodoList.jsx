import PropTypes from "prop-types";
import TodoItem from "./containers/TodoItem";

const TodoList = ({ todos }) => {
    return (
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-8">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};

export default TodoList;

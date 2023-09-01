import PropTypes from "prop-types";

const TodoComputed = ({ countUncompletedTodo, removeCompletedTodo }) => {
    return (
        <section className="p-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800 transition-all duration-1000">
            <span className="text-gray-400">
                {countUncompletedTodo} items left
            </span>
            <button className="text-gray-400" onClick={removeCompletedTodo}>
                Clear completed
            </button>
        </section>
    );
};

TodoComputed.propTypes = {
    countUncompletedTodo: PropTypes.number.isRequired,
    removeCompletedTodo: PropTypes.func.isRequired
};

export default TodoComputed;

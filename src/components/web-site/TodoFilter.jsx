import PropTypes from "prop-types";

const TodoFilter = ({
    changeFilterValue,
    countUncompletedTodo,
    removeCompletedTodo,
    filter
}) => {
    const filterOptions = [
        { value: "all", label: "All" },
        { value: "active", label: "Active" },
        { value: "completed", label: "Completed" }
    ];

    const getButtonStyles = (value) => {
        return filter === value
            ? "text-blue-500"
            : "text-gray-400 hover:text-blue-500";
    };

    return (
        <section className="container mx-auto mt-8">
            <div className="bg-white rounded-md p-4 flex justify-center gap-4 dark:bg-gray-800 transition-all duration-1000 md:justify-around">
                <span className="hidden text-gray-400 md:block">
                    {countUncompletedTodo} items left
                </span>
                {filterOptions.map(({ value, label }) => (
                    <button
                        key={value}
                        className={`${getButtonStyles(value)}`}
                        onClick={() => changeFilterValue(value)}
                    >
                        {label}
                    </button>
                ))}
                <button
                    className="hidden text-gray-400 md:block"
                    onClick={removeCompletedTodo}
                >
                    Clear completed
                </button>
            </div>
        </section>
    );
};

TodoFilter.propTypes = {
    changeFilterValue: PropTypes.func.isRequired,
    countUncompletedTodo: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    removeCompletedTodo: PropTypes.func.isRequired
};

export default TodoFilter;

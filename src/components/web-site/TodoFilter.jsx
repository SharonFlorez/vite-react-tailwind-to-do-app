import PropTypes from "prop-types";

const TodoFilter = ({ changeFilterValue, filter }) => {
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
            <div className="bg-white rounded-md p-4 flex justify-center gap-4 dark:bg-gray-800 transition-all duration-1000">
                {filterOptions.map(({ value, label }) => (
                    <button
                        key={value}
                        className={`${getButtonStyles(value)}`}
                        onClick={() => changeFilterValue(value)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </section>
    );
};

TodoFilter.propTypes = {
    changeFilterValue: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
};

export default TodoFilter;

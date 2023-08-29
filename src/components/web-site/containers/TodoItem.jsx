import PropTypes from "prop-types";
import IconCross from "../../icons/IconCross";
import IconCheck from "../../icons/IconCheck";

const TodoItem = ({ todo }) => {
    const { title, completed } = todo;
    return (
        <article className="flex gap-4 items-center border-b-gray-300 border-b">
            <button
                className={`rounded-full border-2 w-5 h-5 flex-none ${
                    completed
                        ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid place-items-center"
                        : "inline-block"
                }`}
            >
                {completed && <IconCheck />}
            </button>
            <p className="text-gray-600 grow">{title}</p>
            <button className="flex-none">
                <IconCross />
            </button>
        </article>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }),
};

export default TodoItem;

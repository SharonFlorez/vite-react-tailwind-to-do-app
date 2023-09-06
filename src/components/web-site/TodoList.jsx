import { Droppable, Draggable } from "@hello-pangea/dnd";
import PropTypes from "prop-types";
import TodoItem from "./containers/TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvider) => (
                <div
                    className="bg-white rounded-t-md [&>article]:p-4 mt-8 overflow-hidden dark:bg-gray-800 transition-all duration-1000 md:rounded-b-md"
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            draggableId={`${todo.id}`}
                            index={index}
                        >
                            {(draggableProvider) => (
                                <TodoItem
                                    todo={todo}
                                    updateTodo={updateTodo}
                                    removeTodo={removeTodo}
                                    ref={draggableProvider.innerRef}
                                    {...draggableProvider.dragHandleProps}
                                    {...draggableProvider.draggableProps}
                                />
                            )}
                        </Draggable>
                    ))}

                    {droppableProvider.placeholder}
                </div>
            )}
        </Droppable>
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

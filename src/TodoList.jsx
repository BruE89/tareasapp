import PropTypes from 'prop-types';
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toogleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "La lista está vacía..."}
            {todos.map(todo => ( 
                <TodoItem 
                    {...todo}
                    key={todo.id}
                    toogleTodo={toogleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
}

// Validación de tipos de las props
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired,
    toogleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};
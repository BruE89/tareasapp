import PropTypes from 'prop-types';

export function TodoItem({ completed, id, title, toogleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={e => toogleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Borrar</button>
        </li>
    );
}

// Validación de tipos de las props
TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    toogleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};
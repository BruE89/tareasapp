import { useState } from "react"
import PropTypes from 'prop-types'

export function NewTodoForm({ todosList, onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
    
        if (newItem.trim() === "") {
            return window.alert("El nombre no puede estar vacío")
            
        }

        if (todosList.some(todo => todo.title.toLowerCase() === newItem.trim().toLowerCase())) {
            return window.alert("Ya existe una tarea con el mismo nombre")
            
        }

        onSubmit(newItem)
        setNewItem("")

    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">Nueva Tarea</label>
                <input 
                    value={newItem} 
                    type="text" 
                    id="item" 
                    onChange={e => {
                        setNewItem(e.target.value);
                    }} 
                />
            </div>
            <button type="submit" className="btn">Agregar</button>
        </form>
    );
}

// Validación de tipos de las props
NewTodoForm.propTypes = {
    todosList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired
};

import { useState } from "react";
import Swal from "sweetalert2";

export const Form = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: 'pending',
        priority: true
    })

    const { title, description, state, priority } = todo

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!title.trim() || !description.trim()) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops....',
                text: 'Title and description is required',
            })
        }

        addTodo({
            id: Date.now(),
            ...todo,
            state: state === 'completed'
        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Todo add successfully',
            showConfirmButton: false,
            timer: 2000
        })
    }

    const handleChange = (e) => {

        const { name, type, value, checked } = e.target
        
        setTodo({
            ...todo,
            [name] : type === 'checkbox' ? checked : value
        })
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                placeholder="Enter todo"
                className="form-control mb-3"
                name="title"
                value={title}
                onChange={handleChange}
            />

            <textarea 
                className="form-control mb-3"
                placeholder="Enter description"
                name="description"
                value={description}
                onChange={handleChange}
            ></textarea>

            <select 
                className="form-select mb-3"
                name="state"
                value={state}
                onChange={handleChange}
            >
                <option value='pending'>Pending</option>
                <option value='completed'>Completed</option>
            </select>

            <div className="form-check mb-3">
                <input 
                    type="checkbox"
                    name="priority"
                    id="check"
                    checked={priority}
                    onChange={handleChange}
                    className="form-check-input"
                />
                
                <label htmlFor="check">Priority</label>
            </div>

            <button 
                type="submit"
                className="btn btn-primary"
            >
                Add todo
            </button>
        </form>
    )
}
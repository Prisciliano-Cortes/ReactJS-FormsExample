import { useState } from "react"
import { useRef } from "react"

export const Controller = () => {

    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [state, setState] = useState('pending')

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: 'pending',
        priority: true
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (Object.values(todo).includes('')) {
            return console.log('Field is required');
        }

        console.log(todo);
    }

    const { title, description, state, priority } = todo

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
                //onChange={(e) => setTitle(e.target.value)}
            />

            <textarea 
                className="form-control mb-3"
                placeholder="Enter description"
                name="description"
                value={description}
                onChange={handleChange}
                //onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <select 
                className="form-select mb-3"
                name="state"
                value={state}
                onChange={handleChange}
                //onChange={(e) => setState(e.target.value)}
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
                Processing
            </button>
        </form>
    )
}
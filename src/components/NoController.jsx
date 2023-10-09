import { useState } from "react"
import { useRef } from "react"

export const NoController = () => {

    const form = useRef(null)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        const data = new FormData(form.current)

        const dataObject = Object.fromEntries([...data.entries()])

        //*** Validations */
        if (Object.values(dataObject).includes('')) {
            return setError('Field is required');
        }

        console.log(dataObject);
    }

    return (
        <form 
            onSubmit={ handleSubmit }
            ref={form}
        >
            <input 
                type="text"
                placeholder="Enter todo"
                className="form-control mb-3"
                name="title"
            />

            <textarea 
                className="form-control mb-3"
                placeholder="Enter description"
                name="description"
            ></textarea>

            <select 
                className="form-select mb-3"
                name="state"
            >
                <option value='pending'>Pending</option>
                <option value='completed'>Completed</option>
            </select>

            <button 
                type="submit"
                className="btn btn-primary"
            >
                Processing
            </button>

            <p>
                {
                    error ?? error
                }
            </p>
        </form>
    )
}
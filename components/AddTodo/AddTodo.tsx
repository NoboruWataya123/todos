import React, { useState } from 'react'
import data from '../../public/data.json';

export default function AddTodo({onAdd}) {
    const [todo, setTodo] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() === '') {
            return;
        }
        const newTodo = {
            id: (data.length + 1).toString(),
            name: todo,
            status: 'active'
        }
        onAdd(newTodo);
        data.push(newTodo);
        setTodo('');
    }

    function handleChange(e) {
        setTodo(e.target.value);
      }
    
    return (
        <form onSubmit={handleSubmit} className='flex flex-row justify-center items-center w-full mt-8'>
            <input value={todo} onChange={handleChange} className='w-full mr-2 p-2 border-2 border-gray-300 rounded-lg' type='text' placeholder='Add a todo'/>
            <button type="submit" className='w-1/4 sm:w-1/6 p-2 border-2 border-gray-300 rounded-lg text-center text-white font-header bg-blue-600 hover:scale-105 hover:transition-all hover:text-white'>Add</button>
        </form>
    )
}
